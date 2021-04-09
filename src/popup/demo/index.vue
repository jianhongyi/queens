<template>
  <demo-section>
    <demo-block class="demo">
      <div style="max-height: 70vh; overflow: auto;">
        <cell
          v-for="item in cellData"
          :key="item.title"
          :title="item.title"
          is-link
          @click="index = item.title"
        />
      </div>
      <queens-popup v-if="index==='默认样式'">
        <p>
          {{ index }} 测试很多字 测试很多字 测试很多字 测试很多字 测试很多字 测试很多字测试很多字测试很多字测试很多字测试很多字测试很多字测试很多字测试很多字
        </p>
      </queens-popup>
      <queens-popup
        v-if="index==='自定义按钮内容'"
        button-text="选词"
        decorate-icon-class="iconxuanci1"
        :is-show-swiper-icon="true"
      >
        <p>
          {{ index }} 测试很多字 <br> 测试很多字 <br> 测试很多字 <br>测试很多字<br> 测试很多字 <br>测试很多字测试很多字测试很多字测试很多字
        </p>
      </queens-popup>
    </demo-block>
  </demo-section>
</template>
<script>
import { Cell } from 'vant'
import { cellData } from './mock.js'
export default {
  components: {
    Cell
  },
  data() {
    return {
      cellData,
      index: '自定义按钮内容'
    }
  }
}
</script>
<style lang="less" scoped>
  .demo {
    margin-top: 16px;
  }
  .demo-popup{
    // background-color: red;
  }
</style>
