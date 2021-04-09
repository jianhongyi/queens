import { REGEXPS, LINERITEMTYPE } from '../utils/constant'
import { uuid } from '../utils'
import imgs from '../assets/imgs/index'
export default {
  props: {
    // 选项数据
    option: {
      type: Object,
      default: () => ({}),
      required: true
    },
    // 焊点水平位置
    pointP: {
      type: String,
      default: 'right'
    },
    // 是否预览
    preview: {
      type: Boolean,
      default: false
    },
    // 是否可以交互
    canActive: {
      type: Boolean,
      default: true
    },
    // 是否显示小圆
    isShowCircle: {
      type: Boolean,
      default: true
    },
    templateType: {
      type: String,
      default: ''
    }
  },
  inject: ['liner'],
  data() {
    return {
      imgs
    }
  },
  mounted() {
    // const rect = this.getCircleRect()
    // const circleHeight = this.$refs?.circle.offsetHeight
    // this.option.left = rect.left + circleHeight / 2
    // this.option.top = rect.top + circleHeight / 2
  },
  computed: {
    content() {
      const { type, content, audioInfo } = this.option
      if (type === LINERITEMTYPE.img) {
        const reg = REGEXPS.imgUrlReg
        if (reg.test(content)) {
          return content.match(reg)[0]
        } else {
          return ''
        }
      } else if (type === LINERITEMTYPE.audio) {
        return audioInfo?.url
      } else {
        return content
      }
    },
    pointStyle() {
      const res = {
        [this.pointP]: 0,
        transform: `translate(${this.pointP === 'left' ? '-50%, -50%' : '50%, -50%'} )`
      }
      return res
    }
  },
  methods: {
    clickHandler() {
      if (!this.canActive || this.preview) {
        return
      }
      const selectedArr = this.liner.selectedArr
      if (selectedArr.length >= 2) {
        return
      }
      if (selectedArr.length === 1) {
        if (selectedArr.includes(this.option)) {
          this.liner.selectedArr.forEach(item => {
            this.resetOption(item)
          })
          this.liner.selectedArr = []
          return
        } else if (selectedArr[0]?.groupIdx === this.option.groupIdx) {
          return
        }
      }
      // 先获取到最外层组件group的相对位置，然后再获取当前选中项的当前位置。算出canvas中的点相对位置。
      // 不能在顶层画线的时候才算。因为选中第一个后滚动页面相对位置发生了改变。
      this.liner.caculateCanvasSize() // 每次点击选项都重新设置canvas高度，里面有判断高度一致不重新设置
      const groupPostionInfo = this.liner.getRroupPoint()
      const rect = this.getCircleRect()
      const circleHeight = this.$refs?.circle.offsetHeight
      this.option.x = parseInt((rect.left + circleHeight / 2) - groupPostionInfo.left)
      this.option.y = parseInt((rect.top + circleHeight / 2) - groupPostionInfo.top)
      this.option.feExtData = `${this.option.x},${this.option.y}`
      this.option.isSelected = !this.option.isSelected
      if (this.option.isSelected) { // 增加
        if (this.option.uid || this.liner?.allOptions[this.option?.uid]?.length) {
          return
        }
        if (!selectedArr.length) {
          this.option.uid = uuid(this.option.contentIdx)
          selectedArr.push(this.option)
        } else if (selectedArr.length === 1) {
          const alreadySelected = selectedArr[0]
          if (alreadySelected.groupIdx !== this.option.groupIdx) {
            this.option.uid = alreadySelected.uid
            selectedArr.push(this.option)
          }
        }
      } else { // 取消
        const allOptions = this.liner.allOptions
        const { uid } = this.option
        const itemsArr = allOptions[uid]
        if (Array.isArray(itemsArr)) {
          itemsArr.forEach(item => {
            this.resetOption(item)
          })
          allOptions[uid] = []
          delete allOptions[uid]
          this.liner.drawAllLines(this.liner.allOptions, false)
        } else {
          this.liner.selectedArr.forEach(item => {
            this.resetOption(item)
          })
          this.liner.selectedArr = []
        }
      }
    },
    // 初始化数据
    resetOption(option) {
      option.uid = null
      option.selectStyle = {}
      option.isSelected = false
      option.left = null
      option.top = null
    },
    // 获取circle的react信息
    getCircleRect() {
      return this.$refs?.circle.getBoundingClientRect()
    }
  }
}
