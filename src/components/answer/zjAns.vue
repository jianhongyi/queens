<template>
  <div class="zj-answer">
    <template v-if="templateType !== 'zJNoAnswerOral'">
      <div class="label" :class="[answerClone.length > 1 ? 'has-contents' : 'has-content']">
        <span class="title">{{ label }}：</span>
        <span v-if="answerClone.length === 1" class="content">{{ answerClone.toString() }}</span>
      </div>
      <div v-if="answerClone.length > 1" class="contents">
        <div v-for="(content, index) in answerClone" :key="index" class="item">
          {{ index + 1 }}.<span class="content">{{ content }}</span>
        </div>
      </div>
    </template>
    <div v-if="userAnswer && userAnswer.answers && userAnswer.answers.length > 0" class="user-answer">
      <span class="label">学生答案：</span>
      <div v-if="userAnswer.answers.length === 1" class="content">
        <div
          v-if="templateType.indexOf('Oral') === -1 || userAnswer.answers[0] === '未作答'"
          :class="[answers[0] === userAnswer.answers[0] ? 'correct' : 'error']"
        >
          {{ userAnswer.answers[0] }}
        </div>
        <play-audio
          v-else
          :audio-data="{
            url: userAnswer.answers[0]
          }"
          :show-duration="false"
          :template-type="templateType"
        />
      </div>
      <div v-else class="contents">
        <div
          v-for="(ans, i) in userAnswer.answers"
          :key="i"
          :class="[answerResult(ans, i) ? 'correct' : 'error']"
          class="item"
        >
          {{ i + 1 }}.<span class="content">{{ ans }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZjAnswer',
  props: {
    label: {
      type: String,
      default: '正确答案'
    },
    structure: { // 题型 选择题：0，判断题：8，填空题：2，趣配音: 5，排序: 6，连线：7
      type: String,
      default: ''
    },
    answers: {
      type: [String, Array],
      require: true,
      default: ''
    },
    userAnswer: {
      type: Object,
      required: true,
      default: () => ({})
    },
    templateType: {
      type: String,
      default: ''
    }
  },
  computed: {
    isType() {
      let { answers } = this
      const toStr = Function.prototype.call.bind(Object.prototype.toString)
      if (this.structure === '0') { // 选择题转化选项
        answers = answers.toString()
      }
      return (type) => {
        return toStr(answers).toLowerCase() === `[object ${type}]`
      }
    },
    answerClone() {
      const ans = this.answers
      ans.forEach((item, index) => {
        ans[index] = item.replace(/@@/g, '/')
      })
      return ans
    }
  },
  methods: {
    // 判断答案正误
    answerResult(ans, i) {
      const answer = this.answers[i]
      return answer.split('/').indexOf(ans)
    }
  }
}
</script>

<style scoped lang="less">
  .zj-answer {
    font-size: 14px;
    color: #4D8DFF;
    line-height: 14px;
    font-weight: bold;
    .label {
      &.has-contents {
        margin-bottom: 9px;
      }
    }
    .content,.contents .item {
      line-height: 21px;
    }
    .content {
      margin-left: 4px;
    }
    .user-answer {
      margin-top: 12px;
      padding: 12px 0;
      .label {
        display: inline-block;
        vertical-align: middle;
        color: #333;
        font-weight: normal;
      }
      .content, .contents {
        display: inline-block;
        vertical-align: middle;
        .correct {
          color: #40DC85;
        }
        .error {
          color: #FA6056;
        }
      }
      .contents {
        margin-top: 9px;
        width: 100%;
      }
    }
  }
</style>
