<!-- 连线器 -->
<template>
  <div class="liner-wrapper">
    <canvas ref="canvas" class="canvas" />
    <div ref="group" class="group">
      <div
        v-for="(ops, index) in optionsArr"
        :key="index"
        class="group-item"
      >
        <liner-item
          v-for="(option) in ops"
          :ref="+option.groupIdx===1 ? 'optionLeft' : 'optionRight'"
          :key="option.groupIdx"
          :option="option"
          :item-type="option.type || 'img'"
          :point-p="+option.groupIdx===1 ? 'right' : +option.groupIdx===2 ? 'left' : 'right'"
          :preview="preview"
          :can-active="canActive"
          v-bind="$attrs"
        />
      </div>
    </div>
    <loading :loading="loading" />
  </div>
</template>

<script>
import { addListener, removeListener } from '../utils/listenner.js'
import Loading from './loading'
import { COLORS } from '../utils/constant.js'
import { cloneDeep } from 'lodash'
import { uuid } from '../utils'
export default {
  name: 'QueensLiner',
  components: {
    linerItem: () => import('../components/liner/linerItem'),
    Loading
  },
  provide() {
    return {
      liner: this
    }
  },
  props: {
    // 连线项数据
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    // 用户传入的颜色集合
    colors: {
      type: Array,
      default: () => []
    },
    // 是否可以交互
    canActive: {
      type: Boolean,
      default: true
    },
    // 是否预览
    preview: {
      type: Boolean,
      default: false
    },
    // 答案
    answers: {
      type: Array,
      default: () => ([]),
      required: true
    },
    // 用戶选择结果集合
    userAnswer: {
      type: Object,
      default: () => ({}),
      required: false
    }
  },
  data() {
    return {
      // 颜色下标
      colorIndex: 0,
      // 选择项总体数据对象
      allOptions: {},
      // 选择项数组
      selectedArr: [],
      // 当前样式对象
      currentStyle: null,
      // canvas 宽高
      canvasSize: {
        width: '100%',
        height: '1000'
      },
      // 已选颜色下标集合
      selectColorArr: [],
      ratio: this.getPixelRatio(),
      groupListener: null,
      loading: false
    }
  },
  computed: {
    options1() {
      return this.options.filter(item => +item.groupIdx === 1)
    },
    options2() {
      return this.options.filter(item => +item.groupIdx === 2)
    },
    optionsArr() {
      const res = []
      const len = Math.min(this.options1.length, this.options2.length)
      for (let i = 0; i < len; i++) {
        res.push([this.options1[i], this.options2[i]])
      }
      return res
    },
    // canvas对象
    canvas() {
      return this.$refs?.canvas
    },
    ctx() {
      return this.canvas.getContext('2d')
    }
  },
  watch: {
    selectedArr: {
      handler(value) {
        this.generatorColorObj(value)
      },
      deep: true
    },
    preview: {
      handler(value) {
        if (value) {
          this.showResult()
        }
      }
    },
    allOptions: {
      handler(value) {
        const userAnswer = []
        const feExtData = {}
        // Object.values(value).forEach(item => {
        //   userAnswer.push(item.map(e => {
        //     feExtData[e.contentIdx] = e.feExtData
        //     return e.contentIdx
        //   }))
        // })
        for (const key in value) {
          const item = value[key]
          userAnswer.push(item.map(e => {
            feExtData[e.contentIdx] = e.feExtData
            return e.contentIdx
          }))
        }
        this.$set(this.userAnswer, 'answers', userAnswer)
        this.$set(this.userAnswer, 'feExtData', feExtData)
      },
      deep: true
    }
  },
  created() {
    if (!this.userAnswer.answers) {
      this.$set(this.userAnswer, 'answers', [])
    }
    if (!this.userAnswer.score) {
      this.$set(this.userAnswer, 'score', 0)
    }
    if (!this.userAnswer.feExtData) {
      this.$set(this.userAnswer, 'feExtData', {})
    }
  },
  mounted() {
    if (this.preview) {
      this.showResult(true)
    }
  },
  destroyed() {
    removeListener(this.groupListener)
    this.groupListener = null
    console.log('当前组件已销毁')
  },
  methods: {
    // 随机生成颜色对象
    generatorColorObj(arr) {
      if (arr.length > 2) {
        return
      }
      let colorObj = {}
      if (this.currentStyle && Object.keys(this.currentStyle).length) {
        colorObj = this.currentStyle
      } else {
        const colors = this.colors.length ? this.colors : COLORS
        this.colorIndex >= colors.length && (this.colorIndex = 0)
        colorObj = this.currentStyle = colors[this.colorIndex++] || color[0]
      }
      this.setSelectItemStyle(arr, colorObj)
      if (arr.length === 2) {
        const { uid } = arr[0] || {}
        if (uid) {
          this.selectedArr.sort((a, b) => a.groupIdx - b.groupIdx)
          this.$set(this.allOptions, uid, this.selectedArr)
          this.drawLine(this.selectedArr, colorObj, false)
          this.selectedArr = []
          this.currentStyle = {}
        }
      }
    },
    // 给每一个选择的项添加样式对象
    setSelectItemStyle(arr, colorObj, isSelectSet = false, isUidSet = false, isResultSet = false) {
      arr.forEach(item => {
        this.$set(item, 'selectStyle', colorObj)
        isSelectSet && this.$set(item, 'isSelected', false)
        isUidSet && this.$set(item, 'uid', null)
        isResultSet && this.$set(item, 'isResult', null)
      })
    },
    // 计算canvas画布宽高
    // 通过用户的点击了选项时才去计算canvas高度。因为用户在操作的是，基本上都是图片加载出来了。并且每次点击都判断获取到的高度和原来设置的是否一致
    // 如果不一致从新设置。保证了canvas始终和group高度一致。
    caculateCanvasSize(callback) {
      const groupDom = this.$refs['group']
      if (!groupDom || !this.options.length) {
        return
      }
      const width = groupDom?.offsetWidth
      const height = groupDom?.offsetHeight
      if (+this.canvasSize.height !== height || +this.canvasSize.width !== width) {
        this.canvasSize.width = width
        this.canvasSize.height = height
        this.canvas.width = width * this.ratio
        this.canvas.height = height * this.ratio
        this.canvas.style.width = width + 'px'
        this.canvas.style.height = height + 'px'
        typeof callback === 'function' && callback()
      }
    },
    // 画线
    drawLine(arr, colorObj, isDelay) {
      const time = isDelay ? 600 : 0
      setTimeout(() => {
        const point0 = { x: arr[0].x * this.ratio, y: arr[0].y * this.ratio }
        const point1 = { x: arr[1].x * this.ratio, y: arr[1].y * this.ratio }
        if (point0 && point1) {
          this.ctx.beginPath()
          this.ctx.lineWidth = 2 * this.ratio
          this.ctx.moveTo(point0.x, point0.y)
          this.ctx.lineTo(point1.x, point1.y)
          this.ctx.strokeStyle = colorObj.bd
          this.ctx.stroke()
        }
      }, time)
    },
    // 清晰度
    getPixelRatio() {
      var backingStore = window.backingStorePixelRatio ||
          window.webkitBackingStorePixelRatio ||
          window.mozBackingStorePixelRatio ||
          window.msBackingStorePixelRatio ||
          window.oBackingStorePixelRatio ||
          window.backingStorePixelRatio || 1
      return (window.devicePixelRatio || 1) / backingStore
    },
    // 获取点信息
    getRroupPoint() {
      const groupRect = this.$refs['group'].getBoundingClientRect()
      return groupRect
    },
    // 某一组取消选择后重新画线
    drawAllLines(showOptions) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      console.log('画一组线')
      Object.keys(showOptions).forEach(key => {
        const selectedArr = showOptions[key]
        const colorObj = selectedArr[0]?.selectStyle
        this.drawLine(selectedArr, colorObj)
      })
    },
    // 判断作答结果
    showResult(type) {
      console.log('this.userAnswer', this.userAnswer)
      if (!this.userAnswer?.answers?.length) {
        return
      }
      this.$nextTick(() => {
        const showOptions = this.getOptionsByContentId(this.userAnswer?.answers)
        showOptions.forEach(options => {
          options.sort((a, b) => a.groupIdx - b.groupIdx)
        })
        showOptions.sort((a, b) => a[0].contentIdx - b[0].contentIdx)
        const answers = this.answers
        answers.sort((a, b) => a[0] - b[0])
        showOptions.forEach((sOptions, index) => {
          if (this.isCorTrue(sOptions, answers[index])) {
            sOptions.forEach(item => {
              item.isResult = true
              item.isTure = true
              item.selectStyle = {
                bg: '#F0FAF2',
                bd: '#67CF84'
              }
            })
          } else {
            sOptions.forEach(item => {
              item.isResult = true
              item.isTure = false
              item.selectStyle = {
                bg: '#FEF0EF',
                bd: '#F96D5F'
              }
            })
          }
        })
        const obj = {}
        showOptions.forEach(item => {
          obj[uuid()] = item
        })
        console.log(obj, '----1----------2--')
        if (type) { // 查看回放
          this.initListenerFn(obj)
        } else {
          this.drawAllLines(obj)
        }
      })
    },
    // option answer添加高度监听
    initListenerFn(obj) {
      if (this.$refs.group) {
        console.log('进入initListenerFn')
        this.groupListener = this.$refs.group
        this.loading = true
        addListener(this.$refs.group, (element) => {
          let time = 10
          if (element) { // 支持监听的设备
            const groupPostionInfo = element.getBoundingClientRect()
            if (!groupPostionInfo.width) return
            time = 500
          } else {
            time = 2000
          }
          setTimeout(() => {
            this.caculateCanvasSize(() => { // 只需要等到canvas宽高发生改变时才重画线
              this.loading = false
              this.getPoint()
              this.drawAllLines(obj)
            })
          }, time)
        })
      }
    },
    // 从新获取每个选项卡的位置信息，用于服务端回显
    getPoint() {
      if (this.$refs.optionLeft && this.$refs.optionRight && this.$refs.group) {
        const groupPostionInfo = this.$refs.group.getBoundingClientRect()
        this.$refs.optionLeft.map(item => {
          const rect = item.$el.getBoundingClientRect ? item.$el.getBoundingClientRect() : {}
          const circleWidth = item.$el.offsetWidth
          const circleHeight = item.$el.offsetHeight
          const x = parseInt((rect.left + circleWidth) - groupPostionInfo.left)
          const y = parseInt((rect.top + circleHeight / 2) - groupPostionInfo.top)
          this.$set(item.$attrs.option, 'x', x) // 为每个option塞入一个坐标
          this.$set(item.$attrs.option, 'y', y)
        })
        this.$refs.optionRight.map(item => {
          const rect = item.$el.getBoundingClientRect ? item.$el.getBoundingClientRect() : {}
          const circleHeight = item.$el.offsetHeight
          const x = parseInt(rect.left - groupPostionInfo.left)
          const y = parseInt((rect.top + circleHeight / 2) - groupPostionInfo.top)
          this.$set(item.$attrs.option, 'x', x)
          this.$set(item.$attrs.option, 'y', y)
        })
      }
    },
    // 判断用户答案和正确答案对应项是否对的上
    isCorTrue(sOptions, answers) {
      let result = true
      sOptions.forEach((item, index) => {
        if ((item?.contentIdx && answers[index]) && (item.contentIdx !== answers[index])) {
          result = false
        }
      })
      return result
    },
    // 通过用户答案中的contentIdx从options中找到对应的项
    getOptionsByContentId(answers) {
      const res = []
      answers.forEach((answerG, index) => {
        const arr = []
        answerG.forEach((contentIdx, inx) => {
          const target = this[`options${inx + 1}`].find(item => {
            return item.contentIdx === contentIdx
          })
          target && (arr[inx] = target)
        })
        res[index] = arr
      })
      return res
    },
    // 校验答案
    checkAnswer(cb) {
      let answerResult = true
      const answers = this.answers
      const userAnswer = this.userAnswer?.answers
      answers.sort((a, b) => a[0] - b[0])
      userAnswer.sort((a, b) => a[0] - b[0])
      userAnswer.forEach((item, index) => {
        if (item.toString() !== answers[index].toString()) {
          answerResult = false
        }
      })
      cb && cb(cloneDeep(this.userAnswer), cloneDeep(this.answers), answerResult)
    },
    // 重置
    reset() {
      if (!this.canActive || this.preview) {
        return
      }
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.setSelectItemStyle(this.options, {}, true, true, true)
      this.setSelectItemStyle(this.selectedArr, {}, true, true, true)
      this.allOptions = {}
      this.selectedArr = []
    }
  }
}
</script>
<style lang='less' scoped>
  @import '../style/components/liner/index.less';
</style>
