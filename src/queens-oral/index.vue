<!-- 选择题组件 -->
<template>
  <div :style="wrapperStyle" class="ques-oral-wrapper">
    <div :style="mainAreaStyle" :class="['main-area', mainAreaClass]">
      <div v-if="quesData.direction" class="guiding" v-html="quesData.direction.content || ''" />
      <play-audio
        v-if="quesData.additionalAudio && quesData.additionalAudio.url"
        :audio-data="quesData.additionalAudio"
        :template-type="quesData.templateType"
      />
      <original v-if="quesData.additionalAudio && quesData.additionalAudio.listeningText" :content="quesData.additionalAudio.listeningText" />
      <queens-stem
        v-if="quesData.body && quesData.body.content"
        ref="stem"
        :body="quesData.body || {}"
        :structure="quesData.structure"
        :template-type="quesData.templateType"
        :index="index"
        v-bind="$attrs"
      />
      <queens-answer
        ref="answer"
        :user-answer="quesData.userAnswer || {}"
        :template-type="quesData.templateType"
        :answers="quesDataClone.answers"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueensOral',
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
    }
  },
  computed: {
    quesDataClone() {
      const { quesData } = this
      if (quesData?.answers?.length) {
        quesData.answers = quesData.answers[0].split('@@')
      }
      return quesData
    }
  }
}
</script>
<style lang='scss' scoped>
  .ques-oral-wrapper {
    padding: 16px;
    background-color: #fff;
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
  }
</style>
