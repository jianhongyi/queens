<template>
  <div class="queens-play-audio">
    <div v-if="url" class="playAudio" :class="{ playing: playing }">
      <span class="play-btn" @click.stop="play">
        <img v-if="playing" :src="imgs['playBtn']" alt="">
        <img v-else :src="imgs['playBtn2']" alt="">
      </span>
      <div
        v-if="showDuration"
        ref="duration"
        class="duration"
        :class="{ animation }"
        @click="onClickDuration($event)"
      >
        <span class="duration-bar" :style="{width: percent * 100 + '%'}" />
        <span
          class="duration-toggle"
          :style="{left: percent * 100 + '%'}"
          @touchstart.stop.prevent="onToggleMouseDown"
          @touchmove.stop.prevent="onMouseMove"
          @touchend.stop.prevent="onMouseUp"
          @mousedown.prevent="onToggleMouseDown"
        />
      </div>
    </div>
    <audio v-if="url" ref="audio" class="audio" :src="url" />
  </div>
</template>
<script>
import imgs from '../assets/imgs/index'
export default {
  name: 'PlayAudio2',
  props: {
    audioData: {
      type: Object,
      default: () => ({}),
      required: true
    },
    showDuration: { type: Boolean, default: true } // 是否显示进度条
  },
  data() {
    return {
      imgs,
      playing: false,
      played: false, // 拖拽或者点击的时候 是否在播放
      animation: true,
      canplay: false,
      percent: 0,
      percentNow: 0,
      startX: 0
    }
  },
  computed: {
    url() {
      return this.audioData.url || ''
    },
    duration() {
      const { unit, duration } = this.audioData
      if (unit === 'h') {
        return duration * 3600
      }
      if (unit === 'ms') {
        return duration / 1000
      }
      return 1
    }
  },
  mounted() {
    this.$refs.audio.addEventListener('play', () => {
      this.playing = true
    })
    this.$refs.audio.addEventListener('timeupdate', this.onTimeUpdate)
    this.$refs.audio.addEventListener('pause', () => {
      this.playing = false
    })
    this.$refs.audio.addEventListener('ended', () => {
      this.playing = false
      this.animation = false
      setTimeout(() => {
        this.percent = 0
        this.percentNow = 0
      }, 1000)
    })
    this.$refs.audio.addEventListener('canplay', () => {
      this.canplay = true
    })
  },
  methods: {
    // 播放
    play() {
      const audios = document.getElementsByTagName('audio')
      for (let i = 0; i < audios.length; i++) {
        audios[i].pause()
      }
      this.animation = false
      if (this.playing) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
    },
    // 暂停
    pause() {
      this.$refs.audio.pause()
    },
    onTimeUpdate() {
      this.current = this.$refs.audio.currentTime
      this.percent = this.current / this.duration
      this.percentNow = this.percent
      this.animation = true
    },
    onClickDuration(evt) {
      const percentage = evt.offsetX / this.$refs.duration.offsetWidth
      this.playPercentage(percentage)
    },
    playPercentage(percentage) {
      this.setPercentage(percentage)
      this.animation = false
      if (this.played) {
        this.$refs.audio.play()
        this.setPercentage(percentage)
      }
    },
    setPercentage(percentage) {
      this.percent = percentage
      this.current = this.duration * percentage || 0
      if (this.$refs.audio.src === this.url) {
        this.$refs.audio.currentTime = this.current
      }
    },
    onToggleMouseDown(evt) {
      this.played = this.playing
      this.startX = evt.clientX ? evt.clientX : evt.touches[0].pageX
      this.animation = false
    },
    onMouseMove(evt) {
      let distance = 0
      const startLeft = evt.clientX ? evt.clientX : evt.touches[0].pageX
      distance = startLeft - this.startX
      this.pause()
      this.percent = this.percentNow + (distance / this.$refs.duration.offsetWidth)
      if (this.percent < 0) this.percent = 0
      if (this.percent > 1) this.percent = 1
    },
    onMouseUp() {
      this.percentNow = this.percent
      this.setPercentage(this.percentNow)
      if (this.played) {
        this.$refs.audio.play()
      }
    }
  }
}
</script>
<style scoped lang='less'>
.queens-play-audio {
  .playAudio {
    display: flex;
    position: relative;
    height: 31px;
    overflow: hidden;
    .play-btn {
      width: 31px;
      height: 31px;
      background-color: rgba(77, 141, 255, .07);
      border-radius: 31px;
      text-align: center;
    }
    img {
      display: inline-block;
      width: 35%;
      margin-top: 50%;
      margin-left: 50%;
      transform: translate(-65%, -50%);
    }
    .duration {
      position: relative;
      margin: 0 10px 0 16px;
      flex: 1;
      height: 30px;
      &:after{
        position: absolute;
        top: 13px;
        content: '';
        overflow: hidden;
        width: 100%;
        height: 4px;
        background-color: rgba(77, 141, 255, .08);
      }
      &-bar {
        position: absolute;
        width: 50%;
        height: 100%;
        left: 0;
        top: 0;
        &:after{
          position: absolute;
          top: 13px;
          content: '';
          overflow: hidden;
          width: 100%;
          height: 4px;
          background-color: rgba(77, 141, 255, 1);
        }
      }
      &-toggle {
        position: absolute;
        z-index: 10;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 6px;
        height: 6px;
        background: #FFFFFF;
        border: 2px solid #4D8DFF;
        border-radius: 50%;
      }
      &.animation {
        .duration-bar {
          transition: width .15s linear;
        }
        .duration-toggle {
          transition: left .15s linear;
        }
      }
    }
  }
}
</style>
