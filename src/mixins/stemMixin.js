// 填空题题干公共方法
export default {
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    structure: { // 题型 选择题：0，判断题：8，填空题：2，趣配音: 5，排序: 6，连线：7
      type: String,
      required: true,
      default: ''
    },
    templateType: { // 子题型 模版
      type: String,
      required: true,
      default: ''
    },
    body: { // 题干内容
      type: Object,
      required: true,
      default: () => {}
    },
    correctAnswers: { // 填空题 正确答案
      type: Array,
      required: false,
      default: () => {
        return []
      }
    },
    answers: { // 填空题 学生答案
      type: Object,
      required: false,
      default: () => {
        return {
          answer: []
        }
      }
    },
    preview: { // 预览模式着色且不可输入
      type: Boolean,
      default: false
    },
    canActive: { // 是否可以交互
      type: Boolean,
      default: true
    },
    reg: { // 匹配空的空格
      type: RegExp,
      default: () => {
        return new RegExp(/<img [^>]* class=\"ke-content-kong\"(.*?)>/gi)
      }
    },
    hintReg: { // 匹配空的空格
      type: RegExp,
      default: () => {
        return new RegExp(/\w+<span class=\"ke-content-kong (.*?)>(.*?)<\/span>/gi)
      }
    },
    optionsRandomSort: { // 答案有序还是无序 true有序 false无序
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      content: '', // 题干内容
      answersArr: { // 学生答案
        answers: []
      },
      correctAnswersArr: [] // 正确答案
    }
  },
  beforeDestroy() {
    this.answersArr = null
    this.correctAnswersArr = null
  },
  mounted() {
    this.$emit('img-click-event')
  },
  methods: {
    // 去左右空格
    trim(str) {
      return str.replace(/&nbsp;/g, '')
    },
    // 添加className判断
    setClassName(index) {
      let str = `ke-content-kong ${this.templateType}`
      const userAnswer = this.answersArr.answers[index]
      if (this.preview) {
        if (this.optionsRandomSort) {
          str += this.correctAnswers[index].content.split('|').includes(userAnswer) ? ' right' : ' wrong'
        } else {
          const correctIndex = this.correctAnswersArr.indexOf(userAnswer)
          str += correctIndex >= 0 ? ' right' : ' wrong'
          correctIndex >= 0 && this.correctAnswersArr.splice(correctIndex, 1)
        }
      }
      if (this.templateType === 'wordFill' && userAnswer) {
        str += ' haveAnser'
        if (userAnswer.length > 10) {
          str += ' anserLong'
        }
      }
      return str
    },
    getAnswer(e) {
      // 填空题型 获取答案
      this.answersArr.answers = []
      const documents = this.$refs.stem.getElementsByClassName(this.templateType)
      for (let i = 0; i < documents.length; i++) {
        const el = documents[i]
        this.answersArr.answers.push(this.templateType === 'letterFill' ? el.value : el.innerText)
      }
      // 通过答案情况添加不同className控制样式
      const el = e.target
      const classNameHint = el.className.includes('hint')
      el.className = `${this.templateType} ${classNameHint ? 'hint' : ''}`
      if (el.innerText) {
        el.className = `${el.className} haveAnser`
        if (el.innerText.length > 10) {
          el.className = `${el.className} haveAnser anserLong`
        }
      }
    }
  }
}
