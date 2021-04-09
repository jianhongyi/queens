import { Image as VanImage } from 'vant'
import { OPTION_MAPS, REGEXPS } from '../utils/constant'
import { uuid } from '../utils'
import { cloneDeep } from 'lodash'
import { Toast } from 'vant'
export default {
  props: {
    // 题干内容，用于字母排序
    body: {
      type: Object,
      default: () => ({}),
      required: false
    },
    // 排序项数组
    options: {
      type: Array,
      default: () => ([]),
      required: true
    },
    // 答案
    answers: {
      type: Array,
      default: () => ([]),
      required: true
    },
    // 选择题类型，textSelect:文本选项选择题；imgSelect:图片选项选择题；audioSelect:音频选项选择题
    templateType: {
      type: String,
      default: ''
    },
    // 是否可以多选
    multipleChoice: {
      type: Boolean,
      default: false
    },
    // 是否预览
    preview: {
      type: Boolean,
      default: false
    },
    // 是否可以交互
    canActive: {
      type: Boolean,
      default: true
    },
    // 用戶选择结果集合
    userAnswer: {
      type: Object,
      default: () => ({}),
      required: false
    }
  },
  components: {
    VanImage
  },
  data() {
    return {
      // 用于展示结果集合
      showOptions: [],
      // 选项映射标识，A/B/C/D
      optionMaps: OPTION_MAPS,
      uAnswers: [],
      // 是否作对了
      answerResult: null,
      isShowResult: false
    }
  },
  created() {
    if (!this.userAnswer.answers) {
      this.$set(this.userAnswer, 'answers', [])
    }
    if (!this.userAnswer.score) {
      this.$set(this.userAnswer, 'score', 0)
    }
  },
  computed: {
    effectiveOptions() {
      if (this.templateType === 'imgSort') {
        this.options.forEach((item, index) => {
          if (item.content && REGEXPS.imgUrlReg.test(item.content)) {
            item.src = item.content?.match(REGEXPS.imgUrlReg)[0]
          }
        })
        return this.options
      } else if (this.templateType === 'sentenceSort') {
        this.options.forEach((item, index) => {
          item.indexMap = OPTION_MAPS[index]
        })
        return this.options
      } else {
        return this.options
      }
    }
  },
  watch: {
    preview: {
      handler(value) {
        if (value) {
          this.showResult()
        }
      },
      immediate: true
    },
    showOptions: {
      handler(value) {
        this.userAnswer.answers = []
        value.forEach(item => {
          if (!item.isLetter && item.content) {
            this.userAnswer.answers.push(item.contentIdx)
          }
        })
      },
      deep: true
    }
  },
  methods: {
    // 点击选择选项操作
    touchHandler(item, e) {
      if (!this.canActive || this.preview) {
        return
      }
      if (!this.showOptions.includes(item)) {
        this.showOptions.push(item)
        item.index = this.showOptions.length
        item.isChecked = true
      }
      e.stopPropagation()
      e.preventDefault()
    },
    // 点击排序项操作
    itemcClickHandler(item, index) {
      if (!this.canActive || this.preview) {
        return
      }
      const target = this.setTargetIndex(this.effectiveOptions, item, '')
      target && (target.isChecked = false)
      this.showOptions.splice(index, 1)
      this.showOptions.forEach((itx, ind) => {
        this.setTargetIndex(this.effectiveOptions, itx, ind + 1)
      })
    },
    // 查找符合要求的项并设置其index的值
    setTargetIndex(options, item, index) {
      const { contentIdx } = item
      const target = options.find(it => {
        return it.contentIdx + '' === contentIdx + ''
      })
      target && (target.index = index)
      return target
    },
    // 判断作答结果
    showResult() {
      if (!this.userAnswer?.answers?.length) {
        return
      }
      if (this.userAnswer.answers.length !== this.answers.length) {
        Toast('请全部选择！')
        return
      }
      this.answerResult = true
      this.userAnswer?.answers?.forEach((contentIdx, index) => {
        // debugger
        const target = this.effectiveOptions.find(it => {
          return it.contentIdx + '' === contentIdx + ''
        })
        if (contentIdx + '' === this.answers[index] + '') {
          target && (target.isTure = true)
        } else {
          target && (target.isFalse = true)
          this.answerResult = false
        }
        target && (target.index = index + 1)
        target && (target.isChecked = true)
        this.showOptions[index] = target
      })
      this.isShowResult = true
      this.$nextTick(() => {
        if (this.mark) {
          const obj = {}
          obj.isLetter = true
          obj.content = this.mark
          obj.isChecked = true
          obj.isTure = this.answerResult
          obj.isFalse = !this.answerResult
          obj.contentIdx = uuid()
          this.showOptions.push(obj)
        }
        this.caculateItemWrapperHeight && this.caculateItemWrapperHeight()
      })
    },
    // 校验答案
    checkAnswer(cb) {
      this.answerResult = true
      const answers = this.answers
      this.userAnswer?.answers.forEach((contentIdx, index) => {
        if (contentIdx + '' !== answers[index] + '') {
          this.answerResult = false
        }
      })
      cb && cb(cloneDeep(this.userAnswer), cloneDeep(this.answers), this.answerResult)
    },
    reset() {
      this.options.forEach(item => {
        item.isChecked = false
        item.isFalse = null
        item.isTure = null
        item.index = null
      })
      this.showOptions = []
      this.caculateHeight('optionInner', true)
    }
  }
}
