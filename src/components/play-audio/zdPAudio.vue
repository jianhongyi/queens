<!-- 单题作答/预览模式playAudio -->
<template>
  <div class="queens-play-audio">
    <play-icon v-if="url && type==='playIcon'" :playing="playing" :play="play" />
    <audio v-if="url" ref="audio" class="audio" :src="url" :autoplay="autoplay" />
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  name: 'ZdPAudio',
  components: {
    PlayIcon: () => import('../audio/playIcon')
  },
  props: {
    type: { // 播放器类型 默认图标播放
      type: String,
      default: 'playIcon'
    },
    url: { // 资源url
      type: String,
      default: '',
      required: true
    },
    autoplay: { // 是否自动播放
      type: Boolean,
      default: false
    },
    clickType: { // 点击从头播放 点击改变状态暂停／播放
      type: String,
      default: 'play'
    },
    loop: { // 是否循环播放
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      playing: false, // 播放状态
      canplay: true // 资源是否可播放
    }
  },
  mounted() {
    const doc = this.$refs.audio
    doc.addEventListener('play', () => {
      this.playing = true
    })
    doc.addEventListener('pause', () => {
      this.playing = false
    })
    doc.addEventListener('ended', () => {
      if (this.loop) {
        this.playing = true
        this.play()
      } else {
        this.playing = false
      }
    })
    // canplay存在兼容问题 使用error监听资源是否加载成功
    doc.addEventListener('canplay', () => {
      this.canplay = true
    })
    doc.addEventListener('error', event => {
      this.canplay = event.target.tagName !== 'AUDIO'
    }, true)
  },
  methods: {
    // 播放
    play() {
      const doc = this.$refs.audio
      const audios = document.getElementsByTagName('audio')
      for (let i = 0; i < audios.length; i++) {
        audios[i].pause()
      }
      if (this.canplay) {
        if (this.clickType === 'play') {
          doc.currentTime = 0
          doc.play()
        } else if (this.clickType === 'changeState') {
          if (this.playing) {
            doc.pause()
          } else {
            doc.play()
          }
        }
      } else {
        Toast('音频资源暂不可用')
      }
    },
    // 暂停
    pause() {
      this.$refs.audio.pause()
    }
  }
}
</script>

<style scoped lang='less'>
</style>
