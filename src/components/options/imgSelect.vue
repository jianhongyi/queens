<!-- 图片选项 -->
<template>
  <div class="img-options-wrapper">
    <div
      v-for="(item, index) in effectiveOptions"
      :key="index"
      :class="[
        'option',
        canActive&&item.isChecked ? 'isChecked' : '',
        canActive&&preview&&item.isTure ? 'isTure' : '',
        canActive&&preview&&item.isChecked&&!item.isTure ? 'isFalse' : '',
      ]"
      :style="{ flex: isPad&&effectiveOptions.length>4 ? '0 0 32%' : '0 0 48%' }"
      @click="!canActive || preview ? '' : touchHandler(index, $event)"
    >
      <div class="option-img-wrapper">
        <van-image :src="item.src" :show-error="true" :show-loading="true" class="option-img" />
      </div>
      <div v-if="canActive&&preview" class="option-icon">
        <img v-if="item.isTure" class="option-icon-true" :src="imgs['trueIconWhite']">
        <img v-else-if="item.isChecked&&!item.isTure" class="option-icon-false" :src="imgs['falseIconWhite']">
      </div>
    </div>
  </div>
</template>

<script>
import imgs from '../../assets/imgs/index'
import optionsMixin from '../../mixins/optionsMixin'
import { Image as VanImage } from 'vant'
export default {
  name: 'ImgSelect',
  components: {
    VanImage
  },
  mixins: [optionsMixin],
  data() {
    return {
      imgs
    }
  },
  computed: {
    isPad() {
      return document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1200
    }
  }
}
</script>
<style lang='less' scoped>
@import '../../style/mixins/app.less';
  .img-options-wrapper {
    .flex-wrap(space-between);
    .option {
      .img-option(48%);
      border-color: rgba(202, 207, 211, 0.1);
      &-img-wrapper {
        .img-container()
      }
      &-img {
        .img-target()
      }
      &-icon {
        .img-icon()
      }
      &.isChecked {
          border-color: @commonColor;
      }
      &.isTure {
          border-color: transparent;
          .option-icon {
              background-color: @quesOptionImgTureBorder;
              z-index: 1;
          }
      }
      &.isFalse {
          border-color: transparent;
          .option-icon {
              background-color: @quesOptionImgFalseBorder;
              z-index: 1;
          }
      }
    }
    &::after {
      content: "";
      flex: 0 0 32%;
    }
  }
</style>
