<!-- 对外暴露的playAudio -->
<template>
  <component :is="witchShow" v-bind="$attrs" />
</template>

<script>
export default {
  name: 'PlayAudio',
  components: {
    zjPAudio: () => import('../components/play-audio/zjPAudio'),
    zdPAudio: () => import('../components/play-audio/zdPAudio')
  },
  props: {
    templateType: { // 子题型 模版
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    isZj() {
      return this.templateType.toLowerCase().indexOf('zj') > -1
    },
    witchShow() {
      return this.isZj ? 'zjPAudio' : 'zdPAudio'
    }
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}

}
</script>
