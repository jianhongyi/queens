<!-- 字母排序 -->
<template>
  <div class="letter-sort-wrapper">
    <header class="header">
      <div class="item">
        <div
          v-for="(item, index) in showOptions"
          :key="item.contentIdx || index"
          :class="[
            item.isLetter ? 'item-noCheck' : 'item-canCheck',
            {
              'isChecked': canActive&&item.isChecked,
              'isTure': canActive&&preview&&item.isTure,
              'isFalse': canActive&&preview&&item.isFalse,
            }
          ]"
          @click="!canActive || preview ? '' : itemcClickHandler(item, index, $event)"
        >
          {{ item.content }}
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
                'isChecked': canActive&&item.isChecked
              }
            ]"
            @click="!canActive || preview ? '' : touchHandler(item, $event)"
          >
            {{ item.content || '' }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import sortorMixin from '../../mixins/sortorMixin'
import { getPureText } from '../../utils'
import { Toast } from 'vant'
export default {
  name: 'TextSort',
  components: {},
  mixins: [sortorMixin],
  props: {},
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {},
  created() {},
  mounted() {
    this.initShowOptions()
  },
  beforeDestroy() {},
  methods: {
    // 点击选择选项操作
    touchHandler(item, e) {
      if (!this.canActive || this.preview) {
        return
      }
      if (!this.showOptions.includes(item)) {
        item.isChecked = true
        const index = this.showOptions.findIndex(option => {
          return option.content === ''
        })
        this.showOptions.splice(index, 1, item)
      }
      e.stopPropagation()
      e.preventDefault()
    },
    // 点击排序项操作
    itemcClickHandler(item, index) {
      if (!this.canActive || this.preview) {
        return
      }
      if (item.isFillItem) {
        return
      }
      const target = this.setTargetIndex(this.effectiveOptions, item, '')
      target && (target.isChecked = null)
      this.showOptions.splice(index, 1, this.mackShowOptionsObj('', true))
      // this.showOptions.forEach((itx, ind) => {
      //   this.setTargetIndex(this.effectiveOptions, itx, ind + 1)
      // })
    },
    // 初始化show
    initShowOptions() {
      if (this.showOptions.length) {
        return
      }
      const letters = getPureText(this.body, '@', true, true, true)
      for (const key in letters) {
        const letter = letters[key]
        const obj = this.mackShowOptionsObj(letter)
        if (letter === '@') {
          obj.content = ''
        } else {
          obj.isLetter = true
        }
        this.showOptions.push(obj)
      }
    },
    // 组装一个对象
    mackShowOptionsObj(value) {
      const obj = {}
      obj.content = value
      obj.contentIdx = value + new Date().getTime() + (Math.random() * 10000 + 1).toFixed(4)
      obj.isFillItem = true
      return obj
    },
    reset() {
      this.showOptions.forEach((item, index) => {
        if (!item.isLetter) {
          this.itemcClickHandler(item, index)
        }
      })
      this.doReset()
    },
    // 重置数据
    doReset() {
      this.effectiveOptions.forEach(item => {
        this.$set(item, 'isChecked', null)
        this.$set(item, 'isTure', null)
        this.$set(item, 'isFalse', null)
      })
      this.$forceUpdate()
    },
    // 显示结果
    showResult() {
      if (!this.userAnswer?.answers?.length) {
        return
      }
      if (this.userAnswer.answers.length !== this.answers.length) {
        Toast('请全部选择！')
        return
      }
      this.initShowOptions()
      this.userAnswer?.answers?.forEach((contentIdx, idx) => {
        const target = this.effectiveOptions.find(it => {
          return it.contentIdx + '' === contentIdx + ''
        })
        if (contentIdx + '' === this.answers[idx] + '') {
          target && (target.isTure = true)
        } else {
          target && (target.isFalse = true)
        }
        target.isChecked = true
        const index = this.showOptions.findIndex(option => {
          return option.content === ''
        })
        index >= 0 && this.showOptions.splice(index, 1, target)
      })
    }
  }

}
</script>
<style lang='less' scoped>
@import '../../style/components/sortor/letterSort.less';
</style>
