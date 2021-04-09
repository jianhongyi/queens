<!-- 图片连线单元 -->
<template>
  <div
    class="text-item-wrapper"
    :style="{
      'border-color': canActive && option.selectStyle && option.selectStyle.bd || '#E7EEF0',
      'background-color':canActive && option.selectStyle && option.selectStyle.bg || '#F3F7F8'
    }"
    @click="clickHandler"
  >
    <div class="item-wrapper">
      <div
        :class="[
          'item'
        ]"
        :style="{
          'color': (canActive && option.isResult && option.selectStyle && option.selectStyle.bd + ' !important') || '#111F2C',
        }"
        v-html="content"
      />
      <div
        v-if="isShowCircle"
        ref="circle"
        :class="['item-circle', { 'isTrue': preview&&canActive }]"
        :style="[
          pointStyle,
          {
            'background-color': option.selectStyle && option.selectStyle.bd || '#fff',
            'border-color': option.selectStyle && option.selectStyle.bd || '#CFD2D5'
          }
        ]"
      >
        <img v-if="preview&&canActive" :src="imgs[`${option.isTure ? 'trueIconWhite' : 'falseIconWhite'}`]" :class="['item-circle-img', { 'isTrue': option.isTure }]">
      </div>
    </div>
  </div>
</template>

<script>
import linerItemMixin from '../../mixins/linerItemMixin'
export default {
  name: 'TextLinerItem',
  mixins: [linerItemMixin],
  props: {},
  data() {
    return {
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
  @import '../../style/components/liner/textLinerItem.less';
</style>
