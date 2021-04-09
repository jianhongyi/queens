<template>
  <div :style="{'position': fixed ? 'fixed' : 'relative', 'z-index': zIndex, 'border-bottom': border ? '1px solid #ebedf0' : ''}" class="queens-nav-bar">
    <div class="queens-nav-bar__left" @click="onClickLeft">
      <i v-if="leftArrow" class="iconfont iconzuojiantou" />
      <span class="queens-nav-bar__text">
        <slot name="left">
          {{ leftText }}
        </slot>
      </span>
    </div>
    <div class="queens-nav-bar__title queens-ellipsis">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="queens-nav-bar__right" @click="onClickRight">
      <span class="queens-nav-bar__text">
        <slot name="right">
          {{ rightText }}
        </slot>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QueensNavBar',
  props: {
    title: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    leftArrow: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    onClickLeft(event) {
      this.$emit('click-left', event)
    },
    onClickRight(event) {
      this.$emit('click-right', event)
    }
  }
}
</script>
<style scoped lang='less'>
.queens-nav-bar{
  position: relative;
  top: 0px;
  z-index: 1;
  width: 100%;
  height: 46px;
  line-height: 46px;
  background: #ffffff;
  text-align: center;
  .queens-nav-bar__left{
    position: absolute;
    left: 0px;
    font-size: 14px;
    padding: 0px 7px;
    i{
      float: left;
      margin-right: 3px;
      font-size: 18px;
      color: #111F2C;
    }
  }
  .queens-nav-bar__right{
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: 14px;
    padding: 0px 7px;
  }
  .queens-nav-bar__title{
    max-width: 60%;
    margin: 0 auto;
    font-size: 17px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #111F2C;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
