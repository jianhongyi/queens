<!-- 文本选择 完型填空复合子题 -->
<template>
  <div class="cloze-fill-composite-options">
    <queens-popup
      class="popup"
      button-text="选项"
      decorate-icon-class="iconxuanci1"
      :is-unfold="true"
      :is-show-swiper-icon="isShowSwiperIcon && options.length>1"
    >
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
            <div class="progress-text">
              <strong>{{ index + 1 }}</strong>
              <span>/{{ options.length }}</span>
            </div>
            <queens-options
              ref="quesOptions"
              :options="item.options || []"
              template-type="textSelect"
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
  name: 'ClozeFillComplex',
  mixins: [answeringAreaMixin]
}
</script>

<style lang='less' scoped>
@import '../../style/components/composite/swiperProgress.less';
</style>
