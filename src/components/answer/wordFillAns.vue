<!-- 单词类型填空 -->
<template>
  <queens-popup class="popup" v-bind="$attrs">
    <div :style="{'justify-content': flexPosition}" class="word-fill-wrapper">
      <div calss="word-fill-content" style="font-size: 16px;" v-html="effectiveAnswers" />
    </div>
  </queens-popup>
</template>

<script>
import answerMixin from '../../mixins/answerMixin'
export default {
  name: 'WordFill',
  mixins: [answerMixin]
}
</script>
<style lang='less' scoped>
    .word-fill-wrapper {
        display: flex;
        align-items: center;
        word-break: break-word;
        white-space: pre-wrap;
    }
</style>
