<!-- 音频选项 -->
<template>
  <div class="audio-options-wrapper">
    <div
      v-for="(item, index) in effectiveOptions"
      :key="index"
      class="option-container"
    >
      <template v-if="item.audioInfo&&item.audioInfo.url">
        <play-audio :url="item.audioInfo.url" :template-type="templateType" />
        <div
          :class="[
            'option',
            canActive&&item.isChecked ? 'isChecked' : '',
            canActive&&preview&&item.isTure ? 'isTure' : '',
            canActive&&preview&&item.isChecked&&!item.isTure ? 'isFalse' : '',
          ]"
          @click="!canActive || preview ? '' : touchHandler(index, $event)"
        >
          {{ optionMaps[index] }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import optionsMixin from '../../mixins/optionsMixin'
export default {
  name: 'AudioSelect',
  mixins: [optionsMixin]
}
</script>
<style lang='less' scoped>
@import '../../style/var';
  .audio-options-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .option-container {
        position: relative;
        flex: 0 0 48%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 36px;
        .option {
            width: 100%;
            height: 50px;
            background-color: @quesOptionBg;
            border: 1px solid @quesOptionBorder;
            border-radius: 8px;
            margin-top: 18px;
            line-height: 50px;
            text-align: center;
            font-size: 18px;
            color: @quesOptionDefaultTextColor;
            &.isChecked {
                background-color: @quesOptionCheckedBg;
                border: 1px solid @commonColor;
                color: @commonColor;
            }
            &.isTure {
                background-color: @quesOptionTureBg;
                border: 1px solid @quesOptionTureBorder;
                color: @quesOptionTureTextColor;
                font-weight: 600;
            }
            &.isFalse {
                background-color: @quesOptionFalseBg;
                border: 1px solid @quesOptionFalseBorder;
                color: @quesOptionFalseTextColor;
                font-weight: 600;
            }
        }
    }
  }
</style>
