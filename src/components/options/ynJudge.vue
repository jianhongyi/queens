<!-- YN判断选项 -->
<template>
  <div class="yn-options-wrapper">
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
        <!-- <div class="option-shadow" /> -->
        <!-- <div class="option-line1" />
        <div class="option-line2" /> -->
        <!-- <img v-if="item.content" :src="`src/assets/imgs/${item.content.toLowerCase()}_icon.png`" class="option-icon"> -->
      </div>
    </div>
  </div>
</template>

<script>
import optionsMixin from '../../mixins/optionsMixin'
export default {
  name: 'YNJudge',
  mixins: [optionsMixin]
}
</script>
<style lang='less' scoped>
@import '../../style/var';
  .yn-options-wrapper {
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
            &-shadow {
                position: absolute;
                left: 2px;
                top: 51%;
                transform: translateY(-50%);
                width: 30px;
                height: 30px;
                background-color: #DDE5E7;
                border-radius: 50%;
                box-shadow: 0 2px 4px 0 rgba(255,255,255,0.05);
            }
            &-icon {
                position: absolute;
                top: 50%;
                left: 2px;
                width: 36px;
                transform: rotate(-30deg) translateY(-50%);
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
