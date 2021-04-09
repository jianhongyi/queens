<!-- 阅读选择/阅读判断复合子题 -->
<template>
  <div ref="readSelectComplexAns" class="material-questions">
    <queens-popup class="popup" v-bind="$attrs">
      <queens-ques-switcher
        ref="ques-switcher"
        :question-infos="questionInfos"
        :is-ellipse="true"
        :active-index="activeIndex"
        :is-show-arrow="false"
        :is-show-icon="false"
        item-active-color="#fff"
        v-bind="$attrs"
        class="queens-ques-switcher-outer"
        @click="clickHandler"
      />
      <swipe
        ref="mySwiper"
        :show-indicators="false"
        :loop="false"
        :initial-swipe="initialSwipe"
        @change="onChange"
      >
        <swipe-item
          v-for="(item, index) in subQuestions"
          :key="index"
        >
          <div class="slide-options">
            <queens-question
              ref="quesOptions"
              :ques-data="item"
              :autoplay="false"
              v-bind="$attrs"
            />
          </div>
        </swipe-item>
      </swipe>
    </queens-popup>
  </div>
</template>

<script>
import answerMixin from '../../mixins/answerMixin'
import { Swipe, SwipeItem } from 'vant'
export default {
  name: 'ReadSelectComplexAns',
  components: {
    Swipe,
    SwipeItem
  },
  mixins: [answerMixin],
  computed: {
    questionInfos() {
      return this.subQuestions.map(item => {
        const obj = {
          questionId: item && item.questionId,
          answers: item && item.answers,
          userAnswer: item && item.userAnswer,
          templateType: item && item.templateType
        }
        return obj
      })
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../style/components/answer/readSelectComplexAns.less';
</style>
