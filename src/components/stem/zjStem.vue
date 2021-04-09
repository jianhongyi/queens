<template>
  <div class="zj-stem">
    <play-audio
      v-if="body.audioInfo && body.audioInfo.url"
      :audio-data="body.audioInfo"
      :template-type="templateType"
    />
    <template v-if="content">
      <span v-if="index">{{ index }}.</span><div class="zj-stem-body" v-html="content" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'ZjStem',
  props: {
    body: { // 题干内容
      type: Object,
      required: true,
      default: () => {}
    },
    templateType: { // 子题型 模版
      type: String,
      required: true,
      default: ''
    },
    index: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      content: '' // 题干内容
    }
  },
  mounted() {
    this.$emit('img-click-event')
  },
  created() {
    this.content = this.body.content
  }
}
</script>

<style scoped lang="less">
  .zj-stem {
    display: flex;
    flex-wrap: wrap;
    /deep/ * {
      margin: 0;
    }
    &-body {
      margin-left: 3px;
      display: inline;
      flex: 1;
    }
    font-size: 14px;
    font-weight: bold;
    color: #30323C;
    line-height: 21px;
    /deep/ [x-underline] {
      display: inline-block;
      text-align: center;
      position: relative;
      min-width: 50px;
      margin: 0 4px;
      &::before {
        position: absolute;
        content: "";
        left: 3px;
        right: 3px;
        top: 0;
        bottom: 4px;
        border-bottom: 2px solid #30323C;
      }
    }
    /deep/ img {
      max-width: 100%;
      display: block;
      margin: 12px auto;
    }
    /deep/ .ke-content-kong{
      display: inline-block;
      margin: 0;
      border-radius: 0;
    }
    /deep/ table {
      width: 100%;
      border-spacing: 1px;
      border: 1px double #b3b3b3;
      td,th{
        border: 1px solid #d9d9d9;
      }
    }
    .queens-play-audio {
      width: 100%;
      margin-bottom: 16px;
    }
  }
</style>
