<template>
  <div class="ques-original">
    <div class="view-btn" @click="toggleContent">
      <span class="text">查看原文</span>
      <span :class="['icon', show ? 'ques-show' : '']"><i class="icon van-icon van-icon-arrow-down" /></span>
    </div>
    <div class="view-content" :class="[show ? 'ques-show' : '']" v-html="content" />
  </div>
</template>

<script>
import imgs from '../assets/imgs/index'
export default {
  name: 'Original',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imgs,
      show: false
    }
  },
  methods: {
    toggleContent() {
      this.show = !this.show
    }
  }
}
</script>

<style scoped lang="less">
  .view-btn {
    padding: 0 8px;
    font-size: 14px;
    line-height: 1;
    color: #858E9C;
    margin-bottom: 9px;
    cursor: pointer;
    span {
      display: inline-block;
      vertical-align: middle;
      &.icon {
        margin-left: 4px;
      }
      &.ques-show .icon {
        transform: rotateZ(180deg);
      }
    }
  }
  .view-content {
    height: 0;
    overflow: hidden;
    padding: 0 8px;
    font-size: 14px;
    line-height: 21px;
    background: #FAFAFA;
    border-radius: 6px;
    color: #858E9C;
    &.ques-show {
      height: auto;
    }
    /deep/ p {
      margin: 0;
    }
  }
</style>
