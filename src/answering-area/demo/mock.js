export const cellData = [
  {
    title: '选词填空',
    templateType: 'selectFillComplex'
  },
  {
    title: '完形填空选择',
    templateType: 'clozeFillComplex'
  },
  {
    title: '阅读判断',
    templateType: 'readJudgeComplex'
  },
  {
    title: '阅读选择',
    templateType: 'readSelectComplex'
  }
]
export const data = {
  clozeFillComplex: [{
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
    templateType: 'clozeFillComplex'
  }, {
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
    templateType: 'clozeFillComplex'
  }],
  selectFillComplex: {
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
    templateType: 'selectFillComplex'
  },
  readJudgeComplex: [{
    'questionId': '123',
    'questionDocId': 'safasdoss',
    'questionDescription': '',
    'body': {
      content: `<p style="text-align:center;"><img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A82uid405b939df1f0487ba216c27a092c7c5c.PNG" width="240"></p><p style="text-align:left;"><span style="color:#0E1726;font-family:&quot;font-size:14px;background-color:#F4F7FD;">`,
      type: 'RICHTEXT',
      audioInfo: {
        'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3',
        'duration': 112,
        'unit': 'ms'
      }
    },
    'structure': '8',
    'templateType': 'TFJudge',
    'options': [
      {
        'content': 'True',
        'type': 'RICHTEXT'
      },
      {
        'content': 'False',
        'type': 'RICHTEXT'
      }
    ],
    'answers': [
      {
        content: 'True'
      }
    ],
    'userAnswer': null,
    'explain': {
      'content': '',
      'type': ''
    }
  }, {
    'questionId': '456',
    'questionDocId': 'safasdoss',
    'questionDescription': '',
    'body': {
      content: `123<p style="text-align:center;"><img src="http://test-resourcepf.oss-cn-shanghai.aliyuncs.com/pic/question/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A82uid405b939df1f0487ba216c27a092c7c5c.PNG" width="240"></p><p style="text-align:left;"><span style="color:#0E1726;font-family:&quot;font-size:14px;background-color:#F4F7FD;">`,
      type: 'RICHTEXT',
      audioInfo: {
        'url': 'http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3',
        'duration': 112,
        'unit': 'ms'
      }
    },
    'structure': '8',
    'templateType': 'TFJudge',
    'options': [
      {
        'content': 'True',
        'type': 'RICHTEXT'
      },
      {
        'content': 'False',
        'type': 'RICHTEXT'
      }
    ],
    'answers': [
      {
        content: 'True'
      }
    ],
    'userAnswer': null,
    'explain': {
      'content': '',
      'type': ''
    }
  }],
  readSelectComplex: [{
    'questionId': '123',
    'questionDocId': 'safasdoss',
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
  }]
}

