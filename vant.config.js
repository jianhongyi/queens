module.exports = {
  name: 'queens',
  build: {
    css: {
      preprocessor: 'less'
    },
    site: {
      publicPath: '/queens/'
    }
  },
  site: {
    title: 'Queens',
    logo: 'http://h5.diplotalk.unischool.cn/static/img/queens-logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍'
          },
          {
            path: 'quickstart',
            title: '快速上手'
          }
        ]
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'answer',
            title: 'Answer 答案和解析'
          },
          {
            path: 'answering-area',
            title: 'AnsweringArea 作答区域'
          },
          {
            path: 'button',
            title: 'Button 按钮'
          },
          {
            path: 'description',
            title: 'Description 题目说明'
          },
          {
            path: 'liner',
            title: 'Liner 连线器'
          },
          {
            path: 'nav-bar',
            title: 'NavBar 导航栏'
          },
          {
            path: 'options',
            title: 'Options 题目选项'
          },
          {
            path: 'original',
            title: 'Original 查看原文'
          },
          {
            path: 'play-audio',
            title: 'PlayAudio 播放音频'
          },
          {
            path: 'popup',
            title: 'Popup 弹出层'
          },
          {
            path: 'progress',
            title: 'Progress 进度条'
          },
          {
            path: 'ques-switcher',
            title: 'QuesSwitcher 题目切换器'
          },
          {
            path: 'sortor',
            title: 'Sortor 排序器'
          },
          {
            path: 'stem',
            title: 'Stem 题干解析'
          }
        ]
      },
      {
        title: '基础题型组件',
        items: [
          {
            path: 'queens-select',
            title: 'QueensSelect 选择题型'
          },
          {
            path: 'queens-judge',
            title: 'QueensJudge 判断题型'
          },
          {
            path: 'queens-fill',
            title: 'QueensFill 填空题'
          },
          {
            path: 'queens-oral',
            title: 'QueensOral 口语题'
          },
          {
            path: 'queens-line',
            title: 'QueensLine 连线题'
          },
          {
            path: 'queens-sort',
            title: 'QueensSort 排序题'
          },
          {
            path: 'queens-composite',
            title: 'QueensComposite 复合题'
          },
          {
            path: 'queens-question',
            title: 'QueensQuestion 题目引擎'
          }
        ]
      }
    ]
  }
}
