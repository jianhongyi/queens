<template>
  <demo-section>
    <demo-block title="基础用法">
      <queens-fill
        ref="quesFill"
        style="padding: 16px;"
        :ques-data="quesData"
        :preview="preview"
        :show-answer="showAnswer"
      />

      <div class="botton-wrapper">
        <queens-button
          type="primary"
          block
          round
          size="large"
          :disabled="isButtonDisabled"
          @click="doSubmit"
        >
          {{ submitBottonText }}
        </queens-button>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      isButtonDisabled: true,
      submitBottonText: '提交',
      preview: false,
      showAnswer: false,
      quesData: {
        config: {
          optionsRandomSort: false
        },
        questionId: 'safasdoss',
        questionDocId: 'safasdoss',
        questionDescription: 'Count.Write the numb.',
        body: {
          // content: `<p style="text-align:center;"><img title="1" src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A82uid405b939df1f0487ba216c27a092c7c5c.PNG" width="240"></p><p style="text-align:left;"><span style="color:#0E1726;font-family:&quot;font-size:14px;background-color:#F4F7FD;">
          //       In Class sdfjlkjsdlfjl system] System: iPhone, iOS 10.3.1
          // vconsole.min.js:system] System: iPhone, iOS 10.3.1
          // vconsole.min.js:10 [system] Protocol: HTTPsystem] System: iPhone, iOS 10.3.1
          // vconsole.min.js:1system] System: iPhone, iOS 10.3.1
          // vconsole.min.js:10 [system] Protocol: HTTPsystem] System: iPhone, iOS 10.3.1
          // vconsole.min.js:10 [system] Protocol: HTTP0 [system] Protocol: HTTPsystem] System: iPhone, iOS 10.3.1
          // vconsole.min.js:10 [system] Protocol: HTTP10 [system] Protocol: HTTP 3, three students like lemons, and nine students like pineapples.So</span></p>
          //       hkj<img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong"><img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong">jkljl`,
          'content': `<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_8_%E8%B7%9F%E8%AF%BB%E5%8F%A5%E5%AD%90_%E5%9B%BE%E7%89%87_39uid9d955bac4ebe47d2993d754095547948f538fb4ec42a468db814dcf0151f3b1auid701334b75bcd4dbc8b3500e752b2a028.png" width="192" height="144" title="2" align="" alt="2" /><img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/dad%20saduidb996d435f9bb4f2d9b47bb15bab41760uidaac5418b71ec49fb85b5063161ea0b12.jpg" width="192" title="2" alt="2" height="144" align="" /><img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_1_6_%E5%8F%A5%E5%AD%90_%E5%9B%BE%E7%89%87_20uid2baaadf5db1b45388ed236609d70795d0a3181f967dc4d47ba2e6b62cc82d264uid84626df1a0db45389fa4ad1e72387208.jpg" width="192" title="2" alt="2" height="144" align="left" /><img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/test6uid35f42e8ed42c468290a808953042a814.jpg" width="240" /><img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />&nbsp;<img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />`,
          // 'content': `<img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong"><img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_8_%E8%B7%9F%E8%AF%BB%E5%8F%A5%E5%AD%90_%E5%9B%BE%E7%89%87_38uid5e0971cf3b49415c98a4863555d5ecb45abdf0eb272946c0bc2171c00f1245fbuid69a3f553bff247e1a6aebf2c6395b4dc.png" width="2667" title="1" alt="1" height="2000" align="" />`,
          // 'content': `<p><img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_1_6_%E5%8F%A5%E5%AD%90_%E5%9B%BE%E7%89%87_3uidf3aa203c00144e6aaacbef504f2a0636e780fbbcf05445dfb0bb8f0a9da3db93uid7469ea0b7b724bb7836da468b4be16d8.jpg" width="240" /></p><p><img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" /></p>`,
          type: 'RICHTEXT',
          audioInfo: {
            url:
              'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3',
            duration: 112,
            unit: 'ms'
          }
        },
        structure: '2',
        templateType: 'letterFill',
        answers: [
          {
            content: '1',
            answerImg: ''
          },
          {
            content: '2',
            answerImg: ''
          }
        ],
        explain: {
          content: '',
          type: ''
        }
      }
    }
  },
  watch: {
    'quesData.userAnswer': {
      handler(val) {
        if (
          val && val.answers && val.answers.length > 0 && val.answers.length === this.quesData.answers.length
        ) {
          // 用户答案不为空
          this.isButtonDisabled = val.answers.some((item, index) => item === '')
        } else {
          this.isButtonDisabled = true
        }
      },
      deep: true
    }
  },
  //  方法集合
  methods: {
    // 点击提交按钮
    doSubmit() {
      const p = this.$refs.quesFill.checkAnswer()
      p.then((data) => {
        const { userCheckedAnswers, trueAnswers, answerResult } = data
        console.log(userCheckedAnswers, trueAnswers, answerResult)
        this.preview = true
        this.showAnswer = true
        if (!answerResult) {
          this.submitBottonText = '下一题'
        } else {
          console.log('调用下一题')
        }
      }).catch((e) => {
        console.log(e)
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
    z-index: 1;
  }
</style>
