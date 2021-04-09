<!-- 题干区域组件 -->
<template>
  <div :class="['queens-stem', isZj ? 'queens-zj-stem' : '']">
    <component
      :is="stemTemplateType"
      ref="stemContent"
      class="stem-content"
      :template-type="templateType"
      :body="body"
      v-bind="$attrs"
      @img-click-event="imgClickEvent"
    />
    <!-- 题干中图片 点击放大预览 -->
    <div v-show="openBigImg && enlargeStemImg" ref="bigImgWrapper" class="big-img-wrapper" @click="closeBigImg">
      <img :src="bigImgSrc" class="big-img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueensStem',
  components: {
    letterFill: () => import('../components/stem/letterFill'), // 字母填空
    numFill: () => import('../components/stem/numFill'), // 数字填空
    wordFill: () => import('../components/stem/wordFill'), // 单词填空
    normalStem: () => import('../components/stem/normalStem'), // 普通题干
    zjStem: () => import('../components/stem/zjStem'), // 组卷题干
    selectWordFill: () => import('../components/stem/selectWordFill') // 复合题选词填空题干
  },
  props: {
    // 题型模版
    templateType: {
      type: String,
      required: true,
      default: ''
    },
    enlargeStemImg: { // 题干图片是否可以点击放大
      type: Boolean,
      default: true
    },
    body: { // 题干内容
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      // 放大图片的src
      bigImgSrc: '',
      // 是否打开大图片dialog
      openBigImg: false
    }
  },
  computed: {
    isZj() {
      return this.templateType.toLowerCase().indexOf('zj') > -1
    },
    // 题干模板类型区分
    stemTemplateType() {
      const templateArr = ['letterFill', 'numFill', 'wordFill']
      const templateComplex = ['readFillComplex', 'clozeFillComplex', 'selectFillComplex']
      if (this.isZj) {
        return 'zjStem'
      }
      if (templateComplex.includes(this.templateType)) {
        return 'selectWordFill'
      }
      if (templateArr.includes(this.templateType)) {
        return this.templateType
      } else {
        return 'normalStem'
      }
    }
  },
  created() {
    const emptyBody = !this.body.content || !(this.body.content && this.trim(this.body.content))
    if (emptyBody) { // 题干为空
      this.content = ''
      return
    }
  },
  beforeDestroy() {
    this.bigImgWrappers = document.querySelectorAll('big-img-wrapper-body')
    this.bigImgWrappers.forEach((item) => {
      document.body.removeChild(item)
    })
    this.bigImgWrappers = null
    this.bigImgSrc = null
    this.openBigImg = null
    document.body.style.overflow = 'auto'
  },
  methods: {
    // 去左右空格
    trim(str) {
      return str.replace(/&nbsp;/g, '')
    },
    // 关闭大图预览
    closeBigImg() {
      this.openBigImg = false
      document.body.style.overflow = 'auto'
    },
    // 给题干中图片添加点击放大事件
    imgClickEvent() {
      const stemContent = this.$refs.stemContent?.$el
      if (!stemContent || !this.enlargeStemImg) {
        return
      }
      stemContent.addEventListener('click', (e) => {
        e = e || window.event
        const target = e.target || e.srcElement
        const classList = Array.from(target.classList)
        if (target.nodeName === 'IMG' && isTrueClass(classList)) {
          this.openBigImgDialog(target)
        }
      })
      const isTrueClass = function(classList) {
        const fillClassName = 'ke-content-kong'
        const numImgClassName = 'num-fill-img'
        return !classList.includes(fillClassName) && !classList.includes(numImgClassName)
      }
    },
    // 放大题干图片
    openBigImgDialog(target) {
      const bigImgDom = this.$refs.bigImgWrapper
      bigImgDom.classList.add('big-img-wrapper-body')
      document.body.appendChild(bigImgDom)
      this.bigImgSrc = target.currentSrc
      this.openBigImg = true
      document.body.style.overflow = 'hidden'
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/var.less';
/deep/input {
  -webkit-appearance: none;
  padding: 0px;
  background-color: transparent;
}
.queens-stem {
  padding-top: 29px;
  overflow: auto;
  font-size: @font-size-md;
  font-weight: 400;
  color: #21001c;
  line-height: 26px;
  word-break: break-word;
  word-wrap: break-word;
  &.queens-zj-stem {
    padding-top: 0;
  }
  .stem-content{
    padding-bottom: 29px;
  }
  /deep/img {
    max-width: 90%;
    height: auto !important;
    display: flex;
    margin: 0px auto 30px;
    border-radius: 8px;
    &[title="2"]{
      box-sizing: border-box;
      display: inline-block;
      width: 31%;
      height: auto !important;
      margin: 0px 1.166% 12px;
      border-radius: 8px;
      border: 2px solid rgba(202, 207, 211, 0.1);
    }
    &[title="3"]{
      position: relative;
      top: 8px;
      display: inline-block;
      width: 48px !important;
      height: 36px !important;
      margin: 0px 3px;
      border-radius: 2px;
    }
  }
  /deep/.ke-content-kong{
    display: inline-block;
    margin: 0px;
    border-radius: 0px;
  }
}
.big-img-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.9);
  .big-img {
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    border-radius: 0;
  }
}
</style>
