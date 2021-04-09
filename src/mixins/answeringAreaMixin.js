import { Swipe, SwipeItem } from 'vant'
export default {
  components: {
    Swipe,
    SwipeItem
  },

  props: {
    options: { // 小题数组
      type: Array,
      default: () => ([])
    },
    activeIndex: { // 当前选中位置
      type: Number,
      default: 0
    },
    selectAnswerItem: {
      type: Function,
      default: () => {}
    }
  },

  data() {
    return {
      isShowSwiperIcon: false,
      initialSwipe: 0 // swipe初始化值
    }
  },

  created() {
    this.initialSwipe = this.activeIndex
    if (localStorage.getItem('isShowSwiperIcon') === null) {
      localStorage.setItem('isShowSwiperIcon', true)
    }
    localStorage.getItem('isShowSwiperIcon') === 'true' ? this.isShowSwiperIcon = true : this.isShowSwiperIcon = false
  },

  watch: {
    activeIndex: {
      handler(index) {
        if (!this.swipeTo) {
          this.$refs.mySwiper && this.$refs.mySwiper.swipeTo(index)
        }
        // 停掉popup中所有语音播放
        this.$nextTick(() => {
          if (this.$refs.materialQuestions) {
            const audios = this.$refs.materialQuestions.getElementsByTagName('audio')
            for (let i = 0; i < audios.length; i++) {
              audios[i].pause()
            }
          }
        })
      }
    }
  },

  methods: {
    // 滑动卡片后触发
    onChange(index) {
      this.swipeTo = true
      this.$emit('change-active-index', index)
      localStorage.setItem('isShowSwiperIcon', false)
      this.isShowSwiperIcon = false
      setTimeout(() => {
        this.swipeTo = false
      }, 100)
    },
    // 点击选择答案
    touchHandler(item) {
      const data = {
        content: item.content,
        contentIdx: item.contentIdx,
        optionsIndex: this.activeIndex
      }
      this.selectAnswerItem(data)
    }
  }
}
