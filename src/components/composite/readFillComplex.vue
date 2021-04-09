<!--
 * @Author: xuemingli
 * @Date: 2021-01-29 10:10:34
 * @LastEditTime: 2021-02-02 15:07:00
 * @LastEditors: xuemingli
 * @Description: In User Settings Edit
 * @FilePath: \queens\src\components\composite\readFillComplex.vue
-->
<!-- 阅读填空复合子题 -->
<template>
  <div :style="wrapperStyle" class="queens-composite-wrapper">
    <div :style="mainAreaStyle" :class="['main-area', mainAreaClass]">
      <div ref="scrollCard" class="scrollCard">
        <div class="scroll-card-inner">
          <queens-description :desc-content="quesData.questionDescription" v-bind="$attrs">
            <slot slot="descIcon" name="descIcon" />
          </queens-description>
          <queens-stem
            :body="body"
            :now-user-answers="nowUserAnswers"
            :active-index="activeIndex"
            :style-type="0"
            :is-preview="preview"
            v-bind="$attrs"
            :template-type="templateType"
          />
        </div>
        <slot name="footer" />
      </div>
    </div>
    <template v-if="preview&&showAnswer">
      <queens-answer
        :answers="answers"
        :template-type="templateType"
        :preview="preview"
        v-bind="$attrs"
        :buttom-pad="6"
        :active-index="activeIndex"
        @change-active-index="changeActiveIndex"
      />
    </template>
  </div>
</template>

<script>
import compositeMixin from '../../mixins/compositeMixin'
export default {
  name: 'ReadFillComplex',
  components: {},
  mixins: [compositeMixin],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}

}
</script>
<style lang='less' scoped>
  @import "../../style/components/composite/compositeWrapper.less";
</style>
