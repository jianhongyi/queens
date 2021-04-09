<template>
  <demo-section>
    <demo-block title="">
      <queens-select v-if="quesData.questionId" ref="quesSelect" :ques-data="quesData" :preview="preview" :show-answer="showAnswer">
        <div slot="footer" :class="quesData.page ? 'footer-area' : ''">
          <div v-if="quesData.page" class="resource">
            <div class="resource-text">
              知识点来源
            </div>
            <div class="resource-content">
              fdsafdsaf
            </div>
          </div>
        </div>
      </queens-select>
      <div class="botton-wrapper">
        <queens-button type="primary" round size="large" :disabled="isButtonDisabled" @click="doSubmit">
          {{ submitBottonText }}
        </queens-button>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
const quesData = {
  'questionId': 'safasdoss',
  'questionDocId': 'safasdoss',
  'questionDescription': 'Listen and match. 听力连线Listen and match. 听力连线Listen and match. 听力连线',
  'body': {
    content: `<p style="text-align:center;"><img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A82uid405b939df1f0487ba216c27a092c7c5c.PNG" width="240"></p><p style="text-align:left;"><span style="color:#0E1726;font-family:&quot;font-size:14px;background-color:#F4F7FD;">`,
    type: 'RICHTEXT',
    audioInfo: {
      'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3',
      'duration': 112,
      'unit': 'ms'
    }
  },
  'structure': '0',
  'templateType': 'textSelect',
  'page': 'xxxxxxxxxxxxxxx',
  'options': [
    {
      'content': 'tails tai lstai lstail stails tails tail stail stails tai lst ail stai lstail stailst ailst ailst ai lsta ils',
      'type': 'RICHTEXT'
    },
    {
      'content': 'legs',
      'type': 'RICHTEXT'
    },
    {
      'content': 'ears',
      'type': 'RICHTEXT'
    },
    {
      'content': 'hands',
      'type': 'RICHTEXT'
    }
  ],
  'answers': [
    {
      content: 'legs'
    }
  ],
  'userAnswer': null,
  'explain': {
    'content': '',
    'type': ''
  }
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
    doSubmit() {
      this.preview = true
      const p = this.$refs.quesSelect.checkAnswer()
      p.then(data => {
        const { userCheckedAnswers, trueAnswers, answerResult } = data
        console.log(userCheckedAnswers, trueAnswers, answerResult)
        if (!answerResult) {
          this.showAnswer = !answerResult
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
      })
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
    z-index: 3;
  }
  .resource {
      padding-top: 30px;
      padding-bottom: 16px;
      display: flex;
      align-items: center;
      &-text {
        height: 20px;
        line-height: 20px;
        background-color: rgba(255, 202, 11, 0.1);
        border: 1px solid #FFCA0B;
        font-size: 14px;
        border-radius: 2px;
        padding: 0 10px;
        color: #F7B500;
        font-weight: bold;
        margin-right: 10px;
      }
      &-content {
        font-size: 16px;
        line-height:20px;
        font-weight: 600;
        color: #7A8189;
      }
    }
  /deep/ .popup-wrapper {
    position: fixed;
  }
</style>
