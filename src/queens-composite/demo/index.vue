<template>
  <demo-section>
    <div style="max-height: 70vh; overflow: auto;">
      <cell v-for="item in cellData" :key="item.templateType" :title="item.title" is-link @click="switchAnswer(item.templateType)" />
    </div>
    <demo-block class="demo-block" title="">
      <queens-composite
        ref="composite"
        :key="quesData.questionId"
        class="composite"
        :template-type="quesData.templateType"
        :ques-data="quesData"
        :preview="preview"
        :init-active-index="0"
        :is-show-result="preview"
        :is-show-answering-area="true"
        :is-unfold="true"
      />
      <div class="botton-wrapper">
        <queens-button
          type="primary"
          round
          size="large"
          @click="reset"
        >
          重置
        </queens-button>
        <queens-button
          type="primary"
          round
          size="large"
          @click="clickBtn"
        >
          提交
        </queens-button>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
import { Cell } from 'vant'
import { cellData, data } from './mock.js'
export default {
  components: {
    Cell
  },
  data() {
    return {
      cellData,
      quesData: {},
      preview: false
    }
  },
  created() {
    this.switchAnswer('selectFillComplex')
  },
  methods: {
    clickBtn() {
      this.preview = true
    },
    reset() {
      this.$refs.composite.reset()
    },
    switchAnswer(templateType) {
      this.preview = false
      this.quesData = data[templateType]
      // this.reset()
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .composite-wrapper {
  padding: 0 16px;
}
.botton-wrapper {
    box-sizing: border-box;
    display: flex;
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 14px 16px;
    z-index: 99;
  }
  .demo-block {
    margin-top: 18px;
  }
/deep/ .popup-wrapper {
    position: fixed;
  }
  /deep/ .scroll-card-inner {
    padding-bottom: 120px !important;
  }
</style>
