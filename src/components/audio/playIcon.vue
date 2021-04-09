<template>
  <div class="playAudio" :class="{ playing: playing }">
    <img
      class="play_audio3"
      :src="imgs['playAudio3']"
      alt
      @click.stop="play"
    >
    <img :src="imgs['playAudio2']" alt @click.stop="play">
  </div>
</template>

<script>
import imgs from '../../assets/imgs/index'
export default {
  props: {
    playing: {
      type: Boolean,
      default: false,
      required: true
    },
    play: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      imgs
    }
  }
}
</script>

<style scoped lang='less'>
.queens-play-audio {
  .playAudio {
    position: relative;
    height: 31px;
    width: 40px;
    overflow: hidden;
    img {
      position: absolute;
      height: 100% !important;
    }
  }
  .playing {
    .play_audio3 {
      left: -40px;
      border-radius: 0% 50% 50% 0%;
      animation: fadeInOut 1s infinite;
    }
  }
  @keyframes fadeInOut {
    0% {
      opacity: 0;
      left: -40px;
    }
    50% {
      opacity: 0;
      left: 0px;
    }
    100% {
      opacity: 1;
      left: 0px;
    }
  }
}
</style>
