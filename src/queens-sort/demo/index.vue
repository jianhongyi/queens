<template>
  <demo-section>
    <demo-block title="">
      <queens-sort v-if="quesData.questionId" ref="quesSort" :ques-data="quesData" :preview="preview" :show-answer="showAnswer">
        <div slot="footer" :class="quesData.page ? 'footer-area' : ''">
          <!-- <div v-if="quesData.page" class="resource">
            <div class="resource-text">
              知识点来源: {{ quesData.page }}
            </div>
          </div> -->
        </div>
      </queens-sort>
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
  'questionId': '5fed319167d43a000153cc14',
  'questionDocId': 'KB2L2U2ST_0000124',
  'questionDescription': 'Read and choose in order. 组词成句。',
  'body': {
    'content': '<img src="https://english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" /><img src="https://english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" /><img src="https://english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" /><img src="https://english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />?',
    'type': ''
  },
  'structure': '6',
  'templateType': 'textSort',
  'options': [{
    'content': 'There are',
    'contentIdx': '1'
  }, {
    'content': '16 books',
    'contentIdx': '2'
  }, {
    'content': 'the bookcase',
    'contentIdx': '4'
  }, {
    'content': 'in',
    'contentIdx': '3'
  }],
  'config': {
    'optionsDisorderIds': [0, 1, 3, 2]
  },
  'answers': ['1', '2', '3', '4'],
  'explain': {
    'content': ''
  },
  'page': '教材13页'
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
      const p = this.$refs.quesSort.checkAnswer()
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
      this.$refs.quesSort.reset()
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
</style>
