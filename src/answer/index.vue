<!-- 答案和解析区域组件 -->
<template>
  <div v-if="isZj" class="zj-answer-wrapper">
    <component
      :is="'zjAns'"
      ref="targetOption"
      :template-type="templateType"
      v-bind="$attrs"
      class="answer"
    />
  </div>
  <div v-else>
    <component
      :is="templateType"
      ref="targetOption"
      :template-type="templateType"
      :is-collapsed="isCollapsed"
      :explain="explain"
      v-bind="$attrs"
      class="answer"
      v-on="$listeners"
    />
    <!-- <explain v-if="showExplain" v-bind="$attrs" :explain="explain" class="explain" /> -->
  </div>
</template>

<script>
import imgs from '../assets/imgs/index'
export default {
  name: 'QueensAnswer',
  components: {
    textSelect: () => import('../components/answer/textSelectAns'),
    imgSelect: () => import('../components/answer/imgSelectAns'),
    audioSelect: () => import('../components/answer/audioSelectAns'),
    YNJudge: () => import('../components/answer/ynJudgeAns'),
    TFJudge: () => import('../components/answer/tfJudgeAns'),
    numFill: () => import('../components/answer/numFillAns'),
    wordFill: () => import('../components/answer/wordFillAns'),
    letterFill: () => import('../components/answer/wordFillAns'),
    imgSort: () => import('../components/answer/imgSortAns'),
    sentenceSort: () => import('../components/answer/sentenceSortAns'),
    textSort: () => import('../components/answer/sentenceSortAns'),
    letterSort: () => import('../components/answer/sentenceSortAns'),
    textLine: () => import('../components/answer/linerAns'),
    imgTextLine: () => import('../components/answer/linerAns'),
    audioTextLine: () => import('../components/answer/linerAns'),
    imgLine: () => import('../components/answer/linerAns'),
    audioImgLine: () => import('../components/answer/linerAns'),
    selectFillComplex: () => import('../components/answer/selectFillComplexAns'),
    readFillComplex: () => import('../components/answer/selectFillComplexAns'),
    clozeFillComplex: () => import('../components/answer/clozeFillComplexAns'),
    readSelectComplex: () => import('../components/answer/readSelectComplexAns'),
    readJudgeComplex: () => import('../components/answer/readSelectComplexAns'),
    explain: () => import('../components/explain/index'),
    zjAns: () => import('../components/answer/zjAns')
  },

  props: {
    // 模板类型
    templateType: {
      type: String,
      default: ''
    },
    // 答案解析
    explain: {
      type: Object,
      default: () => ({}),
      required: false
    },
    // 是否显示解析
    showExplain: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isCollapsed: false,
      imgs
    }
  },

  computed: {
    hasExplain() {
      return this.explain && this.explain.content
    },
    isZj() {
      return this.templateType.toLowerCase().indexOf('zj') > -1
    }
  }
}
</script>
