<!-- 单词填空 -->
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
    <div v-if="trim(content)" ref="stem" class="queens-stem-content" v-html="content" />
  </section>
</template>

<script>
import stemMixin from '../../mixins/stemMixin'
export default {
  name: 'WordFill',
  mixins: [stemMixin],
  watch: {
    preview(val) {
      this.getWordContent()
    }
  },
  created() {
    this.answersArr = this.answers
    for (const item of this.correctAnswers) {
      this.correctAnswersArr.push(item.content)
    }
    this.getWordContent()
  },
  mounted() {
    // 填空绑定事件
    if (this.content) {
      this.InputBindEvent()
    }
  },
  methods: {
    // 填空 添加绑定事件
    InputBindEvent() {
      const documents = this.$refs.stem.getElementsByClassName(this.templateType)
      for (let i = 0; i < documents.length; i++) {
        const el = documents[i]
        // 监听输入 获取答案
        el.oninput = (e) => {
          this.getAnswer(e)
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
    // 单词或句子填空解析
    getWordContent() {
      let index = 0
      let content = this.body.content
      content = content.replace(this.reg, () => {
        const htmlContent = `<span class="${this.setClassName(index)}" contenteditable="${this.canActive && !this.preview}" autocapitalize="off" autocorrect="off" tabindex="1">${this.answersArr.answers[index] || ''}</span>`
        index++
        return htmlContent
      })
      const hintList = content.match(this.hintReg)
      if (hintList) {
        hintList.forEach(element => {
          let hintDom = element
          hintDom = hintDom.replace(/class=\"/, 'class="hint ')
          hintDom = `<span style="white-space: nowrap;">${hintDom}</span>`
          content = content.replace(element, hintDom)
        })
      }
      this.content = content
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
  /deep/.wordFill {
    position: relative;
    display: inline-block;
    min-height: 20px;
    min-width: 65px;
    max-width: 100%;
    margin: 0px;
    text-align: center;
    text-underline-position: under;
    outline: none;
    font-size: 16px !important;
    -webkit-user-select: auto;
    &::before {
      color: #CFD2D5;
      font-family: "iconfont" !important;
      content: "\e617";
      position: absolute;
      width: 16px;
      height: 16px;
      left: calc(50% - 8px);
      top: calc(50% - 15px);
      pointer-events: none;
      background-size: 100%;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 3px;
      left: 0px;
      width: 100%;
      height: 1px;
      background: #cfd2d5;
    }
    &:focus {
      &::before {
        display: none;
      }
    }
    &:not(.haveAnser)[contenteditable="false"]{
      &::after {
        bottom: -2px;
      }
      &:focus {
        &::before {
          display: block;
        }
      }
    }
  }
  // /deep/.hint{
  //   text-align: left;
  // }
  /deep/.haveAnser {
    &::before {
      display: none;
    }
  }
  /deep/.anserLong {
    text-align: left;
    text-decoration: underline #cfd2d5;
    &::after {
      display: none;
    }
  }
  /deep/.wrong[contenteditable="false"]{
    color: @orange-dark;
    -webkit-text-fill-color: @orange-dark;
    border-color: @orange-dark;
    text-decoration-color: @orange-dark;
    &::after {
      background-color: @orange-dark;
      bottom: 3px;
    }
  }
  /deep/.right[contenteditable="false"]{
    color: @green;
    -webkit-text-fill-color: @green;
    border-color: @green;
    text-decoration-color: @green;
    &::after {
      background-color: @green;
      bottom: 3px;
    }
  }
</style>
