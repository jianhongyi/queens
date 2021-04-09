<template>
  <demo-section>
    <demo-block title="文本选项" class="demo">
      <queens-options ref="quesOptions1" :options="options1" :answers="answers1" :user-answer="userAnswer" :preview="preview1" template-type="textSelect" />
      <div style="text-align: center;">
        <queens-button type="primary" round size="large" @click="doSubmit1">
          提交
        </queens-button>
      </div>
    </demo-block>
    <demo-block title="图片选项" class="demo">
      <queens-options ref="quesOptions2" :options="options2" :answers="answers2" :preview="preview2" template-type="imgSelect" />
      <div style="text-align: center;">
        <queens-button type="primary" round size="large" @click="doSubmit2">
          提交
        </queens-button>
      </div>
    </demo-block>
    <demo-block title="音频选项" class="demo">
      <queens-options ref="quesOptions3" :options="options3" :answers="answers3" :preview="preview3" template-type="audioSelect" />
      <div style="text-align: center;">
        <queens-button type="primary" round size="large" @click="doSubmit3">
          提交
        </queens-button>
      </div>
    </demo-block>
    <!-- <demo-block title="多项选择" class="demo">
      <queens-options ref="quesOptions4" :options="options4" :answers="answers4" :preview="preview4" template-type="textSelect" />
      <div style="text-align: center;">
        <queens-button type="primary" round size="large" @click="doSubmit4">
          提交
        </queens-button>
      </div>
    </demo-block> -->
    <demo-block title="YN判断" class="demo">
      <queens-options ref="quesOptions5" :options="options5" :answers="answers5" :preview="preview5" template-type="YNJudge" />
      <div style="text-align: center;">
        <queens-button type="primary" round size="large" @click="doSubmit5">
          提交
        </queens-button>
      </div>
    </demo-block>
    <demo-block title="TF判断" class="demo">
      <queens-options ref="quesOptions6" :options="options6" :answers="answers6" :preview="preview6" template-type="TFJudge" />
      <div style="text-align: center;">
        <queens-button type="primary" round size="large" @click="doSubmit6">
          提交
        </queens-button>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      options1: [
        {
          'content': '<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E9%80%89%E9%A1%B94uidea2000325ee448f7b58f72addde5e416uidcb1b2465761a428a9ab31f1d7a6c0f98.jfif\" width=\"240\" /><span style=\"font-family:Arial, PingFang-SC, Avenir, Helvetica, sans-serif;color:rgba(0, 0, 0, 0.85);font-size:14px;background-color:#FFFFFF;\">mouse，老鼠；bird，鸟；duck，鸭子；frog，青蛙。</span><br /><span style=\"font-family:Arial, PingFang-SC, Avenir, Helvetica, sans-serif;color:rgba(0, 0, 0, 0.85);font-size:14px;background-color:#FFFFFF;\">Monty是一只老鼠，因此选择mouse。</span>',
          'type': 'RICHTEXT'
        },
        {
          'content': 'legs',
          'type': 'RICHTEXT'
        },
        {
          'content': 'tailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstails',
          'type': 'RICHTEXT'
        },
        {
          'content': 'hands',
          'type': 'RICHTEXT'
        }
      ],
      options2: [
        {
          'content': '<img src="https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/closeuidd43c9ea88f94440ca2e33ca1df69120b.jpg" width="240" />',
          'type': '',
          'audioInfo': null
        }, {
          'content': '<img src="https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/open%20the%20bookuid0d86c899270a467e9bd9eee8cd668bc1ss.jpg" width="240" />',
          'type': '',
          'audioInfo': null
        }, {
          'content': '<img src="https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/LEVEL-1-U1-close%20the%20door(1)uid7554f4660464404e918da2b9a2c5e9a0.jpg" width="240" />',
          'type': '',
          'audioInfo': null
        }, {
          'content': '<img src="https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/LEVEL-1-U1-open%20the%20door(1)uidc919e4e479eb4a2482d8711e4d753ff3.jpg" width="240" />',
          'type': '',
          'audioInfo': null
        }
      ],
      options3: [{
        'content': '&nbsp;',
        'type': '',
        'audioInfo': {
          'duration': 119280,
          'unit': 'ms',
          'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3'
        }
      }, {
        'content': '&nbsp;&nbsp;',
        'type': '',
        'audioInfo': {
          'duration': 1149,
          'unit': 'ms',
          'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3'
        }
      }, {
        'content': '&nbsp; &nbsp;',
        'type': '',
        'audioInfo': {
          'duration': 1149,
          'unit': 'ms',
          'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3'
        }
      }, {
        'content': '&nbsp; &nbsp;&nbsp;',
        'type': '',
        'audioInfo': {
          'duration': 1149,
          'unit': 'ms',
          'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3'
        }
      }],
      options4: [
        {
          'content': 'tailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstails',
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
      options5: [
        {
          'content': 'Yes',
          'type': ''
        },
        {
          'content': 'No',
          'type': 'RICHTEXT'
        }
      ],
      options6: [
        {
          'content': 'True',
          'type': ''
        },
        {
          'content': 'False',
          'type': 'RICHTEXT'
        }
      ],
      userAnswer: {
        answers: ['hands']
      },
      answers1: [
        {
          content: 'legs'
        }
      ],
      answers2: [
        {
          content: '<img src="https://resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/closeuidd43c9ea88f94440ca2e33ca1df69120b.jpg" width="240" />'
        }
      ],
      answers3: [
        {
          content: '&nbsp;'
        }
      ],
      answers4: [
        {
          content: 'legs'
        },
        {
          content: 'ears'
        }
      ],
      answers5: [
        {
          content: 'Yes'
        }
      ],
      answers6: [
        {
          content: 'True'
        }
      ],
      preview1: false,
      preview2: false,
      preview3: false,
      preview4: false,
      preview5: false,
      preview6: false
    }
  },
  methods: {
    doSubmit1() {
      this.preview1 = true
      this.$refs.quesOptions1?.$refs?.targetOption?.checkAnswer()
    },
    doSubmit2() {
      this.preview2 = true
      this.$refs.quesOptions2?.$refs?.targetOption?.checkAnswer()
    },
    doSubmit3() {
      this.preview3 = true
      this.$refs.quesOptions3?.$refs?.targetOption?.checkAnswer()
    },
    doSubmit4() {
      this.preview4 = true
      this.$refs.quesOptions4?.$refs?.targetOption?.checkAnswer()
    },
    doSubmit5() {
      this.preview5 = true
      this.$refs.quesOptions5?.$refs?.targetOption?.checkAnswer()
    },
    doSubmit6() {
      this.preview6 = true
      this.$refs.quesOptions6?.$refs?.targetOption?.checkAnswer()
    }
  }
}
</script>
<style lang="less" scoped>
  .demo {
    padding: 0 16px;
  }
</style>
