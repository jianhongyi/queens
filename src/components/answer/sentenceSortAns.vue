<!-- 句子排序题答案 -->
<template>
  <queens-popup class="popup" v-bind="$attrs">
    <div class="sentence-sort-wrapper">
      <div :style="{'justify-content': flexPosition}" class="sentence-sort-ans">
        {{ effectiveAnswers }}
      </div>
    </div>
  </queens-popup>
</template>

<script>
import answerMixin from '../../mixins/answerMixin'
export default {
  name: 'SentenceSortAns',
  components: {},
  mixins: [answerMixin],
  props: {},
  data() {
    return {}
  },
  computed: {
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}

}
</script>
<style lang='less' scoped>
  .sentence-sort-wrapper {
    .sentence-sort-ans {
      display: flex;
      font-weight: 600;
      font-size: 18px;
    }
  }
</style>
