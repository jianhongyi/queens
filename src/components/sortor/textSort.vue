<!-- 单词排序 -->
<template>
  <div class="text-sort-wrapper">
    <header class="header">
      <div :style="itemWrapperStyle" class="item-wrapper">
        <div v-for="index in underLineNum" :key="index" :style="{ top: underLinetop(index) }" class="underline" />
        <div v-if="!isShowResult" class="item-mark">
          {{ mark }}
        </div>
        <div ref="itemInner" class="item-inner">
          <div
            v-for="(item, index) in showOptions"
            :key="item.contentIdx || index"
            :class="[
              'item',
              {
                'first-item': index === 0,
                'last-item': index === effectiveOptions.length - 1,
                'isTure': canActive&&preview&&item.isTure,
                'isFalse': canActive&&preview&&item.isFalse
              }
            ]"
            @click="!canActive || preview ? '' : itemcClickHandler(item, index, $event)"
          >
            {{ (item.content || '').trim() }}
          </div>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="option-wrapper">
        <div ref="optionInner" class="option-inner">
          <div
            v-for="(item, index) in effectiveOptions"
            ref="option"
            :key="item.contentIdx || index"
            :class="[
              'option',
              {
                'first-option': index === 0,
                'last-option': index === effectiveOptions.length - 1,
                'isChecked': canActive&&item.isChecked
              }
            ]"
            @click="!canActive || preview ? '' : touchHandler(item, $event)"
          >
            {{ (item.content || '').trim() }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const h = 8
import sortorMixin from '../../mixins/sortorMixin'
import { REGEXPS } from '../../utils/constant'
import { getPureText } from '../../utils'
export default {
  name: 'TextSort',
  components: {},
  mixins: [sortorMixin],
  props: {},
  data() {
    return {
      // 横线条数
      underLineNum: 0,
      // 选项高度
      itemHeight: 0,
      // 标点符号
      mark: null
    }
  },
  computed: {
    underLinetop: {
      get(index) {
        return function(index) {
          return (this.itemHeight + h) * index + (index - 1) * h + 'px'
        }
      }
    },
    itemWrapperStyle() {
      const obj = {}
      obj['min-height'] = (this.itemHeight + h) * this.underLineNum + this.underLineNum * h + 'px'
      return obj
    }
  },
  watch: {},
  created() {
    const body = getPureText(this.body, '')
    if (REGEXPS.endsMarkRes.test(body)) {
      this.mark = RegExp.$1
    }
  },
  mounted() {
    this.caculateHeight('optionInner', true)
  },
  beforeDestroy() {},
  methods: {
    caculateItemWrapperHeight() {
      this.caculateHeight('itemInner')
    },
    caculateHeight(ref, isPlusOne) {
      this.$nextTick(() => {
        const option = this.$refs['option'] && this.$refs['option'][0]
        this.itemHeight = option && option.offsetHeight || 0
        const optionH = this.itemHeight + parseInt(window.getComputedStyle(option)?.marginBottom || 0)
        this.underLineNum = Math.ceil(this.$refs[ref]?.offsetHeight / optionH)
        // 暂时在初始化时多加一行
        isPlusOne && (this.underLineNum = this.underLineNum + 1)
      })
    }
  }

}
</script>
<style lang='less' scoped>
@import '../../style/components/sortor/textSort.less';
</style>
