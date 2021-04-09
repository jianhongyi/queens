<!-- popup弹出层组件 -->
<template>
  <div
    ref="popup"
    :class="`popup-wrapper ${moveing} ${isMobile ? 'is-mobile' : 'is-pc'}`"
    :style="`height: ${popupHeight}px; max-height: ${maxHeight}px`"
  >
    <!-- 按钮 -->
    <slot name="popupButton">
      <div
        class="popup-button"
        @touchstart="startMoveAreaBtn($event)"
        @touchmove="moveAreaBtn($event)"
        @touchend="endMoveAreaBtn"
        @touchcancel="endMoveAreaBtn"
        @click="showHide($event)"
      >
        <img class="popup-guaijiao" :src="imgs['guaijiao']">
        <i :class="`popup-decorate-icon iconfont ${decorateIconClass}`" />
        <span class="popup-button-text">{{ buttonText }}</span>
        <i :class="`popup-button-icon iconfont ${interactiveIconClass}`" />
      </div>
    </slot>
    <!-- 内容插槽 -->
    <div
      ref="popupContent"
      class="popup-content"
      @touchstart="startMoveContentArea"
      @touchend="endMoveContentArea"
      @touchcancel="endMoveContentArea"
    >
      <div v-if="isShowSwiperIcon" class="popup-tips">
        <em>滑动试试</em>
        <img :src="imgs['swiper']">
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import imgs from '../assets/imgs/index'
export default {
  name: 'QueensPopup',

  inject: {
    // 底部需要留白，传入需要加留白的组件ref值
    refClassName: {
      default: null
    },
    // 底部需要留白，传入容器组件的this
    thisComponent: {
      default: null
    },
    // 底部需要留白，直接传入dom节点
    setDomNode: {
      default: null
    }
  },

  props: {
    buttonText: { // 按钮文案
      type: String,
      default: '正确答案'
    },
    decorateIconClass: { // 修饰按钮icon
      type: String,
      default: 'iconzhengquedaan'
    },
    interactiveIconClass: { // 交互按钮icon
      type: String,
      default: 'iconhuadong'
    },
    initHeight: { // 初始化内容高度
      type: Number,
      default: 0
    },
    isStopAudios: { // 拖拽时 收起时 是否停掉音频播放
      type: Boolean,
      default: true
    },
    isCanClickShowHide: { // 点击按钮是否可以展开收起
      type: Boolean,
      default: true
    },
    isUnfold: { // 控制展开收起
      type: Boolean,
      default: false
    },
    isShowSwiperIcon: { // 是否展示滑动试试按钮
      type: Boolean,
      default: false
    },
    buttomPad: {
      type: [String, Number],
      default: 30
    }
  },

  data() {
    return {
      isMobile: true,
      timer: null,
      imgs,
      maxHeight: 100, // 内容最大高
      popupHeight: 0, // 弹出层内容高度
      clientY: 0, // touch Y轴坐标
      moveing: '' // 移动中添加状态
    }
  },

  watch: {
    // 监听高度 修改祖父组件下边距
    popupHeight: {
      handler(newV, oldV) {
        if (this.thisComponent || this.setDomNode) {
          let parent = null
          if (this.setDomNode) {
            parent = this.setDomNode.getNode()
          } else {
            parent = this.refClassName ? this.thisComponent.$refs[this.refClassName] : this.thisComponent
            parent = parent && parent.$el
          }
          if (parent && parent.style) { // 父节点存在
            const childrenArr = parent.getElementsByClassName('popup-node')
            if (!childrenArr.length) {
              const node = document.createElement('div')
              node.className = 'popup-node'
              parent.appendChild(node)
            }
            childrenArr[0].style.height = newV + 'px'
          }
          if (this.popupHeight === 0) {
            this.isStopAudios && this.stopAudios()
          }
        }
      },
      immediate: true
    },
    isUnfold: {
      handler(newV, oldV) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          if (newV) {
            this.$nextTick(() => {
              this.popupHeight = this.getHeightUnfold(this.$refs.popupContent)
              // 移动端动画抖动问题
              this.$refs.popup.style.boxShadow = 'none'
              setTimeout(() => {
                this.$refs.popup.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.05)'
              }, 500)
            })
          } else {
            this.popupHeight = 0
          }
        }, 300)
      },
      immediate: true
    }
  },

  mounted() {
    this.isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
    this.popupHeight = this.initHeight
    this.maxHeight = !this.isMobile ? 320 : (window.screen.availHeight || document.body.clientHeight) - 320
  },

  methods: {
    // 点击显示隐藏
    showHide(event) {
      if (this.moveing === 'moveing') return
      if (!this.isCanClickShowHide) return false
      if (this.popupHeight === 0) {
        this.popupHeight = this.getHeightUnfold(this.$refs.popupContent)
      } else {
        this.popupHeight = 0
      }
      // 移动端动画抖动问题
      this.$refs.popup.style.boxShadow = 'none'
      setTimeout(() => {
        this.$refs.popup.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.05)'
      }, 500)
    },
    // 获取dom节点高度 如果大于maxHeight取maxHeight
    getHeightUnfold(dom) {
      const fakeNode = dom.cloneNode(true)
      fakeNode.style.position = 'absolute'
      // 先插入再改样式，以防元素属性在createdCallback中被添加覆盖
      dom.parentNode.insertBefore(fakeNode, dom)
      fakeNode.style.height = 'auto'
      fakeNode.style.visibility = 'hidden'
      const height = fakeNode.getBoundingClientRect().height + +this.buttomPad
      dom.parentNode.removeChild(fakeNode)
      return height > this.maxHeight ? this.maxHeight : height
    },
    // 拖拽按钮改变区域大小
    startMoveAreaBtn(event) {
      this.clientY = event.touches[0].clientY
      this.startMoveContentArea()
    },
    endMoveAreaBtn() {
      this.endMoveContentArea()
      setTimeout(() => {
        this.moveing = ''
      }, 100)
    },
    moveAreaBtn(event) {
      this.moveing = 'moveing'
      const currentClientY = event.touches[0].clientY
      const distance = currentClientY - this.clientY
      this.clientY = currentClientY
      const height = this.popupHeight - distance
      if (height > this.maxHeight) {
        this.popupHeight = this.maxHeight
      } else if (height < 0) {
        this.popupHeight = 0
      } else {
        this.popupHeight = height
      }
      event.preventDefault()
    },
    // 防止拖拽及内部滚动影响外层滚动
    startMoveContentArea() {
      document.body.style.overflow = 'hidden'
    },
    endMoveContentArea() {
      setTimeout(() => {
        document.body.style.overflow = 'auto'
      }, 10)
    },
    // 停掉所有语音播放
    stopAudios() {
      this.$nextTick(() => {
        const audios = this.$refs.popup.getElementsByTagName('audio')
        for (let i = 0; i < audios.length; i++) {
          audios[i].pause()
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/var';
  .popup-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    box-sizing: content-box !important;
    padding: 30px 16px 76px;
    background-color: #fff;
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
    transition: height ease .5s;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    .popup-tips{
      position: absolute;
      top: 25px;
      right: 2px;
      z-index: 2;
      height: 29px;
      line-height: 28px;
      background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
      border-radius: 18px;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.03);
      em{
        margin: 0px 7px 0px 9px;
        font-style: normal;
        font-size: 12px;
        color: #CFD2D5;
        line-height: 17px;
      }
      img{
        position: relative;
        top: 2px;
        height: 14px;
        animation: tryMove 1s ease;
        animation-iteration-count: 8;
      }
    }
    .popup-content{
      position: relative;
      height: 100%;
      overflow: auto;
    }
    .popup-content::-webkit-scrollbar {
      display: none !important;
    }
    .popup-button {
      position: absolute;
      top: -30px;
      right: 0;
      z-index: 0;
      width: auto;
      padding: 14px 17px 14px 0px;
      background-color: inherit;
      border-top-right-radius: 14px;
      box-shadow: 0px -6px 6px rgba(0, 0, 0, 0.01);
      font-size: 14px;
      color: @commonColor;
      background: #ffffff;
      .popup-guaijiao{
        position: absolute;
        top: -10px;
        left: -40px;
        height: 41px;
      }
      // &::before {
      //   content: '';
      //   position: absolute;
      //   top: 0px;
      //   z-index: -1;
      //   left: -10px;
      //   width: 11px;
      //   height: 12px;
      //   background-color: inherit;
      //   border-top-left-radius: 6px;
      //   transform: perspective(7px) scale(1, 1) rotateX(28deg);
      //   transform-origin: top right;
      //   box-shadow: -6px -4px 4px rgba(0, 0, 0, 0.012);
      // }
      // &::after {
      //   content: '';
      //   position: absolute;
      //   bottom: 0px;
      //   left: -90px;
      //   width: 90px;
      //   height: 23px;
      //   background-color: inherit;
      //   pointer-events: none;
      // }
      .popup-decorate-icon{
        position: relative;
        left: 2px;
        font-size: 24px;
      }
      .popup-button-text{
        position: relative;
        top: -3px;
        margin: 0px 5px 0px 8px;
        font-weight: bold;
      }
      .popup-button-icon{
        position: relative;
        top: -3px;
      }
    }
    .mask{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
    }
    .popup-inner::-webkit-scrollbar {
      display: none !important;
    }
    /deep/ img {
      max-width: 90% !important;
    }
  }
  .is-pc{
    position: absolute;
  }
  .moveing {
    transition: none;
  }
  @keyframes tryMove
  {
    from {
      right: -25px;
      opacity: 0;
    }
    to {
      right: 0px;
      opacity: 1;
    }
  }
</style>
