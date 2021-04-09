<!-- 排序器 -->
<template>
  <div class="sorter-wrapper">
    <component :is="templateType" ref="targetSortor" :template-type="templateType" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'QueensSortor',
  components: {
    imgSort: () => import('../components/sortor/imgSort'),
    sentenceSort: () => import('../components/sortor/sentenceSort'),
    textSort: () => import('../components/sortor/textSort'),
    letterSort: () => import('../components/sortor/letterSort')
  },
  props: {
    templateType: {
      type: String,
      default: ''
    }
  }

}
</script>
<style lang='less' scoped>
  .sorter-wrapper {
    background-color: transparent;
  }
</style>
