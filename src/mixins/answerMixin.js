import { OPTION_MAPS, REGEXPS, LINERTEMPLATE } from '../utils/constant'
import { getLetterAndWordFillAnswer, getPureText } from '../utils/index'
import { cloneDeep } from 'lodash'
// import 'amfe-flexible'
export default {
  props: {
    // 所有数据
    quesData: {
      type: Object,
      default: () => ({}),
      required: false
    },
    // 题干内容，用于单词填空和字母填空
    body: {
      type: Object,
      default: () => ({}),
      required: false
    },
    // 选项数据
    options: {
      type: Array,
      default: () => ([]),
      required: false
    },
    // 复合题的子题
    subQuestions: {
      type: Array,
      default: () => ([]),
      required: false
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
    // 偏移方向
    position: {
      type: String,
      default: 'center',
      required: false
    },
    // 复合题中使用，与题干联动的相关的index
    activeIndex: {
      type: Number,
      default: 0
    }
  },

  data: () => {
    return {
      // 选项映射标识，A/B/C/D
      optionMaps: OPTION_MAPS,
      initialSwipe: 0, // swipe初始化值
      timeOut: null,
      timerIndex: null
    }
  },

  created() {
    this.initialSwipe = this.activeIndex
    if (localStorage.getItem('isShowSwiperIcon') === null) {
      localStorage.setItem('isShowSwiperIcon', true)
    }
    localStorage.getItem('isShowSwiperIcon') === 'true' ? this.isShowSwiperIcon = true : this.isShowSwiperIcon = false
  },
  beforeDestroy() {
    clearTimeout(this.timerIndex)
    this.timerIndex = null
  },

  computed: {
    effectiveAnswers() {
      if (this.templateType === 'textSelect' || this.templateType === 'audioSelect') {
        const options = this.options.map(item => {
          return item.content
        })
        this.answers.forEach(item => {
          const index = options.indexOf(item.content)
          if (index !== -1) {
            item.index = this.optionMaps[index]
            item.audioInfo = this.options[index] && this.options[index].audioInfo
          }
        })
        return this.answers
      } else if (this.templateType === 'imgSelect') {
        const reg = REGEXPS.imgUrlReg
        this.answers.forEach(item => {
          if (reg.test(item.content)) {
            item.src = item.content?.match(reg)[0]
          }
        })
        return this.answers
      } else if (this.templateType === 'wordFill' || this.templateType === 'letterFill') {
        const answers = cloneDeep(this.answers)
        const splitReg = /\|/
        const cb = (function() {
          let i = 0
          return function() {
            let result = answers[i++]?.content
            if (splitReg.test(result)) {
              result = `<u class="queens-fill-underline">${result.split('|')[0]}</u>`
            }
            return result
          }
        })()
        const bodyContent = this.body?.content
        const result = getLetterAndWordFillAnswer(bodyContent, cb)
        return result
      } else if (this.templateType === 'numFill') {
        const answers = cloneDeep(this.answers)
        const splitReg = /\|/
        const result = answers.map(item => {
          const content = item?.content
          if (splitReg.test(content)) {
            item.content = content.split('|')[0]
            return item
          } else {
            return item
          }
        })
        return result
      } else if (this.templateType === 'imgSort') {
        const result = new Array(this.answers.length)
        this.answers.forEach((item, index) => {
          const target = this.options.find(it => {
            return it.contentIdx === item
          })
          if (target) {
            if (REGEXPS.imgUrlReg.test(target.content)) {
              target.src = target.content?.match(REGEXPS.imgUrlReg)[0]
            }
            result[index] = target
          }
        })
        return result
      } else if (this.templateType === 'sentenceSort') {
        const result = []
        this.answers.forEach((item, index) => {
          const i = this.options.findIndex(it => {
            return it.contentIdx + '' === item + ''
          })
          if (i > -1) {
            result.push(this.optionMaps[i])
          }
        })
        return result.join(' ')
      } else if (this.templateType === 'textSort') {
        const result = []
        this.answers.forEach((item, index) => {
          const target = this.options.find(it => {
            return it.contentIdx + '' === item + ''
          })
          if (target) {
            result.push(target.content || '')
          }
        })
        const body = getPureText(this.body, '')
        let retStr = result.join(' ')
        if (REGEXPS.endsMarkRes.test(body)) {
          retStr = retStr + RegExp.$1
        }
        return retStr
      } else if (this.templateType === 'letterSort') {
        const answers = []
        this.answers.forEach((item, index) => {
          const target = this.options.find(it => {
            return it.contentIdx + '' === item + ''
          })
          if (target) {
            answers.push(target.content || '')
          }
        })
        const cb = (function() {
          let i = 0
          return function() {
            return answers[i++]
          }
        })()
        const bodyContent = getPureText(this.body, '', false, false, true)
        const result = getLetterAndWordFillAnswer(bodyContent, cb, true, false, true)
        return result
      } else if (LINERTEMPLATE.includes(this.templateType)) {
        const res = []
        const answers = cloneDeep(this.answers)
        answers.forEach((answerG, index) => {
          const arr = []
          answerG.forEach((contentIdx, inx) => {
            const target = this[`options${inx + 1}`].find(item => {
              return item.contentIdx === contentIdx
            })
            target && (arr[inx] = target)
          })
          arr.length && (res[index] = arr)
        })
        return res
      } else {
        return this.answers
      }
    },
    // 答案水平排布情况
    flexPosition() {
      let result = 'center'
      switch (this.position) {
        case 'center':
          result = 'center'
          break
        case 'left':
          result = 'flex-start'
          break
        case 'right':
          result = 'flex-end'
          break
        default:
          result = 'center'
      }
      return result
    }
  },

  watch: {
    activeIndex: {
      handler(index) {
        if (!this.swipeTo) {
          this.$refs.mySwiper && this.$refs.mySwiper.swipeTo(index)
        }
        // 停掉popup中所有语音播放
        this.$nextTick(() => {
          if (this.$refs.readSelectComplexAns) {
            const audios = this.$refs.readSelectComplexAns.getElementsByTagName('audio')
            for (let i = 0; i < audios.length; i++) {
              audios[i].pause()
            }
          }
        })
      }
    }
  },

  methods: {
    // 滑动卡片后触发
    onChange(index) {
      this.pauseAllAudio()
      this.swipeTo = true
      this.$set(this.quesData, 'activeIndex', index)
      this.$emit('change-active-index', index)
      localStorage.setItem('isShowSwiperIcon', false)
      this.isShowSwiperIcon = false
      setTimeout(() => {
        this.swipeTo = false
      }, 100)
    },
    // 点击题目切换器操作，用在阅读选择、阅读判断中
    clickHandler(item, index, preIndex) {
      this.$set(this.quesData, 'activeIndex', index)
      this.$emit('change-active-index', index)
      this.$refs.mySwiper && this.$refs.mySwiper.swipeTo(index)
    },
    // 暂停所有音频
    pauseAllAudio() {
      clearTimeout(this.timerIndex)
      this.timerIndex = setTimeout(() => {
        const audios = document.querySelectorAll('audio')
        for (let i = 0; i < audios.length; i++) {
          audios[i].pause()
        }
      }, 50)
    }
  }
}
