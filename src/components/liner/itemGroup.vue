<!-- 连线题块 -->
<template>
  <div class="liner-item-wrapper">
    <liner-item
      v-for="(option) in options"
      :key="option.contentIdx"
      :option="option"
    />
  </div>
</template>

<script>
export default {
  name: 'LinerItem',
  components: {
    linerItem: () => import('./linerItem.vue')
  },
  props: {
    options: {
      type: Array,
      default: () => [],
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
