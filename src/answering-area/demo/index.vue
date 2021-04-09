<template>
  <demo-section>
    <demo-block class="demo">
      <div style="max-height: 70vh; overflow: auto;">
        <cell
          v-for="item in cellData"
          :key="item.templateType"
          :title="item.title"
          is-link
          @click="templateType = item.templateType"
        />
      </div>
      <queens-answering-area
        :options="options"
        :template-type="templateType"
        :active-index="activeIndex"
        @change-active-index="changeIndex"
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
  provide() {
    return {
      thisComponent: this
    }
  },
  data() {
    return {
      cellData,
      data,
      options: [],
      templateType: 'clozeFillComplex',
      activeIndex: 1
    }
  },
  watch: {
    templateType: {
      handler(value) {
        if (this.templateType === 'selectFillComplex') {
          this.options = this.data[this.templateType].options
        } else {
          this.options = this.data[this.templateType]
        }
      },
      immediate: true
    }
  },
  methods: {
    changeIndex(value) {
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
