<!-- 题型引擎 -->
<template>
  <component :is="witchShow" ref="quesEngine" :key="quesData.questionId" :template-type="quesData.templateType" :ques-data="quesData" v-bind="$attrs" v-on="$listeners">
    <slot slot="footer" name="footer" />
  </component>
</template>

<script>
import { WITCHQUESTIONCOMSHOW } from '../utils/constant'
export default {
  name: 'QueensQuestion',
  components: {
    queensSelect: () => import('../queens-select'),
    queensFill: () => import('../queens-fill'),
    queensJudge: () => import('../queens-judge'),
    queensOral: () => import('../queens-oral'), // 口语
    queensSort: () => import('../queens-sort'),
    queensLine: () => import('../queens-line'),
    queensComposite: () => import('../queens-composite') // 复合题
  },
  props: {
    // 选择题数据
    quesData: {
      type: Object,
      default: () => ({}),
      required: true
    },
    // 切换题目时是否动画
    useAnimation: {
      type: [Boolean, String],
      default: true
    }
  },

  data() {
    return {
      // 切换题型动画
      slide: ''
    }
  },
  //  监听属性
  computed: {
    // 具体展示何种题型组件
    witchShow() {
      return WITCHQUESTIONCOMSHOW[this.quesData?.structure]
    }
  },
  //  创建完成 访问当前this实例
  created() {

  },
  //  组件销毁之前调用
  beforeDestroy() {
    this.slide = null
  },
  //  方法集合
  methods: {
    // 下一题
    nextAnswer() {
      if (this.useAnimation) {
        this.slide = typeof this.useAnimation === 'string' ? this.useAnimation : 'queens-slide-left'
      }
      console.log(this.slide)
      return this.$refs.quesEngine?.checkAnswer()
    },
    // 上一题
    preAnswer() {
      if (this.useAnimation) {
        this.slide = typeof this.useAnimation === 'string' ? this.useAnimation : 'queens-slide-right'
      }
      console.log(this.slide)
      return this.$refs.quesEngine?.checkAnswer()
    }
  }

}
</script>
<style lang='scss' scoped>
.no-data {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
}
</style>
