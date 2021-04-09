<!-- 填空题组件 -->
<template>
  <div :style="wrapperStyle" class="ques-fill-wrapper">
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
          <div v-if="errCode" class="err-data">
            {{ errCode }}
          </div>
          <queens-stem
            v-else
            ref="stem"
            structure="2"
            :reg="reg"
            :body="quesData.body"
            :preview="preview"
            :answers="quesData.userAnswer"
            :correct-answers="quesData.answers"
            :template-type="quesData.templateType"
            :index="index"
            :options-random-sort="quesData.config.optionsRandomSort"
            v-bind="$attrs"
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
        ref="answer"
        :body="quesData.body"
        :answers="quesData.answers"
        :explain="quesData.explain"
        :template-type="quesData.templateType"
        v-bind="$attrs"
        v-on="$listeners"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'QueensFill',
  props: {
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
    preview: {
      type: Boolean,
      default: false
    },
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
    },
    reg: {
      type: RegExp,
      default: () => {
        return new RegExp(/<img [^>]* class=\"ke-content-kong\"(.*?)>/gi)
      }
    }
  },
  data() {
    return {
      slide: '',
      errCode: ''
    }
  },
  computed: {
    isZj() {
      return this.quesData.templateType.toLowerCase().indexOf('zj') > -1
    }
  },
  created() {
    if (!this.isZj) {
      this.checkQuesData()
    }
    if (!this.quesData?.userAnswer) {
      this.$set(this.quesData, 'userAnswer', { answers: [] })
    }
    if (this.quesData?.answers && !this.isZj) {
      this.correctAnswersFn()
    }
  },
  beforeDestroy() {
    this.slide = null
    this.errCode = null
  },
  //  方法集合
  methods: {
    // 检查数据是否合法 判断挖空和答案个数是否匹配
    checkQuesData() {
      const answersLen = this.quesData.answers.length
      const space = this.quesData.body.content.match(this.reg)
      const spaceLen = space ? space.length : '0'
      if (answersLen !== spaceLen) {
        this.errCode = '空格数量和答案个数不匹配'
      } else {
        this.errCode = ''
      }
    },
    // 去左右空格
    trim(str) {
      return str.replace(/(^\s*)|(\s*$)/g, '')
    },
    // 正确答案处理去除前后空格
    correctAnswersFn() {
      const arr = this.quesData.answers.map((i) => {
        const item = i.content.split('|')
        const contentArr = item.map((j) => {
          return this.trim(j)
        })
        i.content = contentArr.join('|')
        return i
      })
      this.$set(this.quesData, 'answers', arr)
    },
    // 学生答案去除前后空格
    userAnswerFn() {
      const arr = this.quesData.userAnswer.answers.map((item) => {
        return this.trim(item)
      })
      this.$set(this.quesData.userAnswer, 'answers', arr)
    },
    // 判断答案正误
    answerResult() {
      this.userAnswerFn()
      const optionsRandomSort = this.quesData.config.optionsRandomSort // false是无序 true是正序
      const answersArr = JSON.parse(JSON.stringify(this.quesData.answers))
      const userAnswerArr = JSON.parse(JSON.stringify(this.quesData.userAnswer.answers))
      for (let i = 0; i < answersArr.length; i++) {
        const answerOf = answersArr[i].content.split('|')
        if (optionsRandomSort) {
          if (!answerOf.includes(userAnswerArr[i])) {
            return false
          }
        } else {
          if (userAnswerArr.includes(answersArr[i].content)) {
            answersArr.splice(i--, 1)
          } else {
            return false
          }
        }
      }
      return true
    },
    checkAnswer() {
      return new Promise((resolve, reject) => {
        try {
          const returnObj = {
            userCheckedAnswers: this.quesData.userAnswer,
            trueAnswers: this.quesData.answers,
            answerResult: this.answerResult()
          }
          resolve(returnObj)
        } catch (e) {
          reject(e)
        }
      })
    },
    // 下一题
    nextAnswer() {
      if (this.useAnimation) {
        this.slide = typeof this.useAnimation === 'string' ? this.useAnimation : 'queens-slide-left'
      }
      return this.checkAnswer()
    },
    // 上一题
    preAnswer() {
      if (this.useAnimation) {
        this.slide = typeof this.useAnimation === 'string' ? this.useAnimation : 'queens-slide-right'
        return this.checkAnswer()
      }
    },
    // 获取audio
    getAudioEle() {
      return this.$refs.stem?.$refs?.playAudio?.$refs?.audio
    }
  }
}
</script>
<style lang='less' scoped>
  @import '../style/var.less';
  .ques-fill-wrapper {
    .main-area {
      background-color: @white;
      border-radius: 14px 8px 8px 8px;
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
    .err-data {
      width: 100%;
      line-height: 150px;
      text-align: center;
      color: red;
    }
    .ques-original {
      margin: 0 0 16px;
    }
    .queens-play-audio {
      margin-bottom: 16px;
    }
  }
</style>
