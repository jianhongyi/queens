<!-- 判断题组件 -->
<template>
  <div :style="wrapperStyle" class="ques-select-wrapper">
    <div :style="mainAreaStyle" :class="['main-area', mainAreaClass]">
      <div ref="scrollCard" class="scrollCard">
        <div class="scroll-card-inner">
          <queens-description :desc-content="quesData.questionDescription" v-bind="$attrs">
            <slot slot="descIcon" name="descIcon" />
          </queens-description>
          <template v-if="isZj">
            <play-audio
              v-if="quesData.additionalAudio && quesData.additionalAudio.url"
              :audio-data="quesData.additionalAudio"
              :template-type="quesData.templateType"
            />
            <original v-if="quesData.additionalAudio && quesData.additionalAudio.listeningText" :content="quesData.additionalAudio.listeningText" />
          </template>
          <queens-stem ref="stem" :body="quesData.body" :structure="quesData.structure" :template-type="quesData.templateType" :index="index" v-bind="$attrs" />
          <queens-options
            v-if="!isZj"
            ref="quesOptions"
            :key="quesData.questionId"
            :options="quesData.options || []"
            :answers="quesData.answers || []"
            :user-answer="quesData.userAnswer || {}"
            :template-type="quesData.templateType || ''"
            v-bind="$attrs"
            v-on="$listeners"
          />
          <queens-answer
            v-if="isZj"
            ref="answer"
            :user-answer="quesData.userAnswer || {}"
            :answers="quesData.answers"
            :template-type="quesData.templateType"
          />
        </div>
        <slot name="footer" />
        <div class="pad" />
      </div>
    </div>
    <template v-if="showAnswer">
      <queens-answer
        :options="quesData.options || []"
        :answers="quesData.answers || []"
        :explain="quesData.explain"
        :template-type="quesData.templateType || ''"
        v-bind="$attrs"
        v-on="$listeners"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'QueensJudge',
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
    // 题目序列
    index: {
      type: [String, Number],
      default: ''
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
  computed: {
    isZj() {
      return this.quesData.templateType.toLowerCase().indexOf('zj') > -1
    }
  },
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
          this.$refs.quesOptions?.$refs?.targetOption?.checkAnswer((userCheckedAnswers, trueAnswers, answerResult) => {
            const returnObj = {
              userCheckedAnswers,
              trueAnswers,
              answerResult
            }
            resolve(returnObj)
          })
        } catch (e) {
          reject(e)
        }
      })
    },
    // 获取audio
    getAudioEle() {
      return this.$refs.stem?.$refs?.playAudio?.$refs?.audio
    },
    // reset
    reset() {
      this.$nextTick(() => {
        this.$refs.quesOptions?.$refs?.targetOption?.reset()
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .ques-select-wrapper {
    .main-area {
        background-color: #fff;
        border-radius: 14px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
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
    .ques-original {
      margin: 0 0 16px;
    }
    .queens-play-audio {
      margin-bottom: 16px;
    }
  }
</style>
