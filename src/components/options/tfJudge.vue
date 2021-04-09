<!-- YN判断选项 -->
<template>
  <div class="tf-options-wrapper">
    <div
      v-for="(item, index) in effectiveOptions"
      :key="index"
      class="option-container"
    >
      <div
        :class="[
          'option',
          canActive&&item.isChecked ? 'isChecked' : '',
          canActive&&preview&&item.isTure ? 'isTure' : '',
          canActive&&preview&&item.isChecked&&!item.isTure ? 'isFalse' : '',
        ]"
        @click="!canActive || preview ? '' : touchHandler(index, $event)"
      >
        {{ item.content }}
        <!-- <div class="option-line1" />
        <div class="option-line2" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import optionsMixin from '../../mixins/optionsMixin'
export default {
  name: 'TFJudge',
  mixins: [optionsMixin]
}
</script>
<style lang='less' scoped>
@import '../../style/var';
  .tf-options-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .option-container {
        flex: 0 0 47%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 36px;
        .option {
            position: relative;
            width: 100%;
            height: 50px;
            background-color: @quesOptionBorder;
            border: 1px solid @quesOptionBorder;
            border-radius: 25px;
            margin-top: 18px;
            line-height: 50px;
            text-align: center;
            font-size: 18px;
            color: @quesOptionDefaultTextColor;
            &-line1, &-line2 {
                position: absolute;
                right: 16px;
                width: 16px;
                height: 6px;
                border-radius: 3px;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .2));
            }
            &-line1 {
                top: 12px;
                transform: rotate(-60deg);
            }
            &-line2 {
                top: 24px;
                transform: rotate(-15deg);
            }
            &.isChecked {
                background-color: @commonColor;
                border: 1px solid @commonColor;
                color: @white;
                .option-shadow {
                    background-color:#6236FF;
                }
            }
            &.isTure {
                background-color: @quesOptionTureBorder;
                border: 1px solid @quesOptionTureBorder;
                color: @white;
                .option-shadow {
                    background-color:#51BA6E;
                }
            }
            &.isFalse {
                background-color: @quesOptionFalseBorder;
                border: 1px solid @quesOptionFalseBorder;
                color: @white;
                .option-shadow {
                    background-color:#E44F44;
                }
            }
        }
    }
  }
</style>
