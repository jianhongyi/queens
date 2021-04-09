export const cellData = [
  {
    title: '文本选择题答案和解析',
    templateType: 'textSelect'
  },
  {
    title: '图片选择题答案和解析',
    templateType: 'imgSelect'
  },
  {
    title: '音频选择题答案和解析',
    templateType: 'audioSelect'
  },
  {
    title: 'YN判断题答案和解析',
    templateType: 'YNJudge'
  },
  {
    title: 'TF判断题答案和解析',
    templateType: 'TFJudge'
  },
  {
    title: '数字填空题答案和解析',
    templateType: 'numFill'
  },
  {
    title: '句子填空题答案和解析',
    templateType: 'wordFill'
  },
  {
    title: '单词填空题答案和解析',
    templateType: 'letterFill'
  },
  {
    title: '图片排序题答案和解析',
    templateType: 'imgSort'
  },
  {
    title: '句子排序题答案和解析',
    templateType: 'sentenceSort'
  },
  {
    title: '单词排序题答案和解析',
    templateType: 'textSort'
  },
  {
    title: '字母排序题答案和解析',
    templateType: 'letterSort'
  },
  {
    title: '连线题题答案和解析',
    templateType: 'textLine'
  },
  {
    title: '选词填空复合题答案和解析',
    templateType: 'selectFillComplex'
  },
  {
    title: '阅读填空复合题答案和解析',
    templateType: 'readFillComplex'
  },
  {
    title: '完型填空复合题答案和解析',
    templateType: 'clozeFillComplex'
  },
  {
    title: '阅读选择复合题答案和解析',
    templateType: 'readSelectComplex'
  },
  {
    title: '阅读判断复合题答案和解析',
    templateType: 'readJudgeComplex'
  }
]
export const data = {
  textSelect: {
    body: {},
    options: [
      {
        'content': 'tailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstails',
        'type': 'RICHTEXT'
      },
      {
        'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200810095912uidd28c83ac6177455ba9074186dc7903e9.jpg" width="240" />tailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstails<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200810095912uidd28c83ac6177455ba9074186dc7903e9.jpg" width="1000" />',
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
    answers: [
      {
        content: '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200810095912uidd28c83ac6177455ba9074186dc7903e9.jpg" width="240" />tailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstailstails<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200810095912uidd28c83ac6177455ba9074186dc7903e9.jpg" width="1000" />'
      }
    ],
    explain: {
      content: `Don’t forget to put the milk back in the fridge.and nine students like pineapples.`
    },
    templateType: 'textSelect'
  },
  imgSelect: {
    body: {},
    options: [
      {
        'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200810095845uid3e9f68c1145b44ca938d87b1b797da8e.jpg" width="240" />',
        'type': '',
        'res': [

        ],
        'audioInfo': [

        ]
      },
      {
        'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200810095903uid328d1a2b24c248a987550de9f6cb61c9.jpg" width="240" />',
        'type': '',
        'res': [

        ],
        'audioInfo': [

        ]
      },
      {
        'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200810095906uid6747b19623cc4c69be1a2d1566d981bd.jpg" width="240" />',
        'type': '',
        'res': [

        ],
        'audioInfo': [

        ]
      },
      {
        'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200810095912uidd28c83ac6177455ba9074186dc7903e9.jpg" width="240" />',
        'type': '',
        'res': [

        ],
        'audioInfo': [

        ]
      }
    ],
    answers: [
      {
        content: '<img src=\"http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200810095845uid3e9f68c1145b44ca938d87b1b797da8e.jpg\" width=\"240\" />'
      }
    ],
    explain: {
      content: ''
    },
    templateType: 'imgSelect'
  },
  audioSelect: {
    body: {},
    options: [{
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
    answers: [
      {
        content: '&nbsp;&nbsp;'
      }
    ],
    explain: {
      content: ''
    },
    templateType: 'audioSelect'
  },
  YNJudge: {
    body: {},
    options: [
      {
        'content': 'Yes',
        'type': ''
      },
      {
        'content': 'No',
        'type': 'RICHTEXT'
      }
    ],
    answers: [
      {
        content: 'Yes'
      }
    ],
    explain: {
      content: ''
    },
    templateType: 'YNJudge'
  },
  TFJudge: {
    body: {},
    options: [
      {
        'content': 'True',
        'type': ''
      },
      {
        'content': 'False',
        'type': 'RICHTEXT'
      }
    ],
    answers: [
      {
        content: 'True'
      }
    ],
    explain: {
      content: ''
    },
    templateType: 'TFJudge'
  },
  numFill: {
    body: {},
    options: [],
    answers: [
      {
        'content': '7|8',
        'answerImg': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=348404915,2991827248&fm=26&gp=0.jpg'
      }
    ],
    explain: {
      content: `<p><span>fdsaaaaaaaafdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
      <span>fdsaaaaaaaafdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span></p>
      <span>fdsaaaaaaaafdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span><span>fdsaaaaaaaafdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
      <span>fdsaaaaaaaafdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>`
    },
    templateType: 'numFill'
  },
  wordFill: {
    body: {
      content: `<p>世界各地<img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />sa<br>d<img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" /><em>萨<div>顶</div>顶</em>群无<img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />？</p>?范德萨范德萨范德萨`,
      type: 'RICHTEXT',
      audioInfo: {
        'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3',
        'duration': 112,
        'unit': 'ms'
      }
    },
    options: [],
    answers: [
      {
        'content': '0|zore',
        'answerImg': ''
      },
      {
        'content': '10|ten',
        'answerImg': ''
      },
      {
        'content': '10|ten',
        'answerImg': ''
      }
    ],
    explain: {
      content: ''
    },
    templateType: 'wordFill'
  },
  letterFill: {
    body: {
      content: `<p><img title="2" src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_1_1_跟读句子_图片_31uid9863934309614e95a1012d062d3cdcf3fbc26ba70bff42c19777b59995d5b80duid19aae65995da45c0a6862009bcc43af7.jpg" width="240">
            <img title="2" src="http://test.enres.diplotalk.unischool.cn/pic/article/KB_2_7_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_7uid94f37b2cddbd44b0b1d86650c9108f40bf355aa2df6c41dd82a6de8dd0125dfc.jpg?auth_key=1602643252132-6c1f31f4f92c4b6092eb48ab55c69a6b-0-75d1faddb9eff88e1a54aeab66ec5782" width="240">
            <img title="2" src="http://test.enres.diplotalk.unischool.cn/pic/article/KB_2_6_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_3uid262ca489553a4e2d9bc77b8087dd8c244f8705e50c9e4b0ca6068b977ff5e73c.jpg?auth_key=1602643364732-b8c1f74f92f0423c859fb80ce20ad9d7-0-9bc493ee312eaa299b75d526198ab33c" width="240"></p>
            <p>he<img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong">l<img src="http://test.ai.digtalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong"></p>`,
      type: 'RICHTEXT',
      audioInfo: {
        'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3',
        'duration': 112,
        'unit': 'ms'
      }
    },
    options: [],
    answers: [
      {
        'content': 'L|l',
        'answerImg': ''
      },
      {
        'content': 'o',
        'answerImg': ''
      }
    ],
    explain: {
      content: ''
    },
    templateType: 'letterFill'
  },
  imgSort: {
    body: {},
    options: [
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
    answers: ['2', '1', '4', '3', '5', '6'],
    explain: {
      content: ''
    },
    templateType: 'imgSort'
  },
  sentenceSort: {
    body: {},
    options: [
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
    answers: ['1', '2', '3', '4', '5', '6'],
    explain: {
      content: ''
    },
    templateType: 'sentenceSort'
  },
  textSort: {
    body: {},
    options: [
      {
        'content': 'you',
        'type': null,
        'audioInfo': null,
        'contentIdx': '3',
        'groupIdx': null
      },
      {
        'content': 'who',
        'type': null,
        'audioInfo': null,
        'contentIdx': '1',
        'groupIdx': null
      },
      {
        'content': 'are',
        'type': null,
        'audioInfo': null,
        'contentIdx': '2',
        'groupIdx': null
      },
      {
        'content': 'I',
        'type': null,
        'audioInfo': null,
        'contentIdx': '4',
        'groupIdx': null
      },
      {
        'content': 'am',
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
      }
    ],
    answers: [1, 2, 3, 4, 5, 6],
    explain: {
      'content': 'who are you',
      'type': null
    },
    templateType: 'textSort'
  },
  letterSort: {
    body: {
      content: 'fish can not fly.|<p>O</p><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />a<img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><span>g</span><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" /><img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />|'
    },
    options: [
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
    answers: [1, 2, 3, 4],
    explain: null,
    templateType: 'letterSort'
  },
  textLine: {
    body: {},
    options: [
      {
        'content': '<img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E5%9B%BE%E7%89%87_2uidbbefa146a1394961a27842b90e9730e5.jpg" width="240" title="KB_2_2_篇章_图片_2.jpg" alt="KB_2_2_篇章_图片_2.jpg" />',
        'type': 'img',
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
        'content': '<span style=\"color:#292929;font-family:charter, Georgia, Cambria, &quot;font-size:21px;background-color:#FFFFFF;\">&nbsp;is to take&nbsp;</span>',
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
        'content': '<span style=\"color:#292929;font-family:charter, Georgia, Cambria, &quot;font-size:21px;background-color:#FFFFFF;\">&nbsp;is to take&nbsp;</span>',
        'type': 'text',
        'audioInfo': null,
        'contentIdx': '3',
        'groupIdx': 2
      }
    ],
    answers: [['3', '3'], ['1', '1'], ['2', '2']],
    explain: {
      'content': 'who are you',
      'type': null
    },
    templateType: 'textLine'
  },
  selectFillComplex: {
    'questionId': '2a9eccc2103848c9b32beadca8cad0b9',
    'questionDocId': 'KB1L1U4ST_0000596',
    'questionDescription': 'look and choose',
    'direction': {
      'content': '试题指导语',
      'type': '',
      'resUrl': ''
    },
    'additionalAudio': {
      'url': 'http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E5%8D%95%E8%AF%8D_%E9%9F%B3%E9%A2%91_Alex_2uidd05a5b713e3f4b1e8d27178c67b4fe46.mp3?auth_key=1608025480998-0-0-053d2c767416cd60d05b0bb9d196b0c9',
      'duration': 1097,
      'unit': 'ms',
      'listeningText': 'how are you !'
    },
    'body': {
      'content': 'Can <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" /> see <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />&nbsp;dog?<br />Yes, I <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />. It’s under the bed.<br />Can you see the tiger?<br />Yes, I can. It’s on the table.<br />Can you see the bird?<br />Yes, I can. It’s on the book.<br />Can you <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />&nbsp;the duck?<br />Yes, I can. It’s under the chair.<br />Can you see the frog?<br />Yes, I can. It’s in the house.<br />Can you see the fish?<br />Yes, I can. It’s in the car.',
      'type': '',
      'audioInfo': null
    },
    'structure': '9',
    'templateType': 'selectFillComplex',
    'options': [{
      'contentIdx': '1',
      'content': 'you',
      'type': ''
    },
    {
      'contentIdx': '4',
      'content': 'are',
      'type': ''
    },
    {
      'contentIdx': '2',
      'content': 'the',
      'type': ''
    },
    {
      'contentIdx': '3',
      'content': 'can',
      'type': ''
    },
    {
      'contentIdx': '5',
      'content': 'fix',
      'type': ''
    }
    ],
    'answers': [{
      'contentIdx': '1',
      'content': 'you|1',
      'explain': 'you explain'
    },
    {
      'contentIdx': '2',
      'content': 'the|3',
      'explain': 'the explain'
    },
    {
      'contentIdx': '4',
      'content': 'are',
      'explain': 'are explain'
    },
    {
      'contentIdx': '3',
      'content': 'can',
      'explain': 'can explain'
    },
    {
      'contentIdx': '5',
      'content': 'fix',
      'explain': 'fix explain'
    }
    ],
    'userAnswer': {
      'score': 80.0,
      'answers': [{
        'score': 100.0,
        'content': 'you',
        'contentId': '1',
        'questionId': '5ff3c75971b1ea0001776d41'
      },
      {
        'score': 0.0,
        'content': 'can',
        'contentId': '4',
        'questionId': '5ff3c75971b1ea0001776d42'
      },
      {
        'score': 0.0,
        'content': 'the',
        'contentId': '2',
        'questionId': '5ff3c75971b1ea0001776d43'
      },
      {
        'score': 0.0,
        'content': 'are',
        'contentId': '3',
        'questionId': '5ff3c75971b1ea0001776d44'
      }
      ]
    },
    'explain': {
      'content': 'sdfas asdf as asdf',
      'type': null
    }
  },
  readFillComplex: {
    'questionId': 'f22bbfb038c441478e2d21bb790bc47f',
    'questionDocId': 'KB1L1U4ST_0000595',
    'questionDescription': null,
    'body': {
      'content': 'Can <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" /> see <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />&nbsp;dog?<br />Yes, I <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />. It’s under the bed.<br />Can you see the tiger?<br />Yes, I can. It’s on the table.<br />Can you see the bird?<br />Yes, I can. It’s on the book.<br />Can you <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />&nbsp;the duck?<br />Yes, I can. It’s under the chair.<br />Can you see the frog?<br />Yes, I can. It’s in the house.<br />Can you see the fish?<br />Yes, I can. It’s in the car.',
      'type': '',
      'audioInfo': null
    },
    'structure': '9',
    'templateType': 'readFillComplex',
    'options': [],
    'answers': [{
      'contentIdx': '1',
      'content': 'you',
      'explain': 'you explain'
    },
    {
      'contentIdx': '2',
      'content': 'the',
      'explain': 'the explain'
    },
    {
      'contentIdx': '4',
      'content': 'are',
      'explain': 'are explain'
    },
    {
      'contentIdx': '3',
      'content': 'can',
      'explain': 'can explain'
    },
    {
      'contentIdx': '5',
      'content': 'fix',
      'explain': 'fix explain'
    }
    ],
    'userAnswer': {
      'score': 0.0,
      'answers': [{
        'score': 100.0,
        'content': 'you',
        'questionId': '5ff3c75971b1ea0001776d41'
      },
      {
        'score': 0.0,
        'content': 'then',
        'questionId': '5ff3c75971b1ea0001776d42'
      },
      {
        'score': 0.0,
        'content': 'can',
        'questionId': '5ff3c75971b1ea0001776d43'
      },
      {
        'score': 100.0,
        'content': 'can',
        'questionId': '5ff3c75971b1ea0001776d46'
      }
      ]
    },
    'explain': {
      'content': 'asdf asd fasdf&nbsp;',
      'type': null
    }
  },
  clozeFillComplex: {
    'questionId': '4603c5697fe44765964197eff6b2c30d',
    'questionDocId': 'KB1L1U4ST_0000598',
    'questionDescription': 'looks and choose',
    'body': {
      'content': 'Wake up! Wake up!<br />Monty, Maskman, Marie.<br />Walk and talk now.<br />One … two … three.<br />Marie: <img src="http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png" alt="" class="ke-content-kong" />! Here’s a picture to colour. Maskman, colour number one white, please … Monty, colour number two red, please.<br />Maskman: What is it? What is it?&nbsp;<br />Monty: Hmm, red and white, Marie. They’re your favourite colours.<br />Marie: Yes, Monty … Maskman, colour number three black, please.<br />Maskman: Look! It’s a red pencil!<br />Monty: Ha! Ha! Yes! It’s a red pencil … and now I’m a red mouse.<br />Marie: Now you, Maskman.<br />Maskman: Here you are! A picture to colour … Monty, colour number four blue, please … Marie, colour number five black, please.<br />Marie: Er, yes, Maskman.<br />Marie: What is it? What is it? Only two colours, Maskman?<br />Maskman: No, Marie. Colour number six yellow, please.<br />Marie: It’s YOU, Maskman!<br />Maskman: Yes, it is. I’m Maskman!<br />',
      'type': '',
      'audioInfo': null
    },
    'structure': '9',
    'templateType': 'clozeFillComplex',
    'options': null,
    'subQuestions': [{
      'questionId': '79704261299246a889a6489c76f03570',
      'questionDocId': 'KB1L1U4ST_0000600',
      'questionDescription': 'look and choose',
      'structure': '0',
      'templateType': '',
      'options': [{
        'content': 'talk',
        'type': ''
      },
      {
        'content': 'look',
        'type': ''
      },
      {
        'content': 'jump',
        'type': ''
      },
      {
        'content': 'draw',
        'type': ''
      }
      ],
      'answers': [{
        'content': 'look',
        'answerImg': ''
      }],
      'userAnswer': {
        'score': 0.0,
        'answers': [
          'jump'
        ]
      },
      'explain': {
        'content': 'talk，说话；fly，飞；jump，跳；draw，绘画。<br />我的青蛙会跳，还会游泳。因此选择jump。<br />',
        'type': ''
      }
    },
    {
      'questionId': '79704261299246a889a6489c76f03570',
      'questionDocId': 'KB1L1U4ST_0000600',
      'questionDescription': 'look and choose',
      'structure': '0',
      'templateType': '',
      'options': [{
        'content': 'talk',
        'type': ''
      },
      {
        'content': 'look',
        'type': ''
      },
      {
        'content': 'jump',
        'type': ''
      },
      {
        'content': 'draw',
        'type': ''
      }
      ],
      'answers': [{
        'content': 'look',
        'answerImg': ''
      }],
      'userAnswer': {
        'score': 0.0,
        'answers': [
          'jump'
        ]
      },
      'explain': {
        'content': 'talk，说话；fly，飞；jump，跳；draw，绘画。<br />我的青蛙会跳，还会游泳。因此选择jump。<br />',
        'type': ''
      }
    }]
  },
  readSelectComplex: {
    'questionId': '4603c5697fe44765964197eff6b2c30d',
    'questionDocId': 'KB1L1U4ST_0000598',
    'questionDescription': 'looks and choose',
    'body': {
      'content': 'Wake up! Wake up!<br />Monty, Maskman, Marie.<br />Walk and talk now.<br />One … two … three.<br />Marie: Look! Here’s a picture to colour. Maskman, colour number one white, please … Monty, colour number two red, please.<br />Maskman: What is it? What is it?&nbsp;<br />Monty: Hmm, red and white, Marie. They’re your favourite colours.<br />Marie: Yes, Monty … Maskman, colour number three black, please.<br />Maskman: Look! It’s a red pencil!<br />Monty: Ha! Ha! Yes! It’s a red pencil … and now I’m a red mouse.<br />Marie: Now you, Maskman.<br />Maskman: Here you are! A picture to colour … Monty, colour number four blue, please … Marie, colour number five black, please.<br />Marie: Er, yes, Maskman.<br />Marie: What is it? What is it? Only two colours, Maskman?<br />Maskman: No, Marie. Colour number six yellow, please.<br />Marie: It’s YOU, Maskman!<br />Maskman: Yes, it is. I’m Maskman!<br />',
      'type': '',
      'audioInfo': null
    },
    'structure': '9',
    'templateType': 'readSelectComplex',
    'options': null,
    'subQuestions': [{
      'questionId': '79704261299246a889a6489c76f03570',
      'questionDocId': 'KB1L1U4ST_0000600',
      'questionDescription': null,
      'body': {
        'content': 'I was talking with the police all morning yesterday.',
        'type': '',
        'audioInfo': null
      },
      'structure': '0',
      'templateType': 'textSelect',
      'options': [{
        'content': 'talk',
        'type': ''
      },
      {
        'content': 'fly',
        'type': ''
      },
      {
        'content': 'jump',
        'type': ''
      },
      {
        'content': 'draw',
        'type': ''
      }
      ],
      'answers': [{
        'content': 'talk',
        'answerImg': ''
      }],
      'userAnswer': {
        'score': 0.0,
        'answers': [
          'jump'
        ]
      },
      'explain': {
        'content': 'talk，说话；fly，飞；jump，跳；draw，绘画。<br />我的青蛙会跳，还会游泳。因此选择jump。<br />',
        'type': ''
      }
    },
    {
      'questionId': '79704261299246a889a6489c76f03571',
      'questionDocId': 'KB1L1U4ST_0000600',
      'questionDescription': null,
      'body': {
        'content': 'I was talking with the police all morning yesterday.',
        'type': '',
        'audioInfo': null
      },
      'structure': '0',
      'templateType': 'textSelect',
      'options': [{
        'content': 'talk',
        'type': ''
      },
      {
        'content': 'fly',
        'type': ''
      },
      {
        'content': 'jump',
        'type': ''
      },
      {
        'content': 'draw',
        'type': ''
      }
      ],
      'answers': [{
        'content': 'talk',
        'answerImg': ''
      }],
      'userAnswer': {
        'score': 0.0,
        'answers': [
          'jump'
        ]
      },
      'explain': {
        'content': 'talk，说话；fly，飞；jump，跳；draw，绘画。<br />我的青蛙会跳，还会游泳。因此选择jump。<br />',
        'type': ''
      }
    }]
  },
  readJudgeComplex: {
    'questionId': '3756336ac9bf4851afc66fc1b5436dbe',
    'questionDocId': 'KB1L1U4ST_0000594',
    'questionDescription': null,
    'body': {
      'content': "<p>Dear Nick,</p><p><br /></p><p>I was with the police all morning yesterday. It was very funny!</p><p><br /></p><p>Two private detectives called Lock and Key think I've got their car. Last Thursday they were at a café in town and there was a car thief at the table next to them. He was strong and angry. They think it was me. They're not very clever!</p><p><br /></p><p>Well, you're stronger than me, Nick and you're angrier too. Were you at a&nbsp;café&nbsp;in town last Thursday morning? Have you got their car?</p><p><br /></p><p>See you soon,</p><p>Your brother Robin</p>",
      'type': '',
      'audioInfo': {
        'url': 'http://test.enres.diplotalk.unischool.cn/audio/question/KB_2_2_%E7%AF%87%E7%AB%A0_%E9%9F%B3%E9%A2%91_3uidd0dbe91c28a84dae8a1df6556ac918ce.mp3?auth_key=1608025481005-0-0-961192dcf15a7b975374c5b09e9b7e7b',
        'duration': 34298,
        'unit': 'ms'
      }
    },
    'structure': '9',
    'templateType': 'readJudgeComplex',
    'subQuestions': [{
      'questionId': '79704261299246a889a6489c76f03571',
      'questionDocId': 'KB1L1U4ST_0000600',
      'body': {
        'content': 'I was with the police all morning yesterday.',
        'type': '',
        'audioInfo': null
      },
      'structure': '8',
      'templateType': 'YNJudge',
      'options': [{
        'content': 'Yes',
        'type': null,
        'audioInfo': null
      },
      {
        'content': 'No',
        'type': null,
        'audioInfo': null
      }
      ],
      'answers': [{
        'content': 'Yes',
        'answerImg': ''
      }],
      'userAnswer': {
        'score': 100.0,
        'answers': [
          'Yes'
        ]
      },
      'explain': {
        'content': 'yes',
        'type': null
      }
    },
    {
      'questionId': '79704261299246a889a6489c76f03570',
      'questionDocId': 'KB1L1U4ST_0000600',
      'body': {
        'content': "Two private detectives called Lock and Key think I've got their car.",
        'type': '',
        'audioInfo': null
      },
      'structure': '8',
      'templateType': 'YNJudge',
      'options': [{
        'content': 'Yes',
        'type': null,
        'audioInfo': null
      },
      {
        'content': 'No',
        'type': null,
        'audioInfo': null
      }
      ],
      'answers': [{
        'content': 'Yes',
        'answerImg': ''
      }],
      'userAnswer': {
        'score': 80.0,
        'answers': [
          'No'
        ]
      },
      'explain': {
        'content': 'yes',
        'type': null
      }
    }
    ]
  }
}

