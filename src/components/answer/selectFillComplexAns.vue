<!--
 * @Author: xuemingli
 * @Date: 2021-01-29 18:15:35
 * @LastEditTime: 2021-02-02 15:08:59
 * @LastEditors: xuemingli
 * @Description: In User Settings Edit
 * @FilePath: \queens\src\components\answer\selectFillComplexAns.vue
-->
<!-- 选词填空/阅读填空复合题答案 -->
<template>
  <queens-popup v-bind="$attrs" class="popup">
    <div class="select-fill-composite-ans">
      <swipe
        ref="mySwiper"
        :show-indicators="false"
        :loop="false"
        :initial-swipe="initialSwipe"
        @change="onChange"
      >
        <swipe-item
          v-for="(item, index) in effectiveAnswers"
          :key="index"
        >
          <div class="slide-options">
            <div class="progress-text">
              <strong>{{ index + 1 }}</strong>
              <span>/{{ effectiveAnswers.length }}</span>
            </div>
            <div :style="{'justify-content': flexPosition}" class="complex-ans">
              {{ hanleContent(item.fillContent || item.content || '' ) }}
            </div>
            <!-- <explain v-bind="$attrs" :explain="item.explain" class="explain" /> -->
          </div>
        </swipe-item>
      </swipe>
    </div>
  </queens-popup>
</template>

<script>
import answerMixin from '../../mixins/answerMixin'
import { Swipe, SwipeItem } from 'vant'
// import explain from '../explain/index'
export default {
  name: 'SelectFillComplexAns',
  components: {
    Swipe,
    SwipeItem
    // explain
  },
  mixins: [answerMixin],
  methods: {
    hanleContent(value) {
      return value.split('|')[0]
    }
  }
}
</script>
<style lang='less' scoped>
  @import '../../style/components/answer/selectFillComplexAns.less';
</style>
