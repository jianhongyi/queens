<!-- 字母填空 -->
<template>
  <section>
    <play-audio
      v-if="body.audioInfo && body.audioInfo.url"
      ref="playAudio"
      :url="body.audioInfo.url"
      :autoplay="autoplay"
      :template-type="templateType"
      v-bind="$attrs"
    />
    <section v-if="trim(content)">
      <ol v-if="imgArr.length > 1" class="content">
        <li v-for="(img, index) in imgArr" :key="index" v-html="img" />
      </ol>
      <div v-if="imgArr.length == 1" v-html="imgArr[0]" />
      <div ref="stem" class="letter-fill-box" v-html="content" />
    </section>
  </section>
</template>

<script>
import stemMixin from '../../mixins/stemMixin'
export default {
  name: 'LetterFill',
  mixins: [stemMixin],
  props: {
  },
  data() {
    return {
      imgArr: []
    }
  },
  watch: {
    preview(val) {
      this.getImgSrc()
    }
  },
  created() {
    this.answersArr = this.answers
    for (const item of this.correctAnswers) {
      this.correctAnswersArr.push(item.content)
    }
    this.getImgSrc()
  },
  mounted() {
    // 填空绑定事件
    if (this.content) {
      this.InputBindEvent()
    }
  },
  beforeDestroy() {
    this.imgArr = null
  },
  methods: {
    // 填空 添加绑定事件
    InputBindEvent() {
      const documents = this.$refs.stem.getElementsByClassName(this.templateType)
      for (let i = 0; i < documents.length; i++) {
        const el = documents[i]
        // 监听输入 获取答案
        el.oninput = (e) => {
          this.changeFocus(documents, el)
          this.getAnswer(e)
        }
        el.onkeyup = (e) => {
          if (e.keyCode === 8) { // 删除键
            this.backKeyFocus(documents, el)
          }
        }
        // 回车移除焦点
        el.onkeydown = (e) => {
          if (e.keyCode === 13) {
            e.preventDefault()
            el.blur()
          }
        }
      }
    },
    // 处理字母填空图片展示
    getImgSrc() {
      // 替换空格图片
      let index = 0
      const userAnswer = this.answersArr.answers
      const content = this.body.content.replace(this.reg, () => {
        const htmlContent = `<input
                              class="${this.setClassName(index)}" 
                              type="text"
                              ${!this.canActive || this.preview ? 'disabled' : ''}
                              maxlength="1"
                              autocapitalize="off" 
                              autocorrect="off"
                              data-index="${index}"
                              value="${userAnswer[index] || ''}"
                            >`
        index++
        return htmlContent
      })
      // 提取除空格外的img标签
      const regImg = /<img [^>]* (.*?)>/ig
      this.imgArr = content.match(regImg) ? content.match(regImg) : []
      this.content = content.replace(regImg, '')
    },
    // 字母填空 自动切换下一个焦点 只允许输入英文字母
    changeFocus(documents, el) {
      if (this.templateType === 'letterFill') {
        const index = Number(el.getAttribute('data-index')) + 1
        el.value = el.value.replace(/[^a-zA-Z]/g, '')
        el.value = el.value.slice(0, 1)
        if (el.value.length === 1) {
          setTimeout(() => {
            index < documents.length && documents[index].focus()
          })
        }
      }
    },
    // 字母填空 删除键 焦点转移
    backKeyFocus(documents, el) {
      const index = Number(el.getAttribute('data-index')) + 1
      if (el.value.length === 0) {
        setTimeout(() => {
          index > 1 && documents[index - 2].focus()
        })
      }
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../style/var';
.queens-play-audio{
  margin-bottom: 30px;
  padding-left: calc(50% - 22px);
}
.content{
  display: block;
  counter-reset: sectioncounter;
  li {
    position: relative;
    float: left;
    width: 30%;
    margin: 0px 1.66% 12px;
    /deep/img {
      display: block !important;
      width: 100% !important;
      height: auto !important;
      margin: 0px !important;
      box-sizing: border-box !important;
      max-width: 100% !important;
      max-height: 100% !important;
    }
    &::before {
      content: counter(sectioncounter);
      counter-increment: sectioncounter;
      position: absolute;
      bottom: 6px;
      right: 6px;
      z-index: 1;
      width: 14px;
      height: 14px;
      background: @commonColor;
      border-radius: 50%;
      line-height: 16px;
      text-align: center;
      font-family: @price-integer-font-family;
      font-size: 10px;
      font-weight: 600;
      color: @white;
    }
    &::after{
      content: "";
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 22px;
      height: 22px;
      background: @white;
      border-radius: 50% 50% 0% 50%;
    }
  }
}
.letter-fill-box{
  clear: both;
  text-align: center;
  line-height: 45px;
  font-size: 31px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #21001C;
  /deep/.letterFill{
    width: 44px;
    height: 44px;
    margin: 0px 5px 10px;
    border-radius: 8px;
    border: 1px solid #CFD2D5;
    text-align: center;
    &:focus{
      color: @commonColor;
      border-color: @commonColor;
    }
  }
  /deep/.wrong:disabled{
    background-color: transparent;
    color: @orange-dark;
    -webkit-text-fill-color: @orange-dark;
    border-color: @orange-dark;
    opacity: 1;
  }
  /deep/.right:disabled{
    background-color: transparent;
    color: @green;
    -webkit-text-fill-color: @green;
    border-color: @green;
    opacity: 1;
  }
}
</style>
