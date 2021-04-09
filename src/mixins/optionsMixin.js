import { OPTION_MAPS } from '../utils/constant'
import { cloneDeep } from 'lodash'
export default {
  props: {
    // 选项数据
    options: {
      type: Array,
      default: () => ([]),
      required: true
    },
    // 答案
    answers: {
      type: Array,
      default: () => ([])
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
    // 用戶选择结果集合
    userAnswer: {
      type: Object,
      default: () => ({}),
      required: false
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
    }
  },

  data: () => {
    return {
      // 选项映射标识，A/B/C/D
      optionMaps: OPTION_MAPS,
      // 正确项的下标
      answerIndex: null
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
      if (this.templateType === 'imgSelect') {
        const reg = /https?.*?\.(jpe?g|gif|png|webp|jfif|bmp|tif)/i
        this.options.forEach((item, index) => {
          if (item.content && reg.test(item.content)) {
            item.src = item.content?.match(reg)[0]
          }
        })
      } else if (this.templateType === 'audioSelect') {
        this.options.forEach((item, index) => {
          if (!item.audioInfo || !item.audioInfo.url) {
            this.options.splice(index, 1)
          }
        })
      } else {
        this.options.forEach((item, index) => {
          if (!item.content) {
            this.options.splice(index, 1)
          }
        })
      }
      return this.options
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
    }
  },

  beforeDestroy() {
    this.optionMaps = null
    this.answerIndex = null
  },

  methods: {
    // 点击选择选项操作
    touchHandler(index, e) {
      !this.multipleChoice && (this.effectiveOptions.forEach(item => {
        if (item.isChecked) {
          this.$set(item, 'isChecked', null)
          delete item.isChecked
        }
      }))
      this.$set(this.effectiveOptions[index], 'isChecked', true)
      if (this.multipleChoice) {
        this.userAnswer.answers.push(this.effectiveOptions[index]?.content || '')
      } else {
        this.$set(this.userAnswer.answers, '0', this.effectiveOptions[index]?.content || '')
      }
      this.$emit('touch-handler', this.effectiveOptions[index])
      e.stopPropagation()
      e.preventDefault()
    },

    // 校验答案
    checkAnswer(cb) {
      let answerResult = true
      const answers = this.answers.map(item => item.content)
      this.userAnswer.answers.forEach(item => {
        if (!answers.includes(item)) {
          answerResult = false
        }
      })
      cb && cb(cloneDeep(this.userAnswer), cloneDeep(this.answers), answerResult)
    },

    // 页面展示结果
    showResult() {
      const answers = this.answers.map(item => item.content)
      this.effectiveOptions.forEach(item => {
        if (this.userAnswer.answers?.findIndex(anItem => anItem?.content ? anItem?.content === item.content : anItem === item.content) > -1) { // 基础题userAnswer.answers中是字符串数组，复合题是对象数组
          item.isChecked = true
        }
        if (answers?.includes(item.content)) {
          item.isTure = true
        }
      })
      // this.options.forEach(item => {
      //   if (answers.includes(item.content)) {
      //     item.isTure = true
      //   }
      // })
    },

    // 重置
    reset() {
      this.effectiveOptions.forEach(item => {
        this.$set(item, 'isChecked', null)
        this.$set(item, 'isTure', null)
      })
    }
  }
}
