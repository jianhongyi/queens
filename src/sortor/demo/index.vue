<template>
  <demo-section>
    <demo-block title="图片排序题" class="example">
      <queens-sortor template-type="imgSort" :options="quesData1.options" :answers="quesData1.answers" :preview="true" :user-answer="quesData1.userAnswer" />
      <queens-button type="primary" round size="large" @click="doSubmit1">
        提交
      </queens-button>
    </demo-block>
    <demo-block title="句子排序题" class="example">
      <queens-sortor template-type="sentenceSort" :options="quesData2.options" :answers="quesData2.answers" :preview="preview2" />
      <queens-button type="primary" round size="large" @click="doSubmit2">
        提交
      </queens-button>
    </demo-block>
    <demo-block title="单词排序题" class="example">
      <queens-sortor template-type="textSort" :options="quesData3.options" :answers="quesData3.answers" :body="quesData3.body" :preview="preview3" />
      <queens-button type="primary" round size="large" @click="doSubmit3">
        提交
      </queens-button>
    </demo-block>
    <demo-block title="字母排序题" class="example">
      <queens-sortor template-type="letterSort" :options="quesData4.options" :answers="quesData4.answers" :body="quesData4.body" :preview="preview4" />
      <queens-button type="primary" round size="large" @click="doSubmit4">
        提交
      </queens-button>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      quesData1: {
        'questionId': 'c0428564f1ee45788b82affff124cd8a',
        'questionDocId': 'KB1L1U4ST_0000594',
        'questionDescription': null,
        'body': {
          'content': 'asdf asdfas asd as d',
          'type': '',
          'audioInfo': {
            'url': 'http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E9%9F%B3%E9%A2%91_3uidd0dbe91c28a84dae8a1df6556ac918ce.mp3',
            'duration': 34298,
            'unit': 'ms'
          }
        },
        'structure': '0',
        'optionsRandomSort': true,
        'templateType': 'imgSelect',
        'options': [
          {
            'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_2uidbbefa146a1394961a27842b90e9730e5.jpg" width="240" />',
            'contentIdx': '1',
            'audioInfo': null
          },
          {
            'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_3uid6722023feb4c462ebf41e08fd801da6e.jpg" width="240" />',
            'contentIdx': '2',
            'audioInfo': null
          },
          {
            'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_4uida06d9a41e7cf471ead44171428a16428.jpg" width="240" />',
            'contentIdx': '3',
            'audioInfo': null
          },
          {
            'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_7uid0ef7cf7759724c38b5bb5a5abbea81c1.jpg" width="240" />',
            'contentIdx': '4',
            'audioInfo': null
          },
          {
            'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_3uid6722023feb4c462ebf41e08fd801da6e.jpg" width="240" />',
            'type': '',
            'contentIdx': '5',
            'audioInfo': null
          },
          {
            'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_7uid0ef7cf7759724c38b5bb5a5abbea81c1.jpg" width="240" />',
            'contentIdx': '6',
            'audioInfo': null
          }
        ],
        'answers': ['2', '1', '4', '3', '5', '6'],
        userAnswer: {
          answers: ['1', '2', '3', '4', '5', '6'],
          score: 95.5
        },
        'explain': {
          'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_5uiddd3977c3ae744d109487f599130bffcc.jpg" width="240" />asd&nbsp; asdf as asd asf&nbsp;',
          'type': null
        }
      },
      preview1: false,
      quesData2: {
        'questionId': 'KB1L1U12ST_0000724_1',
        'questionDocId': 'KB1L1U12ST_0000724',
        'questionDescription': 'look and choose',
        'body': {
          'content': 'sa ds dd',
          'type': '',
          'audioInfo': null
        },
        'structure': '6',
        'templateType': 'sentenceSort',
        'options': [
          {
            'content': 'It’s so easy to get sucked into doing busy work, and it kills your focus over time.',
            'type': null,

            'audioInfo': null,
            'contentIdx': '4',
            'groupIdx': null
          },
          {
            'content': 'The main culprit for most people’s lack of focus is busyness. ',
            'type': null,

            'audioInfo': null,
            'contentIdx': '3',
            'groupIdx': null
          },
          {
            'content': ' if they are, they’re focusing on the wrong things: money, fame, jealousy and comparison, or “beating the competition.”',
            'type': null,

            'audioInfo': null,
            'contentIdx': '2',
            'groupIdx': null
          },
          {
            'content': 'Sadly, most people aren’t living a focused life —',
            'type': null,

            'audioInfo': null,
            'contentIdx': '1',
            'groupIdx': null
          },
          {
            'content': 'It’s so easy to get sucked into doing busy work, and it kills your focus over time.',
            'type': null,

            'audioInfo': null,
            'contentIdx': '5',
            'groupIdx': null
          },
          {
            'content': 'The main culprit for most people’s lack of focus is busyness. ',
            'type': null,

            'audioInfo': null,
            'contentIdx': '6',
            'groupIdx': null
          }
        ],
        'answers': ['1', '2', '3', '4', '5', '6'],
        'userAnswer': {
          answers: ['4', '2', '3', '1', '5', '6']
        },
        'explain': {
          'content': '<p id="02a5" class="ik il em in b fl io ip iq fo ir is it iu iv iw ix iy iz ja jb jc jd je jf jg df fj" style="color:#292929;font-family:charter, Georgia, Cambria, &quot;font-size:21px;background-color:#FFFFFF;">Sadly, most people aren’t living a focused life — if they are, they’re focusing on the wrong things: money, fame, jealousy and comparison, or “beating the competition.”</p><p id="26f8" class="ik il em in b fl io ip iq fo ir is it iu iv iw ix iy iz ja jb jc jd je jf jg df fj" style="color:#292929;font-family:charter, Georgia, Cambria, &quot;font-size:21px;background-color:#FFFFFF;">The main culprit for most people’s lack of focus is&nbsp;<span class="in jh" style="font-weight:700;">busyness</span>. It’s so easy to get sucked into doing busy work, and it kills your focus over time. In&nbsp;<em class="im">The 7 Habits of Highly Effective People</em>, Stephen Covey has an interesting illustration for what is “urgent” and what is truly “important”:</p>',
          'type': null
        },
        'page': '教材1页'
      },
      preview2: false,
      quesData3: {
        'questionId': 'KB1L1U12ST_0000723_1',
        'questionDocId': 'KB1L1U12ST_0000723',
        'questionDescription': 'look and choose',
        'body': {
          'content': 's sad sa ) ',
          'type': '',
          'audioInfo': null
        },
        'structure': '6',
        'templateType': 'textSort',
        'options': [
          {
            'content': 'KB1L1U12ST_0000723_1sad',
            'type': null,

            'audioInfo': null,
            'contentIdx': '3',
            'groupIdx': null
          },
          {
            'content': 'whofds',
            'type': null,

            'audioInfo': null,
            'contentIdx': '1',
            'groupIdx': null
          },
          {
            'content': 'arefds',
            'type': null,

            'audioInfo': null,
            'contentIdx': '2',
            'groupIdx': null
          },
          {
            'content': 'KB1L1U12ST_0000723KB1L1U12ST_000',
            'type': null,

            'audioInfo': null,
            'contentIdx': '4',
            'groupIdx': null
          },
          {
            'content': 'KB1L1U12ST_0000723KB1L1U',
            'type': null,

            'audioInfo': null,
            'contentIdx': '5',
            'groupIdx': null
          },
          {
            'content': 'conclusions',
            'type': null,

            'audioInfo': null,
            'contentIdx': '6',
            'groupIdx': null
          },
          {
            'content': 'KB1L1U12ST_0000723KB1L1U12ST_000KB1L1U12ST_0000723KB1L1UKB1L1U12ST_0000723KB1L1U',
            'type': null,

            'audioInfo': null,
            'contentIdx': '7',
            'groupIdx': null
          },
          {
            'content': 'KB1L1U12ST_0000723KB1L1UKB1L1U12ST_0000723KB1L1UKB1L1U12ST_0000723KB1L1U',
            'type': null,

            'audioInfo': null,
            'contentIdx': '8',
            'groupIdx': null
          },
          {
            'content': 'conclusionsKB1L1U12ST_0000723KB1L1U',
            'type': null,

            'audioInfo': null,
            'contentIdx': '9',
            'groupIdx': null
          }
        ],
        'answers': [1, 2, 3, 4, 5, 6, 7, 8, 9],
        'userAnswer': {
          answers: [4, 2, 3, 1, 5, 6, 7, 8, 9]
        },
        'explain': {
          'content': 'who are you',
          'type': null
        },
        'page': '教材2页'
      },
      preview3: false,
      quesData4: {
        'questionId': 'KB1L1U12ST_0000723_1',
        'questionDocId': 'KB1L1U12ST_0000723',
        'questionDescription': 'look and choose',
        'body': {
          'content': 'fish can not fly.|<p>O</p><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />a<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>g</span><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />|',
          'type': '',
          'audioInfo': null
        },
        'structure': '6',
        'templateType': 'letterSort',
        'options': [
          {
            'content': 'b',
            'type': null,

            'audioInfo': null,
            'contentIdx': '2',
            'groupIdx': null
          },
          {
            'content': 'c',
            'type': null,

            'audioInfo': null,
            'contentIdx': '3',
            'groupIdx': null
          },
          {
            'content': 'd',
            'type': null,

            'audioInfo': null,
            'contentIdx': '4',
            'groupIdx': null
          },
          {
            'content': 'a',
            'type': null,

            'audioInfo': null,
            'contentIdx': '1',
            'groupIdx': null
          }
        ],
        'answers': [1, 2, 3, 4],
        'userAnswer': {
          answers: [3, 2, 1, 4]
        },
        'explain': {
          'content': '<span>adf sadf sad&nbsp; asd</span>',
          'type': null
        },
        'page': '教材2页'
      },
      preview4: false
    }
  },
  methods: {
    doSubmit1() {
      this.preview1 = true
    },
    doSubmit2() {
      this.preview2 = true
    },
    doSubmit3() {
      this.preview3 = true
    },
    doSubmit4() {
      this.preview4 = true
    }
  }
}
</script>
<style lang="less" scoped>
    .example {
      background-color: #fff;
      padding: 0 16px;
    }
</style>
