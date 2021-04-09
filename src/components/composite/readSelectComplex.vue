<!-- 阅读选择复合子题 -->
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
            :structure="quesData.structure"
            v-bind="$attrs"
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
        v-bind="$attrs"
        switcher-font-size="16px"
        @change-active-index="changeActiveIndex"
      />
    </template>
    <template v-if="preview&&showAnswer">
      <queens-answer
        :answers="answers"
        :template-type="templateType"
        :sub-questions="quesData.subQuestions"
        :preview="preview"
        v-bind="$attrs"
        switcher-font-size="16px"
        :active-index="activeIndex"
        @change-active-index="changeActiveIndex"
      />
    </template>
  </div>
</template>

<script>
import compositeMixin from '../../mixins/compositeMixin'
export default {
  name: 'ReadSelectComplex',
  mixins: [compositeMixin]
}
</script>
<style lang='less' scoped>
  @import "../../style/components/composite/compositeWrapper.less";
</style>
