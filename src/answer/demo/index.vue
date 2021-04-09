<template>
  <demo-section>
    <demo-block class="demo">
      <div style="max-height: 70vh; overflow: auto;">
        <cell
          v-for="item in cellData"
          :key="item.templateType"
          :title="item.title"
          is-link
          @click="switchAnswer(item.templateType)"
        />
      </div>
      <queens-answer
        ref="quesAnswer"
        :body="quesData.body"
        :options="quesData.options"
        :sub-questions="quesData.subQuestions"
        :answers="quesData.answers"
        :explain="quesData.explain"
        :template-type="quesData.templateType"
        :active-index="activeIndex"
        @change-active-index="changeActiveIndex"
        @ans-touch="ansTouch"
      />
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
      activeIndex: 1
    }
  },
  created() {
    this.switchAnswer('textSelect')
  },
  beforeDestroy() {
    this.cellData = null
    this.quesData = null
  },
  methods: {
    switchAnswer(templateType) {
      this.quesData = data[templateType]
    },
    ansTouch(isTrue) {
      console.log(isTrue)
    },
    changeActiveIndex(value) {
      this.activeIndex = value
    }
  }
}
</script>
<style lang="less" scoped>
  .demo {
    margin-top: 16px;
  }
</style>
