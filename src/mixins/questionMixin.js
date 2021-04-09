export default {
  props: {
    // footer插槽内容是否放在底部
    stayBottom: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scrollCardInnerH: 'auto',
      mainAreaH: undefined
    }
  },
  mounted() {
    // this.calScrollCardInnerH()
  },
  beforeDestroy() {
    clearTimeout(this.timerIndex)
  },
  methods: {
    calScrollCardInnerH() {
      if (!this.$slots?.footer || !this.stayBottom) {
        return
      }
      clearTimeout(this.timerIndex)
      this.timerIndex = setTimeout(() => {
        const mainAreaH = this.mainAreaStyle.height || document.querySelector('.main-area')?.clientHeight
        if (mainAreaH !== this.mainAreaH) {
          this.mainAreaH = mainAreaH
          this.calScrollCardInnerH()
        } else {
          const footerSlotH = this.$slots?.footer[0]?.elm?.offsetHeight
          const scrollCardH = this.$refs?.scrollCard?.clientHeight
          const scrollCardInnerH = document.querySelector('.scroll-card-inner')?.offsetHeight
          if (scrollCardInnerH >= scrollCardH) {
            return
          }
          if (scrollCardH && footerSlotH) {
            this.scrollCardInnerH = scrollCardH - footerSlotH
          }
        }
      }, 600)
    }
  }
}
