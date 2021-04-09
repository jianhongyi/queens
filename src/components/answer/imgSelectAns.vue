<!-- 图片选项答案 -->
<template>
  <div class="img-select-ans-wrapper">
    <queens-popup class="popup" v-bind="$attrs">
      <div :style="{'justify-content': flexPosition}" class="img-select-ans">
        <div
          v-for="(item, index) in effectiveAnswers"
          :key="index"
          :class="[
            'option'
          ]"
        >
          <van-image :src="item && item.src" :show-error="true" :show-loading="true" class="option-img" />
        </div>
      </div>
    </queens-popup>
  </div>
</template>

<script>
import answerMixin from '../../mixins/answerMixin'
import { Image as VanImage } from 'vant'
export default {
  name: 'ImgSelectAns',
  components: {
    VanImage
  },
  mixins: [answerMixin]
}
</script>
<style lang='less' scoped>
@import '../../style/var';
  .img-select-ans {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .option {
        position: relative;
        flex: 0 0 48%;
        text-align: center;
        box-sizing: border-box;
        max-width: 206px;
        height: auto;
        min-height: 112px;
        border: 2px solid transparent;
        border-radius: 8px;
        padding: 1px;
        &-img {
            width: 100%;
            height: auto;
            border-radius: 5px;
            font-size:0;
        }
    }
  }
</style>
