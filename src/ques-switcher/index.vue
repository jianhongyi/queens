<!-- 题号切换器 -->
<template>
  <div v-if="questionInfos && questionInfos.length" class="question-switcher-wrapper">
    <div ref="scrollWrapper" class="scroll-wrapper">
      <ul class="item-wrap">
        <li
          v-for="(item, index) in questionInfos"
          ref="item"
          :key="item.questionId"
          :class="[
            'item',
            isEllipse ? 'ellipse' : '',
            isShowResult&&item.userAnswer&&+item.userAnswer.score===100 ? 'success' : isShowResult&&item.userAnswer&&+item.userAnswer.score<100 ? 'cross' : '',
            isShowResult ? '' : item.questionId === checked ? 'isChecked' : '',
            isEllipse&&!isShowResult&&item.isChecked ? 'isAnswer' : ''
          ]"
          :style="{
            'background-color': itemBgColor(item),
            'color': itemFontColor(item),
            'border-color': itemBorderColor(item),
            'font-size': switcherFontSize ? switcherFontSize : ''
          }"
          @click="clickHandler(item, index, $event)"
        >
          {{ index + 1 }}
          <div v-if="isShowResult&&isShowIcon&&item.userAnswer" :class="['result-icon', item.userAnswer&&+item.userAnswer.score===100 ? 'success' : item.userAnswer&&+item.userAnswer.score<100 ? 'cross' : '', { 'isAlreadyFixed': isAlreadyFixed(item) } ]">
            <span v-if="isAlreadyFixed(item)" class="already-fixed">订正</span>
            <van-icon v-else :name="item.userAnswer&&+item.userAnswer.score===100 ? 'success' : item.userAnswer&&+item.userAnswer.score<100 ? 'cross' : ''" />
          </div>
          <div v-if="isShowArrow&&item.questionId === checked" :style="{'border-top-color': itemActiveBg}" :class="['item-arrow', item.questionId === checked ? 'isChecked' : '']" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Icon as VanIcon } from 'vant'
export default {
  name: 'QueensQuesSwitcher',
  components: {
    VanIcon
  },
  props: {
    questionInfos: {
      type: Array,
      default: () => ([]),
      required: true
    },
    isEllipse: {
      type: Boolean,
      default: false
    },
    // 是否显示小箭头
    isShowArrow: {
      type: Boolean,
      default: true
    },
    // 是否显示正确、错误图标
    isShowIcon: {
      type: Boolean,
      default: true
    },
    isShowResult: {
      type: Boolean,
      default: false
    },
    itemBg: {
      type: String,
      default: ''
    },
    itemActiveBg: {
      type: String,
      default: ''
    },
    itemActiveColor: {
      type: String,
      default: ''
    },
    itemColor: {
      type: String,
      default: ''
    },
    itemBorder: {
      type: [Boolean, String],
      default: true
    },
    itemActiveBorder: {
      type: [Boolean, String],
      default: ''
    },
    activeIndex: {
      type: Number,
      default: null
    },
    switcherFontSize: {
      type: [String, Number],
      default: ''
    },
    wrapperSelector: {
      type: [String, Object],
      default: '',
      required: false
    }
  },
  data() {
    return {
      checked: null,
      preIndex: null,
      scrollDom: null,
      scrollItem: null
    }
  },
  computed: {
    middleScreenWidth() {
      let wrapperDomH
      if (this.wrapperSelector) {
        const selector = this.wrapperSelector.charAt(0) === '.' ? this.wrapperSelector : `.${this.wrapperSelector}`
        wrapperDomH = document.querySelector(selector)?.clientWidth || 375
      }
      return +((wrapperDomH || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 2).toFixed(4)
    },
    // 是否已经订正
    isAlreadyFixed() {
      return function(item) {
        return item.userAnswer && item.userAnswer.correctStatus && +item.userAnswer.correctStatus === 3
      }
    }
  },
  //  监控data中的数据变化
  watch: {
    questionInfos: {
      handler(value) {
        const firstQuestion = this.questionInfos[this.activeIndex]
        this.checked = firstQuestion && firstQuestion.questionId
        this.clickHandler(firstQuestion, this.activeIndex)
      }
    },
    'questionInfos.length': {
      handler(value) {
        this.questionInfos.forEach(question => {
          let { templateType = '' } = question
          templateType = templateType.toLowerCase()
          if (templateType.endsWith('line')) {
            question?.answers && question.answers.sort((a, b) => a[0] - b[0])
            question?.userAnswer?.answers && question.userAnswer.answers.sort((a, b) => a[0] - b[0])
          }
        })
      },
      immediate: true
    },
    activeIndex: {
      handler(value) {
        if (value === null || value === undefined) {
          return
        }
        this.checked = this.questionInfos[value] && this.questionInfos[value].questionId
        this.$nextTick(() => {
          this.caculatePosition(value)
        })
      },
      immediate: true
    }
  },
  created() {
    Element.prototype.selfScrollTo = function(x, y) {
      if (x <= 0) {
        this.scrollLeft = 0
      } else {
        this.scrollLeft = x || 0
      }
      this.scrollTop = Math.abs(y || 0)
    }
  },
  //  组件销毁之前调用
  beforeDestroy() {
    this.checked = null
    this.preIndex = null
    this.scollDom = null
    this.scrollItem = null
  },
  //  方法集合
  methods: {
    // 每项边框颜色设置
    // todo 优化
    itemBorderColor(item) {
      if (this.isEllipse) {
        if (this.isShowResult) {
          return +item?.userAnswer?.score === 100 ? '#67CF84' : +item?.userAnswer?.score < 100 ? '#F77A6E' : 'transparent'
        } else {
          if (item.questionId === this.checked) {
            return this.itemActiveBorder
          } else {
            if (item.isChecked) {
              return '#F0EFFF'
            } else {
              return this.itemBorder
            }
          }
        }
      } else {
        if (item.questionId === this.checked) {
          return this.itemActiveBorder ? (typeof this.itemActiveBorder === 'string' ? this.itemActiveBorder : '#7263FF') : 'transparent'
        } else {
          return this.itemBorder ? (typeof this.itemBorder === 'string' ? this.itemBorder : '#CFD2D5') : 'transparent'
        }
      }
    },
    // 每项背景颜色设置
    // todo 优化
    itemBgColor(item) {
      if (this.isEllipse) {
        if (this.isShowResult) {
          if (item.questionId === this.checked) {
            return +item?.userAnswer?.score === 100 ? '#67CF84' : +item?.userAnswer?.score < 100 ? '#F77A6E' : 'transparent'
          } else {
            return +item?.userAnswer?.score === 100 ? '#F0FAF2' : +item?.userAnswer?.score < 100 ? '#FEF0EF' : 'transparent'
          }
        } else {
          if (item.questionId === this.checked) {
            return this.itemActiveBg
          } else {
            if (item.isChecked) {
              return '#F0EFFF'
            } else {
              return this.itemBg
            }
          }
        }
      } else {
        return item.questionId === this.checked ? this.itemActiveBg : this.itemBg
      }
    },
    itemFontColor(item) {
      if (item.questionId === this.checked) {
        if (this.isEllipse) {
          return item.isChecked ? '#fff' : this.itemActiveColor
        } else {
          return this.itemActiveColor
        }
      } else {
        return this.itemColor
      }
    },
    clickHandler(item = {}, index, $event) {
      this.$nextTick(() => {
        this.caculatePosition(index)
      })
      const preIndex = this.questionInfos.findIndex(it => {
        return it.questionId === this.checked
      })
      this.$emit('click', item, index, preIndex)
      this.checked = item.questionId
    },
    // 计算位置
    caculatePosition(index) {
      const scrollDom = this.scrollDom ? this.scrollDom : this.scrollDom = this.$refs['scrollWrapper']
      const scrollItem = this.scrollItem ? this.scrollItem : this.scrollItem = this.$refs['item'] && this.$refs['item'][0]
      if (!scrollItem) {
        return
      }
      const offsetWidth = scrollItem.offsetWidth
      const scrollItemCssObj = getComputedStyle(scrollItem)
      const targetLeft = offsetWidth + parseInt(scrollItemCssObj.marginRight)
      const targetOffsetLeft = (targetLeft * index) + (+(offsetWidth / 2).toFixed(4))
      const sub = targetOffsetLeft - this.middleScreenWidth
      if (!scrollDom.scrollTo) {
        scrollDom.selfScrollTo(sub, 0)
        console.log('不支持原生scrollTo,sub:', sub)
      } else {
        scrollDom.scrollTo({
          left: sub,
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }

}
</script>
<style lang='less' scoped>
@import '../style/var';
  .question-switcher-wrapper {
    height: 44px;
    overflow: hidden;
    .scroll-wrapper {
      overflow-x: auto;
      overflow-y: hidden;
      .item-wrap {
        white-space: nowrap;
        .item {
          position: relative;
          display: inline-block;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: @commonBoxBg;
          line-height: 34px;
          text-align: center;
          font-size: 20px;
          color: @commonDarkFontColor;
          border: 1px solid @commonDarkFontColor;
          transition-property: background-color, color, border-color;
          transition-duration:0.2s, 0.2s, 0.2s;
          margin-bottom: 4px;
          &-arrow {
            width: 0;
            height: 0;
            position: absolute;
            bottom: -7px;
            left: 50%;
            transform: translateX(-50%);
            border: 4px solid transparent;
            border-radius: 2px;
            &.isChecked {
              border-top-color: @commonColor;
            }
          }
          &.success {
            color: @commonTrue;
          }
          &.cross {
            color: @commonFalse;
          }
          &.isChecked {
            background-color:@commonColor;
            color: @commonBg;
            border-color: @commonColor;
          }
          &.ellipse {
            width: 52px;
            height: 24px;
            line-height: 24px;
            border-radius: 18px;
          }
          &.isAnswer {
            color: @commonColor;
          }
          .result-icon {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            position: absolute;
            right: -8px;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: @commonBg;
            &.success {
              background-color: @commonTrue;
              font-size: 10px;
            }
            &.cross {
              background-color: @commonFalse;
              font-size: 8px;
            }
            &.isAlreadyFixed {
              width: auto;
              border-radius: 10px;
              padding: 1px 5px;
              font-size: 12px;
              right: -24px;
              color: @white;
            }
          }
        }
        li.item:not(:last-of-type) {
          margin-right: 28px;
        }
      }
    }
    .scroll-wrapper::-webkit-scrollbar {
      display: none !important;
    }
  }
</style>
