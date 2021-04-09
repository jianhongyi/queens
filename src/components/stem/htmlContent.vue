<script>
import { getPureText } from '../../utils/index'
let placeIndex = -1
export default {
  name: 'HtmlContent',
  inject: ['composite'],
  props: {
    content: {
      type: Object,
      default: () => ({})
    },
    nowUserAnswers: {
      type: Array,
      default: () => ([])
    },
    activeIndex: {
      type: Number,
      default: -1
    },
    templateType: {
      type: String,
      default: 'selectFillComplex',
      required: true
    },
    isPreview: {
      type: Boolean,
      default: false
    },
    canActive: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      styleType: 0 // 0 默认框 1下划线 2 输入框
    }
  },
  created() {
    this.styleType = this.styleTypeByTemplateType()
  },
  methods: {
    // 通过templateType 判断需要使用哪种styleType, 完型填空：clozeFillComplex、选词填空：selectFillComplex、阅读填空：readFillComplex
    styleTypeByTemplateType(templateType) {
      if (['readFillComplex'].includes(this.templateType)) {
        return 2
      } else if (['clozeFillComplex'].includes(this.templateType)) {
        return 1
      } else { // selectFillComplex
        return 0
      }
    },
    // 组装attrs
    assembleAttrs(attrs) {
      const attrsObj = {}
      if (!attrs) return attrsObj
      attrs.forEach(item => {
        attrsObj[item.name] = item.value
      })
      return attrsObj
    },
    //  组装className
    assembleClassName(placeIndex, itemTextDom) {
      let className = `inputKong ${'styleType' + this.styleType}` // 标识和样式类型
      if (this.isPreview) { // 是否为预览模式
        if (this.nowUserAnswers[placeIndex]?.isRight) {
          className += ' isPreview correct'
        } else {
          className += ' isPreview mistake'
        }
      } else {
        className += ' isNotPreview'
      }
      if (this.activeIndex === placeIndex) { // 是否被选中
        className += ' active'
      }
      if (!this.isPreview && this.nowUserAnswers[placeIndex]?.content) { // 是否已经被输入
        className += ' inputed'
      }
      if (!this.canActive) { // 是否可交互
        className += ' canNotActive'
      }
      if (itemTextDom && /\w$/.test(itemTextDom.value)) {
        className += ' hint'
      }
      return className
    },
    extractHintContent(itemTextDom) {
      if (itemTextDom && itemTextDom.value && /\w$/.test(itemTextDom.value)) {
        return this.getLastWord(itemTextDom.value, true)
      } else {
        return ''
      }
    },
    // 获取一句话中的最后一个单词或者去掉一句话中最后一个单词 type 默认false, 返回去掉最后一个单词的句子，true 返回最后一个单词
    getLastWord(word = '', type) {
      if (!word) return ''
      if (type) {
        return word.match(/\b\w+$/)[0]
      } else {
        return word.replace(/\b\w+$/, '')
      }
    },
    // 渲染函数
    domRender(dom, createElement, index, list) {
      if (dom.nodeName === '#document-fragment') { // 最顶层
        return createElement(
          'div', {
            ref: 'htmlContent',
            class: {
              htmlContent: true
            }
          }, dom.childNodes?.length ? dom.childNodes.map((item, i) => this.domRender(item, createElement, i, dom.childNodes)) : []
        )
      } else if (dom.tagName) {
        if (dom.tagName === 'img' && dom.attrs.findIndex(i => i.value === 'ke-content-kong') > -1) { // 替换掉富文本中传过来的输入框内容
          placeIndex += 1
          const itemTextDom = list[index - 1]
          if (this.styleType === 2) { // 可以输入类型
            return createElement(
              'span', {
                attrs: {
                  'index': placeIndex
                },
                style: {
                  whiteSpace: 'nowrap'
                }
              }, [this.extractHintContent(itemTextDom), createElement(
                'span', {
                  attrs: {
                    'index': placeIndex,
                    'class': this.assembleClassName(placeIndex, itemTextDom)
                  },
                  on: {
                    click: this.kongClickHandler.bind(this, placeIndex)
                  }
                }, [createElement(
                  'input', {
                    attrs: {
                      'class': 'content input',
                      'spellcheck': 'false', // 拼写检查
                      'autocomplete': 'off', // 自动补全
                      'autocapitalize': 'off' // 首字母大写
                    },
                    on: {
                      focus: this.kongClickHandler.bind(this, placeIndex),
                      input: this.kongInputChange,
                      blur: this.changeActiveIndex
                    }
                  }
                ), createElement(
                  'span', {
                    attrs: {
                      'class': 'inputPreview content'
                    }
                  }, [this.nowUserAnswers[placeIndex]?.content]
                )]
              )]
            )
          } else {
            return createElement(
              'span', {
                attrs: {
                  'index': placeIndex
                },
                style: {
                  whiteSpace: 'nowrap'
                }
              }, [this.extractHintContent(itemTextDom), createElement(
                'span', {
                  attrs: {
                    'index': placeIndex,
                    'class': this.assembleClassName(placeIndex)
                  },
                  on: {
                    click: this.kongClickHandler.bind(this, placeIndex)
                  }
                }, [createElement(
                  'span', {
                    attrs: {
                      'class': 'content'
                    }
                  }, [getPureText(this.nowUserAnswers[placeIndex]?.content, '', true, true, false)]
                )]
              )]
            )
          }
        } else {
          return createElement(
            dom.tagName, {
              attrs: this.assembleAttrs(dom.attrs)
            }, dom.childNodes?.length ? dom.childNodes.map((item, i) => this.domRender(item, createElement, i, dom.childNodes)) : []
          )
        }
      } else {
        const nextDom = list[index + 1]
        if (/\w$/.test(dom.value) && nextDom && nextDom.attrs && nextDom.attrs && nextDom.attrs.findIndex(item => item.value === 'ke-content-kong') > -1) {
          return this.getLastWord(dom.value)
        } else {
          return dom.value
        }
      }
    },
    // 可以输入框input发送改变
    kongInputChange(e) {
      this.composite.inputSetValue(e.target.value)
    },
    changeActiveIndex() {
      this.composite.changeActiveIndex(-1)
    },
    // 待输入区域被点击
    kongClickHandler(index) {
      this.composite.selectQuestionItem(index)
    }
  },
  render(createElement) {
    placeIndex = -1
    return <div>{this.domRender(this.content, createElement, 0)}</div>
  }
}
</script>
<style lang="less">
span{ outline:none; }
.htmlContent {
  line-height: 44px !important;
}
.inputKong {
  position: relative;
  min-width: 27px;
  height: 28px;
  line-height: 30px;
  display: inline-block;
  text-align: center;
  text-indent: 0px;
  color: rgba(255, 255, 255, 0);
  vertical-align: middle;
  &.active {
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -12px;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5.5px 8px 5.5px;
      border-color: transparent transparent #7363ff transparent;
    }
  }
  &.styleType0 {
    border: 1px solid #cfd2d5;
    border-radius: 4px;
    padding: 0 10px;
    .content{
      display: inline-block;
      min-width: 27px;
    }
    &.isPreview{
      color: #fff;
      &.correct {
        border: 1px solid #67cf84;
        background: #67cf84;
      }
      &.mistake {
        border: 1px solid #f77a6e;
        background: #f77a6e;
      }
    }
    &.isNotPreview{
      &.inputed {
        background: #7263ff;
        color: #fff;
        border: none;
      }
      &.active {
        border: 1px solid #7263ff;
        &::after {
          display: none;
        }
      }
    }
  }
  &.styleType1 {
    padding: 0 10px;
    .content{
      position: relative;
      z-index: 1;
      display: inline-block;
      min-width: 27px;
    }
    &::before {
      content: "";
      width: 100%;
      height: 4px;
      background: #f0efff;
      border-radius: 4px;
      position: absolute;
      left: 0;
      bottom: 8px;
      z-index: 0;
    }
    &.active {
      &::after {
        bottom: -4px;
      }
    }
    &.isPreview{
      &.correct {
        color: #67cf84;
        &::before {
          background: #e4f7e9;
        }
      }
      &.mistake {
        color: #f77a6e;
        &::before {
          background: rgba(247, 122, 110, 0.24);
        }
      }
    }
    &.isNotPreview{
      &.inputed {
        color: #7263ff;
      }
    }
  }

  &.styleType2 {
    padding: 0 10px;
    color: #7263ff;
    .inputImg{
      width: 16px;
      height: 16px;
    }
    .content{
      position: relative;
      top: -2px;
      z-index: 1;
      border: none;
      display: inline-block;
      min-width: 27px;
      &.input{
        text-align: center;
        width: 100%;
        position: absolute;
        left: 0;
        top: -2px;
        z-index: 2;
      }
    }
    &.hint{
      padding-left: 0;
      .input{
        text-align: left;
      }
      .content{
        text-align: left;
      }
    }
    &::before {
      content: "";
      width: 100%;
      height: 4px;
      background: #f0efff;
      border-radius: 4px;
      position: absolute;
      left: 0;
      bottom: 8px;
      z-index: 0;
    }
    &.canNotActive{
      .input{
        display: none;
      }
    }
    &.isPreview{
      &.correct {
        color: #67cf84;
        &::before {
          background: #e4f7e9;
        }
      }
      &.mistake {
        color: #f77a6e;
        &::before {
          background: rgba(247, 122, 110, 0.24);
        }
      }
      &.active {
        &::after {
          bottom: -4px;
        }
      }
      .input{
        display: none;
      }
    }
    &.isNotPreview{
      .inputPreview{
        opacity: 0;
      }
      &.inputed {
        color: #7263ff;
        &::after{
          display: none;
        }
      }
      &.active {
         &::after {
           display: none;
         }
      }
      &::after {
        content: " ";
        width: 16px;
        height: 16px;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADD0lEQVRYR62WzWsTQRTAf28aKvhRRfw6SaVIbZameqgiFGl78GDBg3gSPPTmQXvT/0Hw0pM3FcGTXkSpCkIvUlCRNqmbTYXSqFA/sQoitXb3yW6TNE2bzW62uW14M7/fvHnzZoRN+KmqFHKc84SLKCeA3SjfESZEuJ3OyFg9jCTl27YeYJn7QF/IXE9d4UImIwu1MYkEnElt9wzjQHvDhQh5Txjs7pYv1bFNC8zM6J7lRV5HgpeIIuTdGommBfw57ayOAiMNV18VUCsRW8BPO0Jr11F516wEfiagz6+JWAKOo+26xLgqrQYGkkiI8CSdkTORBSrwcsEp85sgMRRJwE+7Gsa1ttqTSzxoKFAXXi6sJBLKfKhAQ3gdCSero16007FUVyAyPJnE5w0FYsOblRAerhNoGr7abOaNrh7RsO0wcH6NwCbAVzRqCrOOxIt0hlMVAdvW3SzzJk5vb9CCwzJR5C8nreOyWgN2Tu+hXIjT1yPEbiRx1ngMdB2Toj8+yMDsrO5c/M1XoFXA1ZX/TQRAlJA1Ev4t2tkp38sDAwFnWk97Hs+C7RMupwx51+URsC0KIULMGol17wF7Wkfw8K9Wv4BOWEfllTOt/Z7H482QEChKVdrXC2T1JnDJx+9N0bbPkt+lzCSWCINXaiCfU/+K7QfeWz2y5nmVJBON4NUCn1Q5IMJYOiNDtXvajEQUeCAwN6m7/hjKr9UbVo9c3aio4khEhQcCuZyebFEm/A8jDHdl5E69qo4iEQceCNg5HUa5VX0Cwo5VmERceCCQn9LrKlwLDmCKNqt0AsIk3k7pgAjPa5pVsbrDRegNQYjYWX0InAX+eYaO7m75WG/wV1u3f4O0uvQaZVShpRTbFHxFYErfIRwuTTTrGQb2GxZ8EC6WUdIeWOKD4WC5fVe10jnxGCz39qgrr4y3s7oIbKka+A9I1YI2mHgJ4QEtXLEs+REXvCqQ01covWETiPAZKKhSwOAYKLRu5WVHh/xqFlwRmMnpkWW4i5JB+YDgiFJQQ8GFwg4X59Ax+ZkUVG/8f4z1t3L+2d2iAAAAAElFTkSuQmCC');
        background-size: cover;
        display: block;
        // position: absolute;
        // left: 50%;
        //  bottom: 8px;
        // z-index: 1;
        transform: translate(50%, -25px);
      }
    }
  }
}
</style>
