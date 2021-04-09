<!-- 图片排序答案 -->
<template>
  <queens-popup class="popup" v-bind="$attrs">
    <div class="img-sort-ans-wrapper">
      <div :style="{'justify-content': flexPosition}" class="img-sort-ans">
        <div
          v-for="(item, index) in effectiveAnswers"
          :key="index"
          :class="[
            'option'
          ]"
        >
          <!-- <img :src="item.src" class="option-img"> -->
          <van-image :src="item && item.src" :show-error="true" :show-loading="true" class="option-img" />
        </div>
      </div>
    </div>
  </queens-popup>
</template>

<script>
import answerMixin from '../../mixins/answerMixin'
import { Image as VanImage } from 'vant'
export default {
  name: 'ImgSortAns',
  components: {
    VanImage
  },
  mixins: [answerMixin]
}
</script>
<style lang='less' scoped>
@import '../../style/mixins/app.less';
@imgHeight: auto;
  .img-sort-ans {
    .flex-wrap(flex-start);
    justify-content: flex-start !important;
    .option {
        .img-option(20%, @imgHeight, border-box, 8px, 14px, 3px);
        &-img {
           .img-target(100%, 100%, 0);
           overflow: hidden;
        }
        /deep/img {
          max-width: 100% !important;
        }
    }
  }
</style>
