<!--
 * @Author: xuemingli
 * @Date: 2021-01-19 15:24:12
 * @LastEditTime: 2021-02-04 15:05:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \queens\src\queens-composite\index.vue
-->
<!-- 复合题（复合题唯一对外的组件） -->
<template>
  <component
    :is="templateType"
    ref="targetComposite"
    :template-type="templateType"
    v-bind="$attrs"
    class="composite-wrapper"
  >
    <slot slot="footer" name="footer" />
    <div v-if="templateType !== 'zJCompound'" class="pad" />
  </component>
</template>

<script>
export default {
  name: 'QueensComposite',
  components: {
    clozeFillComplex: () => import('../components/composite/clozeFillComplex'),
    selectFillComplex: () => import('../components/composite/selectFillComplex'),
    readFillComplex: () => import('../components/composite/readFillComplex'),
    readSelectComplex: () => import('../components/composite/readSelectComplex'),
    readJudgeComplex: () => import('../components/composite/readSelectComplex'),
    zJCompound: () => import('../components/composite/zjComplex')
  },
  props: {
    // 模板类型
    templateType: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 用户答案重置
    reset() {
      return this.$refs.targetComposite.resetUserAnswer()
    },
    // 检查用户答案 返回promise
    checkAnswer() {
      return this.$refs.targetComposite.checkUserAnswer()
    }
  }

}
</script>
<style lang="less" scoped>
  .pad{ // 垫高页面。iphone6 padding-bottom 和scroll 一起使用时padding-bottom失效
    height: 46px;
  }
</style>
