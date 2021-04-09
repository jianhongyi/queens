<template>
  <demo-section>
    <demo-block title="">
      <queens-line v-if="quesData.questionId" ref="quesLine" :ques-data="quesData" :preview="preview" :show-answer="showAnswer" />
      <div class="botton-wrapper">
        <div class="botton-inner">
          <queens-button type="primary" round size="large" :disabled="isButtonDisabled" @click="reset">
            重置
          </queens-button>
          <queens-button type="primary" round size="large" :disabled="isButtonDisabled" @click="doSubmit1">
            {{ submitBottonText }}
          </queens-button>
        </div>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
const quesData = {
  'questionId': 'KB1L1U12ST_0000728_1',
  'questionDocId': 'KB1L1U12ST_0000728',
  'questionDescription': 'look and choose',
  'body': {
    'content': '<span style="color:#292929;font-family:charter, Georgia, Cambria, &quot;font-size:21px;background-color:#FFFFFF;">The trick is to take on tasks you truly want to do.</span>',
    'type': '',
    'audioInfo': null
  },
  'structure': '7',
  'templateType': 'imgLine',
  'options': [
    {
      'content': 'sfdsfds',

      'type': 'text',
      'audioInfo': null,
      'contentIdx': '1',
      'groupIdx': 1,
      'feExtData': '127,119.5'
    },
    {
      'content': '<img src="http://test.enrt.diplotalk.unischool.cn/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_3uid143cdf4e98fa4751be4ca617f4fd5332.jpg" width="240" title="KB_2_2_篇章_图片_3.jpg" alt="KB_2_2_篇章_图片_3.jpg" />',

      'type': 'img',
      'audioInfo': null,
      'contentIdx': '2',
      'groupIdx': 1,
      'feExtData': '127,999.5'
    },
    {
      'content': '我是个坏人，我是个坏人，我是个坏人，我是个护爱人，我是个坏人，我是个坏人，我是个坏人，我是给，是个坏人，我是个护爱人，我是个坏人，我是个坏人，我',

      'type': 'text',
      'audioInfo': null,
      'contentIdx': '11',
      'groupIdx': 2,
      'feExtData': '205,119.5'
    },
    {
      'content': '我是个坏人，我是个坏人，我是个坏人，我是个护爱人，我是个坏人，我是个坏人，我是个坏人，我是给，是个坏人，我是个护爱人，我是个坏人，我是个坏人，我我是个坏人，我是个坏人，我是个坏人，我是个护爱人，我是个坏人，我是个坏人，我是个坏人，我是给，是个坏人，我是个护爱人，我是个坏人，我是个坏人，我我是个坏人，我是个坏人，我是个坏人，我是个护爱人，我是个坏人，我是个坏人，我是个坏人，我是给，是个坏人，我是个护爱人，我是个坏人，我是个坏人，我我是个坏人，我是个坏人，我是个坏人，我是个护爱人，我是个坏人，我是个坏人，我是个坏人，我是给，是个坏人，我是个护爱人，我是个坏人，我是个坏人，我我是个坏人，我是个坏人，我是个坏人，我是个护爱人，我是个坏人，我是个坏人，我是个坏人，我是给，是个坏人，我是个护爱人，我是个坏人，我是个坏人，我我是个坏人，我是个坏人，我是个坏人，我是个护爱人，我是个坏人，我是个坏人，我是个坏人，我是给，是个坏人，我是个护爱人，我是个坏人，我是个坏人，我我是个坏人，我是个坏人，我是个坏人，我是个护爱人，我是个坏人，我是个坏人，我是个坏人，我是给，是个坏人，我是个护爱人，我是个坏人，我是个坏人，我',

      'type': 'text',
      'audioInfo': null,
      'contentIdx': '22',
      'groupIdx': 2,
      'feExtData': '205,999.5'
    }
  ],
  'answers': [
    ['1', '11'],
    ['2', '22']
  ],
  'userAnswer': {
    answers: [
      ['1', '22'],
      ['2', '11']
    ]
  },
  'explain': null,
  'page': '教材2页'
}
export default {

  data() {
    return {
      quesData: {},
      submitBottonText: '提交',
      preview: false,
      showAnswer: false
    }
  },
  computed: {
    isButtonDisabled() {
      return this.quesData.userAnswer && this.quesData.userAnswer.answers && this.quesData.userAnswer.answers.length === 0
    }
  },
  watch: {
  },
  //  挂载完成 访问DOM元素
  mounted() {
    this.getQuesData()
  },
  //  组件销毁之前调用
  beforeDestroy() {

  },
  //  方法集合
  methods: {
    // 点击提交按钮
    doSubmit1() {
      this.preview = true
      const p = this.$refs.quesLine.checkAnswer()
      p.then(data => {
        const { userCheckedAnswers, trueAnswers, answerResult } = data
        console.log(userCheckedAnswers, trueAnswers, answerResult)
        if (!answerResult) {
          this.showAnswer = true
          this.submitBottonText = '下一题'
        } else {
          setTimeout(() => {
            this.getQuesData()
          }, 2000)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    // 获取题目数据
    getQuesData() {
      setTimeout(() => {
        this.quesData = quesData
      }, 1000)
    },
    reset() {
      this.$refs.quesLine.reset()
    }
  }

}
</script>
<style lang="less" scoped>
  .botton-wrapper {
    box-sizing: border-box;
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px 16px 16px;
    z-index: 99;
    .botton-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  /deep/ .popup-wrapper {
    position: fixed;
  }
</style>
