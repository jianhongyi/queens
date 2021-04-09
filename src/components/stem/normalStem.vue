<!-- 普通题干 -->
<template>
  <section>
    <play-audio
      v-if="body.audioInfo && body.audioInfo.url"
      ref="playAudio"
      :url="body.audioInfo.url"
      :autoplay="autoplay"
      :template-type="templateType"
      v-bind="$attrs"
    />
    <div v-if="trim(content)" ref="stem" class="queens-stem-content" v-html="content" />
  </section>
</template>

<script>
import { cloneDeep } from 'lodash'
import { REGEXPS } from '../../utils/constant'
export default {
  name: 'NormalStem',
  props: {
    templateType: { // 子题型 模版
      type: String,
      required: true,
      default: ''
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    structure: { // 题型 选择题：0，判断题：8，填空题：2，趣配音: 5，排序: 6，连线：7
      type: String,
      required: true,
      default: ''
    },
    body: { // 题干内容
      type: Object,
      required: true,
      default: () => {}
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
    if (this.structure === '6') {
      this.content = cloneDeep(this.body.content)
      if (REGEXPS.splitBetween.test(this.content)) {
        this.content = this.content.replace(REGEXPS.splitBetween, '')
      } else if (REGEXPS.letterBlankReg.test(this.content)) {
        this.content = this.content.replace(REGEXPS.letterBlankReg, '')
      } else {
        this.content = this.body.content
      }
    } else {
      this.content = this.body.content
    }
  },
  methods: {
    // 去左右空格
    trim(str) {
      return str.replace(/&nbsp;/g, '')
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../style/var';
.queens-play-audio{
  margin-bottom: 30px;
  padding-left: calc(50% - 22px);
}
</style>
