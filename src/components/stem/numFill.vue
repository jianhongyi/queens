<!-- 数字填空 -->
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
    <section v-if="trim(content)" ref="stem">
      <div v-html="content" />
      <div class="num-fill-box">
        <input
          v-model="answersArr.answers[0]"
          type="tel"
          :class="`${templateType} ${preview ? (correctAnswers[0].content.split('|').includes(answersArr.answers[0]) ? 'right' : 'wrong') : ''}`"
          :disabled="!canActive || preview"
        >
        <img
          v-if="correctAnswers[0] && correctAnswers[0].answerImg"
          class="num-fill-img"
          :src="correctAnswers[0].answerImg"
        >
      </div>
    </section>
  </section>
</template>

<script>
import stemMixin from '../../mixins/stemMixin'
export default {
  name: 'NumFill',
  mixins: [stemMixin],
  props: {
  },
  watch: {
    preview(val) {
      this.content = this.body.content.replace(this.reg, '')
    }
  },
  created() {
    this.answersArr = this.answers
    for (const item of this.correctAnswers) {
      this.correctAnswersArr.push(item.content)
    }
    this.content = this.body.content.replace(this.reg, '')
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
@import '../../style/var';
.queens-play-audio{
  margin-bottom: 30px;
  padding-left: calc(50% - 22px);
}
.num-fill-box{
  display: flex;
  justify-content: center;
  width: 152px;
  margin: 0px auto;
  box-sizing: border-box;
  .numFill{
    width: 65px;
    height: 49px;
    line-height: 49px;
    margin-right: 12px;
    border-radius: 8px;
    border: 1px solid #CFD2D5;
    font-size: 30px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #21001C;
    text-align: center;
    &:focus{
      color: @commonColor;
      border-color: @commonColor;
    }
  }
  .wrong:disabled{
    background-color: transparent;
    color: @orange-dark;
    -webkit-text-fill-color: @orange-dark;
    border-color: @orange-dark;
    opacity: 1;
  }
  .right:disabled{
    background-color: transparent;
    color: @green;
    -webkit-text-fill-color: @green;
    border-color: @green;
    opacity: 1;
  }
  .num-fill-img{
    width: 64px !important;
    height: 49px !important;
    border: 2px solid rgba(202, 207, 211, 0.1);
    border-radius: 8px;
  }
}
</style>
