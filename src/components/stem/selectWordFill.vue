<!-- 单词填空 -->
<template>
  <div class="ques-fill-complex">
    <div class="ques-fill-complex-main-area">
      <div class="ques-fill-complex-main-area-scroll-card">
        <section>
          <play-audio
            v-if="body.audioInfo && body.audioInfo.url"
            ref="playAudio"
            :url="body.audioInfo.url"
            :autoplay="autoplay"
            :template-type="templateType"
            v-bind="$attrs"
          />
          <html-content
            v-bind="$attrs"
            :template-type="templateType"
            :content="content"
          />
          <slot name="footer" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>

import compositeStemMixin from '../../mixins/compositeStemMixin'
import htmlContent from './htmlContent'

export default {
  name: 'SelectWordFill',
  components: {
    htmlContent
  },
  mixins: [compositeStemMixin],
  created() {
  },
  mounted() {
    this.$emit('img-click-event')
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
@import '../../style/var';
.ques-fill-complex{
  .queens-play-audio{
    margin-bottom: 30px;
    padding-left: calc(50% - 22px);
  }
  &.main-area {
    background-color: @white;
    border-radius: 14px 8px 8px 8px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    &.scroll-card{ // iphone6 scroll和radius一起使用时，swiper左右滑动，第二页图片渲染不出来，页面的dom已经真实存在。
      padding: 0 14px;
      height: 100%;
      overflow: scroll;
      box-sizing: border-box;
      .pad{ // 垫高页面。iphone6 padding-bottom 和scroll 一起使用时padding-bottom失效
        height: 36px;
      }
    }
    .scrollCard::-webkit-scrollbar {
      display: none !important;
    }

  }
}

</style>
