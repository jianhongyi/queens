<template>
  <div class="zj-opitons" :class="'zj-opitons-' + type">
    <div v-for="(option, index) in options" :key="option.id" class="item">
      {{ optionMaps[index] }}.<span v-if="type !== 'audio'" class="content" v-html="option.content" />
      <play-audio v-else :audio-data="option.audioInfo" :template-type="templateType" />
    </div>
  </div>
</template>

<script>
import { OPTION_MAPS } from '../../utils/constant'
export default {
  name: 'ZjOptions',
  props: {
    options: {
      type: Array,
      default: () => ([])
    },
    templateType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // 选项映射标识，A/B/C/D
      optionMaps: OPTION_MAPS,
      type: 'text'
    }
  },
  created() {
    this.checkOption()
  },
  methods: {
    checkOption() {
      const type = this.templateType.toLowerCase() || ''
      if (type.indexOf('img') > 0) {
        this.type = 'img'
        return
      }
      if (type.indexOf('audio') > 0) {
        this.type = 'audio'
      }
    }
  }
}
</script>

<style scoped lang="less">
  .zj-opitons {
    font-size: 14px;
    color: #30323C;
    line-height: 21px;
    &-img {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        position: relative;
        flex: 0 0 48%;
        box-sizing: border-box;
        max-width: 206px;
        border: 2px solid transparent;
        margin-bottom: 6px !important;
        /deep/ img {
          border-radius: 6px;
        }
      }
    }
    .item {
      margin-bottom: 14px;
      .content {
        margin-left: 4px;
      }
      /deep/ .queens-play-audio {
        margin-top: 6px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    /deep/ * {
      margin: 0;
    }
    /deep/ p {
      display: inline;
    }
    /deep/ img {
      width: 100%;
      display: block;
      margin: 6px 0 0;
      font-size: 0;
    }
  }
</style>
