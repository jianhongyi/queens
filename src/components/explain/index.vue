<!-- 解析区域组件 -->
<template>
  <div v-if="explain && explain.content" class="explain-wrapper">
    <div class="explain-title">
      题目解析
    </div>
    <div class="explain-text" v-html="explain.content" />
  </div>
</template>

<script>
export default {
  components: {

  },

  props: {
    explain: {
      type: Object,
      default: () => ({}),
      required: false
    }
  }

}
</script>
<style lang='less' scoped>
@import '../../style/var';
  .explain-wrapper {
    margin-top: 20px;
    padding: 20px 0;
    border-top: 1px solid rgba(148, 110, 110, 0.1);
    .explain-title {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      padding: 0 10px;
      color: @quesOptionTureTextColor;
      background-color: @quesOptionTureBg;
      border: 1px solid @quesOptionTureBorder;
      border-radius: 2px;
      margin-bottom: 12px;
      font-weight: bold;
    }
    .explain-text {
      font-size: 14px;
      word-break: break-all;
      color: #7A8189 !important;
    }
  }
</style>
