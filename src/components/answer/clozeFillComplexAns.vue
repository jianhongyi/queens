<!--
 * @Author: your name
 * @Date: 2021-01-27 14:53:40
 * @LastEditTime: 2021-02-02 15:18:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \queens\src\components\answer\clozeFillComplexAns.vue
-->
<!-- 阅读填空复合子题 -->
<template>
  <div class="read-fill-composite-ans">
    <queens-popup
      v-bind="$attrs"
      class="popup"
    >
      <swipe ref="mySwiper" :show-indicators="false" :loop="false" @change="onChange">
        <swipe-item
          v-for="(item, index) in subQuestions"
          :key="index"
        >
          <div class="slide-options">
            <div class="progress-text">
              <strong>{{ index + 1 }}</strong>
              <span>/{{ subQuestions.length }}</span>
            </div>
            <queens-options
              ref="quesOptions"
              :options="item.options || []"
              :answers="item.answers || []"
              :user-answer="item.userAnswer || {}"
              template-type="textSelect"
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
  name: 'ClozeFillComplexAns',
  components: {
    Swipe,
    SwipeItem
  },
  mixins: [answerMixin]
}
</script>

<style lang='less' scoped>
@import '../../style/components/composite/swiperProgress.less';
</style>
