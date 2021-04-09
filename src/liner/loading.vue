<template>
  <!-- loading -->
  <div>
    <overlay
      class="schoolmaster-loading"
      z-index="100"
      :show="loading"
    >
      <div :show="loading" class="wrapper">
        <loading
          color="#7560ff"
          type="spinner"
          size="24px"
          vertical
        />
      </div>
    </overlay>
  </div>
</template>

<script>
import { Loading, Overlay } from 'vant'
export default {
  components: {
    Loading,
    Overlay
  },
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
.van-overlay {
  background-color: rgba(255, 255, 255, 0.8);
}
.schoolmaster-loading {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2 !important;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
