<!-- 图片连线单元 -->
<template>
  <div
    class="img-item-wrapper"
    :style="{
      'border-color': canActive && option.selectStyle && option.selectStyle.bd || '#E7EEF0',
      'background-color': canActive && option.selectStyle && option.selectStyle.bg || '#F3F7F8'
    }"
    @click="clickHandler"
  >
    <div class="item-wrapper">
      <div
        :class="[
          'item'
        ]"
      >
        <van-image v-if="(option.type)==='img'" :src="content" :show-error="true" :show-loading="true" class="item-img" />
        <play-audio v-else-if="(option.type)==='audio'" ref="playAudio" :url="content" :template-type="templateType" />
      </div>
      <div
        v-if="isShowCircle"
        ref="circle"
        :class="['item-circle', { 'isTrue': preview&&canActive }]"
        :style="[
          pointStyle,
          {
            'background-color': option.selectStyle && option.selectStyle.bd || '#fff',
            'border-color': option.selectStyle && option.selectStyle.bd || '#CFD2D5'
          }
        ]"
      >
        <img v-if="preview&&canActive" :src="imgs[`${option.isTure ? 'trueIconWhite' : 'falseIconWhite'}`]" :class="['item-circle-img', { 'isTrue': option.isTure }]">
      </div>
    </div>
  </div>
</template>

<script>
import linerItemMixin from '../../mixins/linerItemMixin'
import { Image as VanImage } from 'vant'
export default {
  name: 'ImgLinerItem',
  components: {
    VanImage
  },
  mixins: [linerItemMixin],
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}

}
</script>
<style lang='less' scoped>
  @import '../../style/components/liner/imgLinerItem.less';
</style>
