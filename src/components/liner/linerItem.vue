<!-- 连线项活动组件 -->
<template>
  <component :is="`${itemType}Item`" v-bind="$attrs" />
</template>

<script>
export default {
  name: 'LinerItem',
  components: {
    imgItem: () => import('./imgLinerItem'),
    audioItem: () => import('./imgLinerItem'),
    textItem: () => import('./textLinerItem')
  },
  props: {
    itemType: {
      type: String,
      default: '',
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}

}
</script>
