<!-- 作答区域区域组件 -->
<template>
  <component
    :is="componentName"
    ref="targetOption"
    :template-type="templateType"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'QueensAnsweringArea',
  components: {
    materialQuestions: () => import('../components/answering-area/materialQuestions'), // 材料题 阅读判断 阅读选择
    selectFillComplex: () => import('../components/answering-area/selectFillComplexOptions'), // 选词
    clozeFillComplex: () => import('../components/answering-area/clozeFillComplexOptions') // 选择 完形填空
  },

  props: {
    // 模板类型
    templateType: {
      type: String,
      default: ''
    }
  },

  computed: {
    componentName() {
      if (this.templateType === 'selectFillComplex' || this.templateType === 'clozeFillComplex') {
        return this.templateType
      } else {
        return 'materialQuestions'
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../style/var';
  .answer-wrapper {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 3;
    padding: 34px 0 76px;
    background-color: #fff;
    border-radius: 14px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
    .answer-inner {
      position: relative;
      min-height: 0;
      max-height: 0;
      padding: 0 20px;
      transition: all ease 0.2s;
      overflow: hidden;
      overflow-y: auto;
      font-size: 16px;
      .explain {
        margin-top: 30px;
        padding: 30px 0;
        border-top: 1px solid rgba(148, 110, 110, 0.1);
      }
      &.ansAndExp {
        min-height: 100px;
        max-height: 60vh;
      }
      &.ansRichText {
        min-height: 100px;
        max-height: 60vh;
      }
      &.ansBaseText {
        min-height: 80px;
        max-height: 60vh;
      }
    }
    .answer-react {
      position: absolute;
      top: -30px;
      right: 0;
      width: 150px;
      height: 60px;
      background-color: inherit;
      border-top-right-radius: 14px;
      border-top-left-radius: 10px;
      box-shadow: 0 -6px 6px rgba(0, 0, 0, 0.01);
      font-size: 16px;
      &-square {
        position: absolute;
        top: 7px;
        left: -19px;
        transform: rotate(45deg);
        width: 30px;
        height: 48px;
        background-color: inherit;
        box-shadow: 0 -6px 6px rgba(0, 0, 0, 0.01);
      }
      &-icon-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content:center;
        height: 100%;
        z-index: 1;
        font-family: PingFangSC-Medium, PingFang SC;
        color: @commonColor;
        .answer-react-icon {
          width: 24px;
        }
        .answer-react-icon, .answer-react-text {
          margin-right: 5px;
        }
        .answer-react-text {
          font-size: 14px;
          font-weight: 600;
        }
        .answer-react-change-react {
          cursor: pointer;
          transform: scale(0.8);
          font-weight: 900;
        }
      }
    }
    .button-wrapper{
      box-sizing: border-box;
      position: absolute;
      bottom: 18px;
      left: 0;
      width: 100%;
      padding: 0 16px;
    }
    .mask{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
    }
    .answer-inner::-webkit-scrollbar {
      display: none !important;
    }
    /deep/ img {
      max-width: 90% !important;
    }
  }
</style>
