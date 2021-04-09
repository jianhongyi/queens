<!-- 选词 填空复合子题 -->
<template>
  <div class="select-fill-complex-options">
    <queens-popup
      button-text="选词"
      decorate-icon-class="iconxuanci1"
      :is-unfold="true"
    >
      <section class="section">
        <div class="option-wrapper">
          <div ref="optionInner" class="option-inner">
            <div
              v-for="(item, index) in options"
              ref="option"
              :key="item.contentIdx || index"
              :class="`option ${item.isChecked ? 'isChecked' : ''}`"
              @click="touchHandler(item, index)"
            >
              {{ (item.content || '').trim() }}
            </div>
          </div>
        </div>
      </section>
    </queens-popup>
  </div>
</template>

<script>
export default {
  name: 'SelectFillComplex',
  props: {
    // 选项数据
    options: {
      type: Array,
      default: () => []
    },
    selectAnswerItem: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    touchHandler(item, index) {
      if (item.isChecked) return // 已选择不可重复选择
      const data = {
        content: item.content,
        contentIdx: item.contentIdx,
        optionsIndex: index
      }
      this.selectAnswerItem(data)
    }
  }

}
</script>

<style lang='less' scoped>
@import '../../style/components/sortor/textSort.less';
.section{
  margin-top: 0px;
}
</style>
