<!--
 * @Author: your name
 * @Date: 2021-01-29 10:10:34
 * @LastEditTime: 2021-02-02 15:02:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \queens\src\components\composite\selectFillComplex.vue
-->
<!-- 选词填空复合子题 -->
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
    <template v-if="!preview&&isShowAnsweringArea">
      <queens-answering-area
        :options="options"
        :template-type="templateType"
        :select-answer-item="selectAnswerItem"
        :active-index="activeIndex"
        v-bind="$attrs"
        @change-active-index="changeActiveIndex"
      />
    </template>
    <template v-if="preview&&showAnswer">
      <queens-answer
        :answers="answers"
        :template-type="templateType"
        v-bind="$attrs"
        :active-index="activeIndex"
        :buttom-pad="-6"
        @change-active-index="changeActiveIndex"
      />
    </template>
  </div>
</template>

<script>
import compositeMixin from '../../mixins/compositeMixin'
export default {
  name: 'SelectFillComplex',
  mixins: [compositeMixin]
}
</script>
<style lang='less' scoped>
@import "../../style/components/composite/compositeWrapper.less";
</style>
