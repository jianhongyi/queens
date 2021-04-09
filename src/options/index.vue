<!-- 选项区域组件 -->
<template>
  <div class="options-wrapper">
    <component
      :is="templateType"
      ref="targetOption"
      :template-type="templateType"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'QueensOptions',
  components: {
    textSelect: () => import('../components/options/textSelect'),
    imgSelect: () => import('../components/options/imgSelect'),
    audioSelect: () => import('../components/options/audioSelect'),
    YNJudge: () => import('../components/options/ynJudge'),
    TFJudge: () => import('../components/options/tfJudge'),
    zJImgSelect: () => import('../components/options/zjOption'), // 组卷图片选择
    zJTextSelect: () => import('../components/options/zjOption'), // 组卷文本选择
    zJAudioSelect: () => import('../components/options/zjOption') // 组卷音频选择
  },

  props: {
    templateType: {
      type: String,
      default: ''
    }
  }

}
</script>
<style lang="less" scoped>
  /deep/ img[src] {
    max-width: 195px !important;
  }
</style>
