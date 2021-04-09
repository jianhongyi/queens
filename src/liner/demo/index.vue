<template>
  <demo-section>
    <demo-block title="连线题" class="example">
      <queens-liner :options="options1" :preview="preview" :answers="answers" :template-type="templateType" />
      <queens-button type="primary" round size="large" @click="doSubmit1">
        提交
      </queens-button>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      options1: [
        {
          'content': 'aaa',

          'type': 'text',
          'audioInfo': {
            'url': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_2uidbbefa146a1394961a27842b90e9730e5.jpg" width="240" title="KB_2_2_篇章_图片_2.jpg" alt="KB_2_2_篇章_图片_2.jpg" />',
            'duration': 1906,
            'unit': 'ms'
          },
          'contentIdx': '1',
          'groupIdx': 1
        },
        {
          'content': '<span style=\"color:#292929;font-family:charter, Georgia, Cambria, &quot;font-size:21px;background-color:#FFFFFF;\">&nbsp;is to take, 我是个坏人，我是个坏人，我是个坏人，我是个护爱人，我是个坏人&nbsp;</span>',

          'type': 'text',
          'audioInfo': null,
          'contentIdx': '2',
          'groupIdx': 2
        },
        {
          'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_2uidbbefa146a1394961a27842b90e9730e5.jpg" width="240" title="KB_2_2_篇章_图片_2.jpg" alt="KB_2_2_篇章_图片_2.jpg" />',

          'type': 'audio',
          'audioInfo': {
            'url': 'http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E4%BE%8B%E5%8F%A5_%E9%9F%B3%E9%A2%91_Alex_2uid748581ebf2f44b7799de552f7ac07f29.mp3?auth_key=1607076827687-0-0-34c6a2e180e07ded85cb4c0372e37a9f',
            'duration': 3918,
            'unit': 'ms'
          },
          'contentIdx': '3',
          'groupIdx': 1
        },
        {
          'content': '<span style=\"color:#292929;font-family:charter, Georgia, Cambria, &quot;font-size:21px;background-color:#FFFFFF;\">&nbsp;is to take&nbsp;aadfdas contentIdx fda fdaffdaf canculation</span>',

          'type': 'text',
          'audioInfo': null,
          'contentIdx': '1',
          'groupIdx': 2
        },
        {
          'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_2uidbbefa146a1394961a27842b90e9730e5.jpg" width="240" title="KB_2_2_篇章_图片_3.jpg" alt="KB_2_2_篇章_图片_3.jpg" />',

          'type': 'img',
          'audioInfo': null,
          'contentIdx': '2',
          'groupIdx': 1
        },
        {
          'content': '<span style=\"color:#292929;font-family:charter, Georgia, Cambria, &quot;font-size:21px;background-color:#FFFFFF;\">&nbsp;is to take 范德萨范德萨发范德萨 fdsaffdsafd fdsafdsaf fdsafdsaf发   为 啊范德萨发 幅度萨芬发发&nbsp;</span>',

          'type': 'text',
          'audioInfo': null,
          'contentIdx': '3',
          'groupIdx': 2
        }
      ],
      structure: '7',
      templateType: 'audioImgLine',
      preview: false,
      answers: [['3', '3'], ['1', '1'], ['2', '2']],
      userAnswer: {
        answers: [['3', '2'], ['1', '1'], ['2', '3']]
      }
    }
  },
  methods: {
    doSubmit1() {
      this.preview = true
    }
  }
}
</script>
<style lang="less" scoped>
    .example {
        padding: 16px;
    }
</style>
