<!-- 句子排序 -->
<template>
  <div class="sentence-sort-wrapper">
    <header class="header">
      <div class="bg">
        <div
          v-for="(item, index) in effectiveOptions.length"
          :key="index"
          :class="[
            'bg-option'
          ]"
        >
          <div class="bg-item" />
        </div>
      </div>
      <div class="item">
        <div
          v-for="(item, index) in showOptions"
          :key="item.contentIdx || index"
          :class="[
            'item-wrapper',
          ]"
          @click="!canActive || preview ? '' : itemcClickHandler(item, index, $event)"
        >
          <div
            :class="[
              'item-indexmap',
              canActive&&preview&&item.isTure ? 'isTure' : '',
              canActive&&preview&&item.isFalse ? 'isFalse' : ''
            ]"
          >
            {{ item.indexMap }}
          </div>
        </div>
      </div>
    </header>
    <section class="section">
      <div
        v-for="(item, index) in effectiveOptions"
        :key="index"
        :class="[
          'option',
          canActive&&preview&&item.isFalse ? 'isFalse' : ''
        ]"
        @click="!canActive || preview ? '' : touchHandler(item, $event)"
      >
        <div class="option-inner">
          <div class="option-index">
            {{ item.indexMap }}
          </div>
          <div class="option-content" v-html="item.content" />
        </div>
        <div
          :class="[
            'option-icon',
            canActive&&item.index ? 'isChecked' : '',
            canActive&&preview&&item.isTure ? 'isTure' : '',
            canActive&&preview&&item.isFalse ? 'isFalse' : ''
          ]"
        >
          <img v-if="!item.index" class="option-icon-true" :src="imgs['trueIconWhite']">
          <span v-else class="option-icon-num">{{ item.index }}</span>
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
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}

}
</script>
<style lang='less' scoped>
@import '../../style/mixins/app.less';
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
        .img-target(100%, @imgHeight);
        background-color: #F8F8F8;
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
      &-indexmap {
        .img-target(100%, @imgHeight, 8px, 24px);
        .center-flex();
        box-sizing: border-box;
        background-color: @quesOptionCheckedBg;
        border: 1px solid @commonColor;
        color: @commonColor;
        font-weight: 600;
        &.isTure {
          background-color: @quesOptionTureBg;
          border-color: @quesOptionTureBorder;
          color: @quesOptionTureTextColor;
        }
        &.isFalse {
          background-color: @quesOptionFalseBg;
          border-color: @quesOptionFalseBorder;
          color: @quesOptionFalseTextColor;
        }
      }
    }
  }
  .section {
      margin-top: 26px;
    .option {
      position: relative;
      line-height: 26px;
      padding: 12px 16px;
      background-color: @quesOptionBg;
      border: 1px solid @quesOptionBorder;
      border-radius: 8px;
      margin-bottom: 10px;
      font-size: 16px;
      color: @quesOptionDefaultTextColor;
      &-inner {
        display: flex;
        align-items: center;
        margin-right: 30px;
      }
      &-content {
        margin-left: 10px;
        padding: 0 10px;
        line-height:18px;
        border-left: 1px solid @quesOptionDividingLine;
        word-break: break-word;
        /deep/ img[src] {
          max-width: 195px !important;
        }
      }
      &-icon {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
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
