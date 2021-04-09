import { TEMPLATETYPE } from '../utils/constant'
export default {
  props: {
    quesData: {
      type: Object,
      default: () => ({}),
      required: true
    },
    // 外层容器样式
    wrapperStyle: {
      type: Object,
      default: () => ({}),
      required: false
    },
    // 主体区域样式
    mainAreaStyle: {
      type: Object,
      default: () => ({}),
      required: false
    },
    // 主体区域输入类
    mainAreaClass: {
      type: String,
      default: '',
      required: false
    },
    index: {
      type: [String, Number],
      default: ''
    },
    templateType: {
      type: String,
      default: 'selectFillComplex',
      required: true
    },
    preview: {
      type: Boolean,
      default: false
    },
    showAnswer: {
      type: Boolean,
      default: true
    },
    isShowAnsweringArea: {
      type: Boolean,
      default: true
    },
    initActiveIndex: {
      type: Number,
      default: -1
    }
  },
  provide() {
    return {
      composite: this
    }
  },
  data() {
    return {
      answers: [], // 正确答案
      activeIndex: -1, // 当前选中对象下标
      userAnswerNeedInput: true, // 标志是否已经完成全部内容选择或填写 true 还需要填写， false已经填写完成
      canReset: false, // 是否可以重置内容
      nowUserAnswers: [], // 用户选择的答案
      options: [], // 选项
      body: {} // 题干内容
    }
  },
  created() {
    this.initUserAnswers()
    if (this.initActiveIndex !== -1) this.changeActiveIndex(this.initActiveIndex)
  },
  watch: {
    preview: {
      handler(value) {
        if (value) {
          this.activeIndex = 0
          this.checkUserAnswer()
        }
      },
      immediate: true
    },
    'quesData.activeIndex'(index) {
      this.activeIndex = index
    }
  },
  methods: {
    /**
     * 改变activeIndex
     * @param {number} index
     */
    changeActiveIndex(index) {
      this.activeIndex = index
    },
    /**
     * 用户点击选项区域选择答案
     * @param {object} { contentIdx: **, optionsIndex: **,  content: ** }
     *
     */
    selectAnswerItem(data) {
      if (this.activeIndex < 0 || !data.content) return // 如果activeIndex被置为-1表示当前无选中
      this.$set(this.nowUserAnswers, this.activeIndex, data)
      if (`${data.optionsIndex}` !== 'undefined') { // 只有选词填空才有optionsIndex
        this.$set(this.options[data.optionsIndex], 'isChecked', true)
      }
      this.outoSetActiveIndex()
      this.userAnswerNeedInput = this.checkUserAnswerHaveNull()
      this.canReset = true
    },
    inputSetValue(data) {
      this.$set(this.nowUserAnswers, this.activeIndex, { content: data })
    },
    /**
     * 自动设置activeIndex
     * 填入内容后跳入下一个没有填写的空，如无则不选中
     */
    outoSetActiveIndex() {
      const answerLenght = this.nowUserAnswers.length
      if (this.templateType === TEMPLATETYPE['selectFillC'] && this.activeIndex >= answerLenght) { // 如果当前activeIndex就是最后一个直接置为-1
        this.activeIndex = -1
        return
      }
      for (let i = this.activeIndex + 1; i < answerLenght; i++) {
        if (JSON.stringify(this.nowUserAnswers[i]) === '{}') {
          this.activeIndex = i
          return
        }
      }
      if (this.templateType === TEMPLATETYPE['selectFillC']) {
        this.activeIndex = -1 // 如果当前activeIndex到最后都没有空直接置为-1，前面还有空的需要手动选中, 只有selectFillComplex题型需要重置-1
      }
    },
    /**
     * @param {Boolean} type 为空或为false时 检测userAnswer是否还有没有设置答案的. true 还有没有选择的，false已经完成
     * @param {Boolean} type 为true时，检测userAnswer是否已经有选择内容. true 已有选择内容，false全部为空
     *
     */
    checkUserAnswerHaveNull(type) {
      if (type) {
        return this.nowUserAnswers.findIndex(item => JSON.stringify(item) !== '{}') > -1
      }
      return this.nowUserAnswers.findIndex(item => JSON.stringify(item) === '{}') > -1
    },
    /**
     * 用户点击题干区域选中或取消某个选项
     * @param {Number} activeIndex 当前选中的对象的下标
     */
    selectQuestionItem(activeIndex) {
      this.activeIndex = activeIndex
      this.$set(this.quesData, 'activeIndex', activeIndex)
      if (this.preview) return // 预览模式时不对nowUserAnswers进行操作
      if ([TEMPLATETYPE.selectFillC].includes(this.templateType)) { // 只有选词填空需要操作题干
        const userAnswersItem = this.nowUserAnswers[activeIndex]
        if (JSON.stringify(userAnswersItem) !== '{}') { // 如果已有内容则取消选择的内容。
          this.userAnswerNeedInput = true
          if (this.options[userAnswersItem.optionsIndex]) {
            this.$set(this.options[userAnswersItem.optionsIndex], 'isChecked', false)
          }
          this.$set(this.nowUserAnswers, activeIndex, {})
          this.canReset = this.checkUserAnswerHaveNull(true)
        }
      }
    },
    /**
     * 点击重置按钮，重置userAnswer
     */
    resetUserAnswer() {
      if (!this.canReset) return
      this.initUserAnswers()
    },
    /**
     * 获取用户答案中的contentIdx, 用于提交给后端
     * @param {Number} type 默认1 获取contentIdx, 2获取实际内容
     * return Array[contentIdx]
     */
    getUserAnswerContentIdx(type = 1) {
      if (this.userAnswerNeedInput) return
      if (type === 1) {
        return this.nowUserAnswers.map(i => i.contentIdx)
      } else {
        return this.nowUserAnswers.map(i => i.content)
      }
    },
    /**
     * 检查用户答案的正确性
     * @param {Number} 默认1,校验contentIdx， 2 校验content
     * 结果直接体现在userAnswers中
     */
    checkUserAnswer() {
      let status = true
      let type = 1
      if ([TEMPLATETYPE.readFillC, TEMPLATETYPE.clozeFillC, TEMPLATETYPE.readJudgeC, TEMPLATETYPE.readSelectC].includes(this.templateType)) {
        type = 2
      }
      this.nowUserAnswers.forEach((item, index) => {
        let score = 0
        let isRight = false
        if (type === 1) { // 对比contentIdx
          if (item.contentIdx === this.answers[index].contentIdx) {
            isRight = true
          }
        } else { // 对比内容content
          const answerList = this.answers[index].content.split('|') // 有的答案多个是正确的，比如'sun|Sun|SUN' 只要用户输入这任一个都算对。
          answerList.forEach(answerItem => {
            if (answerItem === item.content) {
              isRight = true
            }
          })
        }
        if (isRight) {
          item.isRight = true
          score = 100
        } else {
          item.isRight = false
          score = 0
          status = false
        }

        if (this.quesData.subQuestions) {
          this.$set(this.quesData.subQuestions[index], 'userAnswer', { answers: [item], score })
        }
      })
      return new Promise((resolve, reject) => {
        try {
          const returnObj = {
            userCheckedAnswers: {
              answers: this.nowUserAnswers
            },
            trueAnswers: this.answers,
            answerResult: status
          }
          resolve(returnObj)
        } catch (e) {
          reject(e)
        }
      })
    },
    // 按照正确答案初始化用户选择的答案数组长度，
    initUserAnswers() {
      if (this.templateType !== TEMPLATETYPE.readFillC) {
        this.activeIndex = 0
      }
      const { body, options, answers, userAnswer, subQuestions } = this.quesData
      this.body = body
      this.options = (options && options.length) ? options : subQuestions
      this.options = this.options.map(item => {
        this.$set(item, 'isChecked', false)
        return item
      })
      this.answers = answers || subQuestions.map(item => item.answers[0]) // 目前只支持单选
      if ([TEMPLATETYPE.readFillC].includes(this.templateType)) { // 阅读填空时，如果前面有提示字母，需要将字母和答案拼接到一起显示。
        let handleBody = body.content
        if (/[a-zA-Z]+<img [^>]* class=\"ke-content-kong\"(.*?)>/g.test(handleBody)) {
          let index = -1
          handleBody = handleBody.replace(/<img [^>]* class=\"ke-content-kong\"(.*?)>/g, (str, $1) => {
            index++
            return `*${index}*`
          })
          handleBody.replace(/([a-zA-Z\s])\*(\d)\*/g, (str, $1, $2) => {
            if ($1 !== ' ') {
              this.answers[$2].fillContent = $1 + this.answers[$2].content
            }
          })
          this.$set(this.quesData, 'answers', this.answers)
        }
      }

      if (this.preview) { // 预览
        this.nowUserAnswers = [TEMPLATETYPE.selectFillC, TEMPLATETYPE.readFillC].includes(this.templateType) ? userAnswer.answers : subQuestions.map(item => (typeof item.userAnswer.answers[0] === 'string' ? { content: item.userAnswer.answers[0] } : item.userAnswer.answers[0])) // 目前只支持单选
        this.checkUserAnswer()
      } else {
        const length = this.answers.length
        if (!userAnswer) {
          this.$set(this.quesData, 'userAnswer', { answers: [] })
        }
        this.quesData.userAnswer.answers = this.nowUserAnswers = new Array(length).fill({})
      }
    }
  }
}
