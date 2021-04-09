<!--
 * @Author: xue
 * @Date: 2020-12-03 10:07:09
 * @LastEditTime: 2021-01-10 17:09:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \queens\src\components\answer\ynJudgeAns.vue
-->
<!-- YN判断选项 -->
<template>
  <queens-popup class="popup" v-bind="$attrs">
    <div :style="{'justify-content': flexPosition}" class="yn-options-ans-wrapper">
      <div
        v-for="(item, index) in effectiveAnswers"
        :key="index"
        class="option-container"
      >
        <div
          :class="[
            'option'
          ]"
        >
          {{ item.content }}
        <!-- <div class="option-shadow" /> -->
        <!-- <div class="option-line1" />
        <div class="option-line2" /> -->
        <!-- <img v-if="item.content" :src="`src/assets/imgs/${item.content.toLowerCase()}_icon.png`" class="option-icon"> -->
        </div>
      </div>
    </div>
  </queens-popup>
</template>

<script>
import answerMixin from '../../mixins/answerMixin'
export default {
  name: 'YNJudgeAns',
  mixins: [answerMixin]
}
</script>
<style lang='less' scoped>
@import '../../style/var';
  .yn-options-ans-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .option-container {
        flex: 0 0 47%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        .option {
            position: relative;
            width: 100%;
            height: 50px;
            background-color: @quesOptionBorder;
            border: 1px solid @quesOptionBorder;
            border-radius: 25px;
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
        }
    }
  }
</style>
