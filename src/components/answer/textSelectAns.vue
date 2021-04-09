<!-- 文本选项 -->
<template>
  <queens-popup class="popup" v-bind="$attrs">
    <div class="text-select-ans-wrapper">
      <div :style="{'justify-content': flexPosition}" class="text-select-ans">
        <div
          v-for="(item, index) in effectiveAnswers"
          :key="index"
          :class="[
            'option'
          ]"
        >
          <div class="option-inner">
            <div class="option-index">
              {{ item.index }}
            </div>
            <div class="option-content" v-html="item.content" />
          </div>
        </div>
      </div>
    </div>
  </queens-popup>
</template>
<script>
import answerMixin from '../../mixins/answerMixin'
export default {
  name: 'TextSelectAns',
  mixins: [answerMixin]
}
</script>
<style lang='less' scoped>
@import '../../style/var';
  .text-select-ans {
    .option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 26px;
      padding: 12px 13px;
      background-color: @quesOptionBg;
      border: 1px solid @quesOptionBorder;
      border-radius: 8px;
      font-size: 16px;
      color: @quesOptionDefaultTextColor;
      &-inner {
        display: flex;
        align-items: center;
      }
      &-content {
        margin-left: 10px;
        padding: 0 10px;
        line-height:18px;
        font-size: 14px;
        border-left: 1px solid @quesOptionDividingLine;
        word-break: break-word;
      }
    }
  }
</style>
