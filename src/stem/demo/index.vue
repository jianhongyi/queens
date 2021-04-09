<template>
  <demo-section>
    <demo-block title="基础模版">
      <queens-stem :body="body" structure="0" template-type="imgTextSelect" />
    </demo-block>

    <demo-block title="单词填空">
      <queens-stem
        :answers="UserAnswers"
        :correct-answers="answers"
        :body="body"
        structure="2"
        template-type="wordFill"
      />
    </demo-block>

    <demo-block title="单词填空">
      <queens-stem
        :answers="UserAnswers"
        :correct-answers="answers"
        :body="body9"
        structure="2"
        template-type="wordFill"
      />
    </demo-block>

    <demo-block title="字母填空">
      <queens-stem
        :answers="UserAnswers1"
        :correct-answers="answers1"
        :body="body1"
        :preview="false"
        structure="2"
        template-type="letterFill"
      />
    </demo-block>

    <demo-block title="数字填空">
      <queens-stem
        :answers="UserAnswers2"
        :body="body2"
        :correct-answers="answers2"
        structure="2"
        template-type="numFill"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  name: 'Stem',
  data() {
    return {
      UserAnswers: {
        answers: ['she is a girl']
      },
      UserAnswers1: {
        answers: ['d', 'a', 'o']
      },
      UserAnswers2: {
        answers: ['200000']
      },
      answers: [
        {
          'content': 'she is a girl',
          'answerImg': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=348404915,2991827248&fm=26&gp=0.jpg'
        },
        {
          'content': 'a',
          'answerImg': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=348404915,2991827248&fm=26&gp=0.jpg'
        }
      ],
      answers1: [
        {
          'content': 'd',
          'answerImg': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=348404915,2991827248&fm=26&gp=0.jpg'
        },
        {
          'content': 'a',
          'answerImg': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=348404915,2991827248&fm=26&gp=0.jpg'
        },
        {
          'content': 'a',
          'answerImg': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=348404915,2991827248&fm=26&gp=0.jpg'
        }
      ],
      answers2: [
        {
          'content': '20|2',
          'answerImg': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=348404915,2991827248&fm=26&gp=0.jpg'
        }
      ],
      body: {
        content: `<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_8_%E8%B7%9F%E8%AF%BB%E5%8F%A5%E5%AD%90_%E5%9B%BE%E7%89%87_39uid9d955bac4ebe47d2993d754095547948f538fb4ec42a468db814dcf0151f3b1auidfcb43454ae484e3d96137aa618d7f194.png" width="1000" title="2" alt="2" height="750" align="left" />
        <img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_8_%E8%B7%9F%E8%AF%BB%E5%8F%A5%E5%AD%90_%E5%9B%BE%E7%89%87_38uid5e0971cf3b49415c98a4863555d5ecb45abdf0eb272946c0bc2171c00f1245fbuidb67f6401462946f2aea598361c8d9a37.png" width="500" title="2" alt="2" height="375" align="left" />
        <img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_8_%E8%B7%9F%E8%AF%BB%E5%8F%A5%E5%AD%90_%E5%9B%BE%E7%89%87_40uid3dfc45c42db4492d8a0d27c45672f4a3e2803de52c22454084dec19f0ddf36c3uid14fa07fdb2794972adb293aef5b09769.png" width="240" title="2" alt="2" height="180" align="right" />
        aa <img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong">I'm fine `,
        type: 'RICHTEXT',
        audioInfo: {
          'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3',
          'duration': 112,
          'unit': 'ms'
        }
      },
      body9: {
        content: `<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_8_%E8%B7%9F%E8%AF%BB%E5%8F%A5%E5%AD%90_%E5%9B%BE%E7%89%87_39uid9d955bac4ebe47d2993d754095547948f538fb4ec42a468db814dcf0151f3b1auidfcb43454ae484e3d96137aa618d7f194.png" width="1000" title="2" alt="2" height="750" align="left" />
        <img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_8_%E8%B7%9F%E8%AF%BB%E5%8F%A5%E5%AD%90_%E5%9B%BE%E7%89%87_38uid5e0971cf3b49415c98a4863555d5ecb45abdf0eb272946c0bc2171c00f1245fbuidb67f6401462946f2aea598361c8d9a37.png" width="500" title="2" alt="2" height="375" align="left" />
        <img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_8_%E8%B7%9F%E8%AF%BB%E5%8F%A5%E5%AD%90_%E5%9B%BE%E7%89%87_40uid3dfc45c42db4492d8a0d27c45672f4a3e2803de52c22454084dec19f0ddf36c3uid14fa07fdb2794972adb293aef5b09769.png" width="240" title="2" alt="2" height="180" align="right" />
        ets up and aa<img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong"> I'm fine  aa<img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong">I'm fine `,
        type: 'RICHTEXT',
        audioInfo: {
          'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3',
          'duration': 112,
          'unit': 'ms'
        }
      },
      body1: {
        content: `123<p><img title="2" src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_1_1_跟读句子_图片_31uid9863934309614e95a1012d062d3cdcf3fbc26ba70bff42c19777b59995d5b80duid19aae65995da45c0a6862009bcc43af7.jpg" width="240">
        456<img title="2" src="http://test.enres.diplotalk.unischool.cn/pic/article/KB_2_7_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_7uid94f37b2cddbd44b0b1d86650c9108f40bf355aa2df6c41dd82a6de8dd0125dfc.jpg?auth_key=1602643252132-6c1f31f4f92c4b6092eb48ab55c69a6b-0-75d1faddb9eff88e1a54aeab66ec5782" width="240">
        <img title="2" src="http://test.enres.diplotalk.unischool.cn/pic/article/KB_2_6_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_3uid262ca489553a4e2d9bc77b8087dd8c244f8705e50c9e4b0ca6068b977ff5e73c.jpg?auth_key=1602643364732-b8c1f74f92f0423c859fb80ce20ad9d7-0-9bc493ee312eaa299b75d526198ab33c" width="240"></p>
        <p>r<img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong">e<img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong"><img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong"></p>`,
        type: 'RICHTEXT',
        audioInfo: {
          'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3',
          'duration': 112,
          'unit': 'ms'
        }
      },
      body2: {
        content: `<img height="2000" title="1" src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A82uid405b939df1f0487ba216c27a092c7c5c.PNG" width="240">
        <img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong">`,
        type: 'RICHTEXT',
        audioInfo: {
          'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3',
          'duration': 112,
          'unit': 'ms'
        }
      },
      body3: {
        content: '<img height="2000" title="1" src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A82uid405b939df1f0487ba216c27a092c7c5c.PNG" width="240">Can <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" /> see <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />&nbsp;dog?<br />Yes, I <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />Can you <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />&nbsp;the duck?<br />Yes, I can. It’s under the chair.<br />Can you see the frog?<br />Yes, I can. It’s in the house.<br />Can you see the fish?<br />Yes, I can. It’s in the car.',
        type: 'RICHTEXT',
        audioInfo: {
          'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3',
          'duration': 112,
          'unit': 'ms'
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
.queens-stem{
  background: #fff;
  padding-left: 16px;
  padding-right: 16px;
  margin: 14px;
}
</style>
