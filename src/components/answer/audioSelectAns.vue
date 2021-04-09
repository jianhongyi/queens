<!-- 音频选项答案 -->
<template>
  <div class="audio-select-ans-wrapper">
    <queens-popup class="popup" v-bind="$attrs">
        <div :style="{'justify-content': flexPosition}" class="audio-select-ans">
          <div
            v-for="(item, index) in effectiveAnswers"
            :key="index"
            class="option-container"
          >
            <template v-if="item.audioInfo&&item.audioInfo.url">
              <play-audio ref="playAudio" :url="item.audioInfo.url" :template-type="templateType" />
              <div
                :class="[
                  'option'
                ]"
              >
                {{ item.index }}
              </div>
            </template>
          </div>
        </div>
    </queens-popup>
  </div>
</template>

<script>
import answerMixin from '../../mixins/answerMixin'
export default {
  name: 'AndioSelectAns',
  mixins: [answerMixin],
  props: {
    isCollapsed: {
      type: Boolean,
      required: false
    }
  },
  watch: {
    isCollapsed(value) {
      if (!value) {
        this.$refs.playAudio[0]?.pause()
      }
    }
  }
}
</script>
<style lang='less' scoped>
@import '../../style/var';
  .audio-select-ans {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .option-container {
        position: relative;
        flex: 0 0 48%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        }
    }
  }
</style>
