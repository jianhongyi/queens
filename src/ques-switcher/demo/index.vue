<template>
  <demo-section style="background-color: #f0eaea;">
    <demo-block title="基础用法">
      <div style="padding: 0 16px;">
        <queens-ques-switcher ref="ques-switcher" :question-infos="questionInfos" :active-index="activeIndex" :item-active-border="true" :item-border="true" @click="clickHandler" />
      </div>
      <!-- <queens-button type="primary" @click="changeIndex">
        改变
      </queens-button> -->
    </demo-block>
    <demo-block title="显示答案">
      <div style="padding: 0 16px;">
        <queens-ques-switcher ref="ques-switcher" :question-infos="questionInfos" :active-index="activeIndex1" :is-show-result="true" item-bg="#fff" item-active-bg="#fff" :item-border="false" class="switcher-style" @click="clickHandler" />
      </div>
    </demo-block>
    <demo-block title="椭圆不显示作答结果">
      <div style="padding: 0 16px;">
        <queens-ques-switcher ref="ques-switcher" :question-infos="questionInfos" :is-ellipse="true" :active-index="activeIndex" :is-show-arrow="false" :is-show-icon="false" @click="clickHandler" />
      </div>
    </demo-block>
    <demo-block title="椭圆显示作答结果">
      <div style="padding: 0 16px;">
        <queens-ques-switcher ref="ques-switcher" :question-infos="questionInfos" :is-ellipse="true" :active-index="activeIndex" :is-show-arrow="false" :is-show-result="true" :is-show-icon="false" item-active-color="#fff" @click="clickHandler" />
      </div>
    </demo-block>
  </demo-section>
</template>
<script>true
export default {
  data() {
    return {
      questionInfos: [
        {
          questionId: '1',
          answers: [{
            content: '7|seven'
          }, {
            content: '6'
          }, {
            content: '5|五'
          }],
          userAnswer: {
            score: 100.0,
            answers: ['7']
          }
        },
        {
          questionId: '2',
          answers: [{
            'content': 'h',
            'answerImg': ''
          }, {
            'content': 'o',
            'answerImg': ''
          }, {
            'content': 'r',
            'answerImg': ''
          }, {
            'content': 's',
            'answerImg': ''
          }, {
            'content': 'e',
            'answerImg': ''
          }],
          userAnswer: {
            'score': 80.0,
            'answers': ['h', 'o', 'r', 's', 's']
          }
        },
        {
          questionId: '3',
          answers: [{
            content: 'legs'
          }],
          userAnswer: {
            score: 100.0,
            correctStatus: 3,
            answers: ['legs']
          },
          isChecked: true
        },
        {
          questionId: '4',
          answers: [{
            content: 'legs'
          }],
          userAnswer: {
            score: 100.0,
            correctStatus: 3,
            answers: ['legs']
          }
        },
        {
          questionId: '5',
          answers: [{
            content: 'legs'
          }],
          userAnswer: {
            score: 0.0,
            correctStatus: 2,
            answers: ['legss']
          }
        },
        {
          questionId: '6',
          answers: [{
            content: 'legs'
          }],
          userAnswer: {
            score: 100.0,
            answers: ['legs']
          }
        },
        {
          questionId: '7',
          answers: [{
            content: 'legs'
          }],
          userAnswer: {
            score: 0.0,
            answers: ['legsss']
          }
        },
        {
          questionId: '8',
          answers: [{
            content: 'legs'
          }],
          userAnswer: {
            score: 0.0,
            answers: ['legss']
          }
        },
        {
          questionId: '9',
          answers: [{
            content: 'legs'
          }],
          userAnswer: {
            score: 100.0,
            answers: ['legs']
          }
        },
        {
          questionId: '10',
          answers: [{
            content: 'legs'
          }],
          userAnswer: {
            score: 0.0,
            answers: ['legsss']
          }
        },
        {
          questionId: '11',
          templateType: 'sentenceSort',
          answers: [1, 2, 3, 4],
          userAnswer: {
            score: 70.0,
            answers: [1, 3, 2, 4]
          }
        },
        {
          questionId: '12',
          templateType: 'imgTextLine',
          answers: [
            [
              '1',
              '1'
            ],
            [
              '2',
              '2'
            ],
            [
              '3',
              '3'
            ]
          ],
          userAnswer: {
            score: 100.0,
            answers: [
              [
                '1',
                '1'
              ],
              [
                '2',
                '2'
              ],
              [
                '3',
                '3'
              ]
            ]
          }
        },
        {
          questionId: '13',
          templateType: 'imgTextLine',
          answers: [['11', '21'], ['12', '22'], ['13', '23'], ['14', '24']],
          userAnswer: {
            score: 100.0,
            answers: [['14', '24'], ['13', '23'], ['12', '22'], ['11', '21']]
          }
        },
        {
          questionId: '14',
          templateType: 'textLine',
          'answers': [
            ['11', '21'],
            ['12', '22'],
            ['13', '23'],
            ['14', '24']
          ],
          'userAnswer': {
            'score': 100.0,
            'answers': [
              ['14', '24'],
              ['13', '23'],
              ['12', '22'],
              ['11', '21']
            ]
          }
        },
        {
          questionId: '15',
          templateType: 'textSelect',
          'answers': [{
            'answerImg': '',
            'content': 'ea'
          }],
          'userAnswer': {
            'score': 0.0,
            'answers': ['e'],
            'completeTime': 1609762602078
          }
        }
      ],
      activeIndex: null,
      activeIndex1: null
    }
  },
  methods: {
    clickHandler(item, index, preindex) {
      console.log(item, index, preindex)
    },
    changeIndex() {
      this.activeIndex = 6
      this.$refs['ques-switcher'].caculatePosition(this.activeIndex)
    }
  }
}
</script>
