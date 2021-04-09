<template>
  <demo-section>
    <demo-block title="">
      <queens-oral ref="quesSelect" :ques-data="quesData" :index="1" />
    </demo-block>
  </demo-section>
</template>

<script>
const quesData = {
  'questionId': 'safasdoss',
  'questionDocId': 'safasdoss',
  'questionDescription': 'Listen and match. 听力连线Listen and match. 听力连线Listen and match. 听力连线',
  'guidingLanguage': '现在， 你有1分钟的时间浏览每个问题，在开始录音提示音后，请用英语在15秒钟以内回答问题。',
  'direction': {
    'content': '现在， 你有1分钟的时间浏览每个问题，在开始录音提示音后，请用英语在15秒钟以内回答问题',
    'type': '',
    'resUrl': ''
  },
  'additionalAudio': {
    'url': 'http://ai-content-bank.oss-cn-shanghai.aliyuncs.com/listening/public/paper/4da43ae45e114751a237/8f5f9f485d3947afafe19a092daf9ad7.mp3',
    'duration': '35060',
    'unit': 'ms',
    'listeningText': 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra'
  },
  'body': {
    content: `<figure class="image"><img src="http://ai-content-bank.oss-cn-shanghai.aliyuncs.com/image/public/qaf7f2557e4f84df19165cde2008c52e4.png"></figure>`,
    type: 'RICHTEXT',
    audioInfo: {
      'url': 'http://ai-content-bank.oss-cn-shanghai.aliyuncs.com/listening/public/paper/bbcb3fd90dd5475d9c3d/24effca71f1f43a582b08d80d3fac925.mp3',
      'duration': 4020,
      'unit': 'ms'
    }
  },
  'structure': '0',
  'templateType': 'zJAnswerOral',
  'options': [
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
  'answers': ["The oranges are on the table.@@They are on the table.@@They're on the table.@@On the table."],
  'userAnswer': {
    answers: ['http://ai-content-bank.oss-cn-shanghai.aliyuncs.com/listening/public/paper/bbcb3fd90dd5475d9c3d/24effca71f1f43a582b08d80d3fac925.mp3'],
    score: '80'
  },
  'explain': {
    'content': '',
    'type': ''
  }
}
export default {

  data() {
    return {
      quesData: {}
    }
  },
  watch: {
  },
  //  挂载完成 访问DOM元素
  mounted() {
    this.getQuesData()
  },
  //  方法集合
  methods: {
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
    z-index: 1;
  }
</style>
