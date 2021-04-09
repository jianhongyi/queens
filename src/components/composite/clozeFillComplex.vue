<!-- 完型填空复合子题 -->
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
            v-bind="$attrs"
            :is-preview="preview"
            :template-type="templateType"
          />
        </div>
        <slot name="footer" />
      </div>
    </div>
    <template v-if="!preview&&isShowAnsweringArea">
      <queens-answering-area
        :options="quesData.subQuestions || []"
        :template-type="templateType"
        :select-answer-item="selectAnswerItem"
        :active-index="activeIndex"
        @change-active-index="changeActiveIndex"
      />
    </template>
    <template v-if="preview&&showAnswer">
      <queens-answer
        :answers="answers"
        :sub-questions="quesData.subQuestions"
        :template-type="templateType"
        :preview="preview"
        v-bind="$attrs"
        :active-index="activeIndex"
        @change-active-index="changeActiveIndex"
      />
    </template>
  </div>
</template>

<script>
import compositeMixin from '../../mixins/compositeMixin'
export default {
  name: 'ClozeFillComplex',
  mixins: [compositeMixin]
}
</script>
<style lang='less' scoped>
  @import "../../style/components/composite/compositeWrapper.less";
</style>
