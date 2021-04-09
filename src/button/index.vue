<template>
  <button
    class="queens-button"
    :disabled="disabled || loading"
    :class="[
      type ? 'queens-button--' + type : '',
      size ? 'queens-button--' + size : '',
      {
        'queens-button--disabled': disabled,
        'queens-button--loading': loading,
        'queens-button--plain': plain,
        'queens-button--round': round,
        'queens-button--block': block,
      },
    ]"
    @click="handleClick"
    @touchstart="touchstart"
  >
    <div class="queens-button__content">
      <template v-if="loading">
        <div class="queens-loading queens-loading--circular queens-button__loading">
          <span class="queens-loading__spinner queens-loading__spinner--circular" style="color: currentcolor; width: 20px; height: 20px;">
            <svg viewBox="25 25 50 50" class="queens-loading__circular"><circle cx="50" cy="50" r="20" fill="none" />
            </svg>
          </span>
        </div>
        <span v-if="loadingText">{{ loadingText }}</span>
      </template>
      <template v-else>
        <i v-if="icon" class="queens-button__icon" :class="icon" />
        <span v-if="$slots.default" class="queens-button__text">
          <slot />
        </span>
      </template>
    </div>
  </button>
</template>
<script>
export default {
  name: 'QueensButton',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    icon: {
      type: String,
      default: ''
    },
    loadingText: {
      type: String,
      default: '加载中...'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    block: Boolean
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    },
    touchstart(evt) {
      this.$emit('touchstart', evt)
    }
  }
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
