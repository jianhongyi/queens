<template>
  <div class="zj-compound">
    <div v-if="quesData.direction && quesData.direction.content" class="guiding" v-html="quesData.direction.content || ''" />
    <play-audio
      v-if="quesData.additionalAudio && quesData.additionalAudio.url"
      :audio-data="quesData.additionalAudio"
      :template-type="quesData.templateType"
    />
    <original v-if="quesData.additionalAudio && quesData.additionalAudio.listeningText" :content="quesData.additionalAudio.listeningText" />
    <queens-stem
      v-if="quesData.body && quesData.body.content"
      ref="stem"
      class="compound-stem"
      :body="quesData.body || {}"
      :structure="quesData.structure"
      :template-type="quesData.templateType"
      :index="index"
      v-bind="$attrs"
    />
    <template v-for="(sub, number) in quesData.subQuestions">
      <component
        :is="sub.templateType"
        :key="number"
        ref="targetOption"
        :class="['subQuestions', number === 0 ? 'firSubQuestions' : '']"
        :ques-data="sub"
        :index="sub.index + 1"
        :template-type="sub.templateType"
        v-bind="$attrs"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'ZjCompound',
  components: {
    zJImgSelect: () => import('../../queens-select/index'),
    zJTextSelect: () => import('../../queens-select/index'),
    zJWordFill: () => import('../../queens-fill/index'),
    zJNoAnswerOral: () => import('../../queens-oral/index'),
    zJAnswerOral: () => import('../../queens-oral/index')
  },
  props: {
    quesData: {
      type: Object,
      default: () => ({}),
      required: true
    },
    index: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
  .zj-compound{
    position: relative;
    padding: 12px 16px 0;
    background-color: #fff;
    border-radius: 6px;
    &:nth-of-type(2){
      border-radius: 6px 6px 0 0;
    }
    &::after{
      position: absolute;
      bottom: 0;
      left: 16px;
      right: 16px;
      height: 1px;
      content: '';
      overflow: hidden;
      background-color: #eee;
      -webkit-transform: scale(1,.5);
      transform: scale(1,.5);
      transform-origin: center bottom
    }
    /deep/ .subQuestions{
      padding-bottom: 0;
      &.firSubQuestions .main-area{
        padding-top: 0;
      }
    }
    /deep/ .ques-oral-wrapper{
      padding: 0;
    }
    /deep/ .main-area{
      position: relative;
      padding: 16px 0;
      box-shadow: none;
      &::before{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        content: '';
        overflow: hidden;
        background-color: #eee;
        -webkit-transform: scale(1,.5);
        transform: scale(1,.5);
        transform-origin: center bottom
      }
      /deep/ .stem-content{
        padding-bottom: 20px;
      }
      .scrollCard {
        padding: 2px 0;
      }
    }
    /deep/ .subQuestions:last-child .main-area {
      &::before {
        height: 0;
      }
    }
    .guiding {
      margin-bottom: 16px;
      font-size: 14px;
      color: #5E6267;
      line-height: 21px;
    }
    .ques-original {
      margin: 0 0 16px;
    }
    .queens-play-audio {
      margin-bottom: 16px;
    }
    .compound-stem {
      padding-top: 0;
      /deep/ .stem-content {
        padding-bottom: 0;
      }
    }
    /deep/ .pad {
      height: 0 !important;
    }
    &:last-child {
      border-radius: 0 0 6px 6px;
      &::after{
        height: 0;
      }
    }
  }
</style>
