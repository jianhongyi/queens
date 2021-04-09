<!-- 连线题题组件 -->
<template>
  <div :style="wrapperStyle" class="ques-sortor-wrapper">
    <div :style="mainAreaStyle" :class="['main-area', mainAreaClass]">
      <div ref="scrollCard" class="scrollCard">
        <div class="scroll-card-inner">
          <queens-description :desc-content="quesData.questionDescription" v-bind="$attrs">
            <slot slot="descIcon" name="descIcon" />
          </queens-description>
          <queens-stem ref="stem" :body="quesData.body || {}" :structure="quesData.structure" :template-type="quesData.templateType" v-bind="$attrs" />
          <queens-sortor ref="quesSortor" :key="quesData.questionId" :options="quesData.options || []" :answers="quesData.answers || []" :body="quesData.body" :user-answer="quesData.userAnswer || {}" :template-type="quesData.templateType || ''" v-bind="$attrs" />
        </div>
        <slot name="footer" />
        <div class="pad" />
      </div>
    </div>
    <template v-if="showAnswer">
      <queens-answer
        ref="answer"
        :options="quesData.options || []"
        :answers="quesData.answers || []"
        :explain="quesData.explain"
        :template-type="quesData.templateType || ''"
        :body="quesData.body || {}"
        v-bind="$attrs"
        v-on="$listeners"
      />
    </template>
  </div>
</template>

<script>
import questionMixin from '../mixins/questionMixin'
export default {
  name: 'QueensSort',
  mixins: [questionMixin],
  props: {
    // 选择题数据
    quesData: {
      type: Object,
      default: () => ({}),
      required: true
    },
    // 外层容器样式
    wrapperStyle: {
      type: Object,
      default: () => ({}),
      required: false
    },
    // 主体区域样式
    mainAreaStyle: {
      type: Object,
      default: () => ({}),
      required: false
    },
    // 主体区域输入类
    mainAreaClass: {
      type: String,
      default: '',
      required: false
    },
    // 是否显示答案
    showAnswer: {
      type: Boolean,
      default: false
    },
    // 切换题目时是否动画
    useAnimation: {
      type: [Boolean, String],
      default: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {
    quesData: {
      handler(newV, oldV) {
        if (!(newV && newV.userAnswer)) {
          this.$set(this.quesData, 'userAnswer', {})
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    checkAnswer() {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(() => {
            this.$refs.quesSortor?.$refs.targetSortor?.checkAnswer((userCheckedAnswers, trueAnswers, answerResult) => {
              const returnObj = {
                userCheckedAnswers,
                trueAnswers,
                answerResult
              }
              console.log(returnObj)
              resolve(returnObj)
            })
          })
        } catch (e) {
          reject(e)
        }
      })
    },
    reset() {
      this.$refs.quesSortor?.$refs.targetSortor?.reset()
    }
  }

}
</script>
<style lang='less' scoped>
  @import '../style/var.less';
  .ques-sortor-wrapper {
    padding-bottom: 102px;
    .main-area {
        border-radius: 14px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
        background-color: @white;
        .scrollCard{ // iphone6 scroll和radius一起使用时，swiper左右滑动，第二页图片渲染不出来，页面的dom已经真实存在。
          padding: 0 14px;
          height: 100%;
          overflow: scroll;
          box-sizing: border-box;
          .pad{ // 垫高页面。iphone6 padding-bottom 和scroll 一起使用时padding-bottom失效
            height: 46px;
          }
          .scroll-card-inner{
            min-height: 85%;
          }
        }
        .scrollCard::-webkit-scrollbar {
          display: none !important;
        }
    }
  }
</style>
