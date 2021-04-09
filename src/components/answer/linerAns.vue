<!-- 连线题答案和解析 -->
<template>
  <queens-popup class="popup" v-bind="$attrs">
    <div class="liner-ans-wrapper">
      <div ref="group" class="group">
        <template v-if="effectiveAnswers.length">
          <div
            v-for="(ops, index) in effectiveAnswers"
            :key="index"
            class="group-item"
          >
            <liner-item
              v-for="(option) in ops"
              :key="option.groupIdx"
              :option="option"
              :item-type="option.type || 'img'"
              :point-p="+option.groupIdx===1 ? 'right' : +option.groupIdx===2 ? 'left' : 'right'"
              :is-show-circle="false"
              :can-active="false"
              v-bind="$attrs"
            />
            <div class="con-line" />
          </div>
        </template>
        <template v-else>
          <div>答案中的数据存在问题</div>
        </template>
      </div>
    </div>
  </queens-popup>
</template>

<script>
import answerMixin from '../../mixins/answerMixin'
export default {
  name: 'LinerAns',
  components: {
    linerItem: () => import('../liner/linerItem')
  },
  mixins: [answerMixin],
  provide() {
    return {
      liner: this
    }
  },
  props: {
    // 连线项数据
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    colors: {
      type: Array,
      default: () => []
    },
    // 答案
    answers: {
      type: Array,
      default: () => ([]),
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    options1() {
      return this.options.filter(item => +item.groupIdx === 1)
    },
    options2() {
      return this.options.filter(item => +item.groupIdx === 2)
    }
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}

}
</script>
<style lang='less' scoped>
  @import '../../style/components/answer/linerAns.less';
</style>
