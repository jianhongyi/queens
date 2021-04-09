<!-- 文本选项 -->
<template>
  <div class="text-options-wrapper">
    <div
      v-for="(item, index) in effectiveOptions"
      :key="index"
      :class="[
        'option',
        canActive&&item.isChecked ? 'isChecked' : '',
        canActive&&preview&&item.isTure ? 'isTure' : '',
        canActive&&preview&&item.isChecked&&!item.isTure ? 'isFalse' : '',
      ]"
      @click="!canActive || preview ? '' : touchHandler(index, $event)"
    >
      <div class="option-inner">
        <div class="option-index">
          {{ optionMaps[index] }}
        </div>
        <div class="option-content" v-html="item.content" />
      </div>
      <div v-if="canActive&&preview" class="option-icon">
        <img v-if="item.isTure" class="option-icon-true" :src="imgs['trueIconBlue']">
        <img v-else-if="item.isChecked&&!item.isTure" class="option-icon-false" :src="imgs['falseIconRed']">
      </div>
      <div v-else class="option-fill" />
    </div>
  </div>
</template>

<script>
import imgs from '../../assets/imgs/index'
import optionsMixin from '../../mixins/optionsMixin'
export default {
  name: 'TextSelect',
  mixins: [optionsMixin],
  data() {
    return {
      imgs
    }
  }
}
</script>
<style lang='less' scoped>
@import '../../style/var';
  .text-options-wrapper {
    .option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 26px;
      padding: 12px 16px;
      background-color: @quesOptionBg;
      border: 1px solid @quesOptionBorder;
      border-radius: 8px;
      margin-bottom: 14px;
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
        border-left: 1px solid @quesOptionDividingLine;
        word-break: break-word;
      }
      &-icon {
        display: flex;
        align-items: center;
        &-true {
          width: 20px;
          height: 16px;
        }
        &-false {
          width: 16px;
        }
      }
      &-fill {
        display: block;
        width: 22px;
        height: 16px;
      }
      &.isChecked {
        background-color: @quesOptionCheckedBg;
        border: 1px solid @commonColor;
        color: @commonColor;
        .option-content {
          border-left: 1px solid @quesOptionCheckedBorderLeft;
        }
      }
      &.isTure {
        background-color: @quesOptionTureBg;
        border: 1px solid @quesOptionTureBorder;
        color: @quesOptionTureTextColor;
        .option-content {
          border-left: 1px solid @quesOptionTureBorderLeft;
        }
      }
      &.isFalse {
        background-color: @quesOptionFalseBg;
        border: 1px solid @quesOptionFalseBorder;
        color: @quesOptionFalseTextColor;
        .option-content {
          border-left: 1px solid @quesOptionFalseBorderLeft;
        }
      }
    }
  }
</style>
