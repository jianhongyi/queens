import parse5 from 'parse5'

export default {
  props: {
    body: { // 题干内容
      type: Object,
      required: true,
      default: () => ({})
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    templateType: {
      type: String,
      required: true,
      default: ''
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
    }
  },
  methods: {
    // 将html 转为AST
    toAST(html) {
      if (!html) return []
      return parse5.parseFragment(html)
    }
  },
  data() {
    return {
      content: {} // 题干内容
    }
  },
  created() {
    this.content = this.toAST(this.body.content)
  }
}
