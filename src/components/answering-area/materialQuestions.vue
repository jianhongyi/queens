<!-- 文本选择 完型填空复合子题 -->
<template>
  <div ref="materialQuestions" class="material-questions">
    <queens-popup
      class="popup"
      button-text="问题"
      decorate-icon-class="iconxuanci1"
      :is-unfold="true"
      :is-show-swiper-icon="isShowSwiperIcon && options.length>1"
    >
      <queens-ques-switcher
        ref="ques-switcher"
        :question-infos="options"
        :is-ellipse="true"
        :active-index="activeIndex"
        :is-show-arrow="false"
        :is-show-icon="false"
        v-bind="$attrs"
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
          v-for="(item, index) in options"
          :key="index"
        >
          <div class="slide-options">
            <queens-question
              ref="quesOptions"
              :ques-data="item"
              :autoplay="false"
              v-bind="$attrs"
              @touch-handler="touchHandler"
            />
          </div>
        </swipe-item>
      </swipe>
    </queens-popup>
  </div>
</template>

<script>
import answeringAreaMixin from '../../mixins/answeringAreaMixin'
export default {
  name: 'MaterialQuestions',
  mixins: [answeringAreaMixin],
  methods: {
    // 点击操作
    clickHandler(item, index, preIndex) {
      this.$emit('change-active-index', index)
      this.$refs.mySwiper.swipeTo(index)
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../style/components/composite/swiperProgress.less';
</style>
