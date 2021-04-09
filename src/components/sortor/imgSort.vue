<!-- 图片排序 -->
<template>
  <div class="img-sortor-wrapper">
    <header class="header">
      <div class="bg">
        <div
          v-for="(item, index) in effectiveOptions.length"
          :key="index"
          :class="[
            'bg-option'
          ]"
        >
          <div class="bg-item">
            <van-image :src="imgs['imgSortBg']" :show-error="true" :show-loading="true" class="bg-img" />
          </div>
        </div>
      </div>
      <div class="item">
        <div
          v-for="(item, index) in showOptions"
          :key="item.contentIdx || index"
          :class="[
            'item-wrapper'
          ]"
          @click="!canActive || preview ? '' : itemcClickHandler(item, index, $event)"
        >
          <van-image :src="item.src" :show-error="true" :show-loading="true" class="item-img" />
          <div v-if="canActive&&preview&&item.isFalse" class="item-icon">
            <img class="item-icon-false" :src="imgs['falseIconWhite']">
          </div>
        </div>
      </div>
    </header>
    <section class="section">
      <div
        v-for="item in effectiveOptions"
        :key="item.contentIdx"
        :class="[
          'option'
        ]"
        :style="{ flex: isPad&&effectiveOptions.length>4 ? '0 0 32%' : '0 0 48%' }"
        @click="!canActive || preview ? '' : touchHandler(item, $event)"
      >
        <div class="option-img-wrapper">
          <van-image :src="item.src" :show-error="true" :show-loading="true" class="option-img" />
          <div class="option-icon">
            <div
              :class="[
                'option-icon-wrapper',
                canActive&&item.index ? 'isChecked' : '',
                canActive&&preview&&item.isTure ? 'isTure' : '',
                canActive&&preview&&item.isFalse ? 'isFalse' : ''
              ]"
            >
              <img v-if="!item.index" class="option-icon-true" :src="imgs['trueIconWhite']">
              <span v-else class="option-icon-num">{{ item.index }}</span>
            </div>
          </div>
        </div>
        <div v-if="canActive&&preview&&item.isFalse" class="option-icon-judge">
          <img class="option-icon-judge-false" :src="imgs['falseIconWhite']">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import sortorMixin from '../../mixins/sortorMixin'
import imgs from '../../assets/imgs/index'
export default {
  name: '',
  components: {},
  mixins: [sortorMixin],
  props: {},
  data() {
    return {
      imgs
    }
  },
  computed: {
    isPad() {
      return document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1200
    }
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}

}
</script>
<style lang='less' scoped>
@import '../../style/mixins/app.less';
  @imgHeight: auto;
  .header {
    position: relative;
    .bg {
      .flex-wrap(flex-start);
      &-option {
        .img-option(20%);
        margin: 0;
        border-width: 3px;
      }
      &-item {
        .img-target(100%);
        background-color: #F8F8F8;
      }
      &-img {
        .img-target(100%);
      }
    }
    .item {
      .flex-wrap(flex-start);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      &-wrapper {
        .img-option(20%);
        margin: 0;
        border-width: 3px;
      }
      &-img {
        .img-target(100%, 100%);
        overflow: hidden;
      }
      &-icon {
        .img-icon(100%, 100%, 1, 8px, 10px);
        background-color: @quesOptionImgFalseBorder;
      }
    }
  }
  .section {
    .flex-wrap(space-between);
    margin-top: 26px;
    .option {
      .img-option(48%);
      border: 1px solid rgba(151, 151, 151, 0.19);
      &-img-wrapper {
        .img-container()
      }
      &-img {
        .img-target()
      }
      /deep/ .van-image__img {
        border-radius: 8px;
      }
      &-icon {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 34px;
        height: 30px;
        background-color: @white;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        &-wrapper {
          width: 20px;
          height: 20px;
          .center-position();
          .center-flex();
          background-color: @gray-4;
          border-radius:50%;
          &.isChecked {
            background-color: @commonColor;
          }
          &.isTure {
            background-color: @commonTrue;
          }
          &.isFalse {
            background-color: @commonFalse;
          }
        }
        &-true {
          width: 14px;
          height: 10px;
        }
        &-num {
          font-size: 14px;
          color: @white;
          font-weight: 600;
        }
      }
      .option-icon-judge {
        .img-icon(100%, 100%, 1, 8px, 24px);
        background-color: @quesOptionImgFalseBorder;
      }
    }
    &::after {
      content: "";
      flex: 0 0 32%;
    }
  }
</style>

