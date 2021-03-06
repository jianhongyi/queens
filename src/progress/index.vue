<template>
  <div
    v-if="percentage != undefined && percentage != null && percentage <= 100"
    class="queens-progress"
    :class="[
      'queens-progress--' + type,
      status ? 'is-' + status : '',
      {
        'queens-progress--without-text': !showText,
        'queens-progress--text-inside': textInside,
      }
    ]"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div v-if="type === 'line'" class="queens-progress-bar">
      <div class="queens-progress-bar__outer" :style="{height: strokeWidth + 'px'}">
        <div class="queens-progress-bar__inner" :style="barStyle">
          <div v-if="showText && textInside" class="queens-progress-bar__innerText">
            <slot>{{ content }}</slot>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="queens-progress-circle" :style="{height: width + 'px', width: width + 'px'}">
      <svg viewBox="0 0 100 100">
        <path
          class="queens-progress-circle__track"
          :d="trackPath"
          stroke="#e5e9f2"
          :stroke-width="relativeStrokeWidth"
          fill="none"
          :style="trailPathStyle"
        />
        <path
          class="queens-progress-circle__path"
          :d="trackPath"
          :stroke="stroke"
          fill="none"
          :stroke-linecap="strokeLinecap"
          :stroke-width="percentage ? relativeStrokeWidth : 0"
          :style="circlePathStyle"
        />
      </svg>
    </div>
    <div
      v-if="showText && !textInside"
      class="queens-progress__text"
      :style="{fontSize: progressTextSize + 'px'}"
    >
      <template v-if="!status">
        <slot>{{ content }}</slot>
      </template>
      <i v-else :class="`van-icon van-icon-${iconClass}`" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'QueensProgress',
  props: {
    type: {
      type: String,
      default: 'line',
      validator: val => ['line', 'circle', 'dashboard'].indexOf(val) > -1
    },
    percentage: {
      type: Number,
      default: 0,
      required: true
    },
    status: {
      type: String,
      validator: val => ['success', 'exception', 'warning'].indexOf(val) > -1
    },
    strokeWidth: {
      type: Number,
      default: 8
    },
    strokeLinecap: {
      type: String,
      default: 'round'
    },
    textInside: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 126
    },
    showText: {
      type: Boolean,
      default: true
    },
    color: {
      type: [String, Array, Function],
      default: ''
    },
    format: {
      type: Function
    }
  },
  computed: {
    barStyle() {
      const style = {}
      style.width = this.percentage + '%'
      style.background = this.getCurrentColor(this.percentage)
      return style
    },
    relativeStrokeWidth() {
      return (this.strokeWidth / this.width * 100).toFixed(1)
    },
    radius() {
      if (this.type === 'circle' || this.type === 'dashboard') {
        return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10)
      } else {
        return 0
      }
    },
    trackPath() {
      const radius = this.radius
      const isDashboard = this.type === 'dashboard'
      return `
          M 50 50
          m 0 ${isDashboard ? '' : '-'}${radius}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '-' : ''}${radius * 2}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '' : '-'}${radius * 2}
          `
    },
    perimeter() {
      return 2 * Math.PI * this.radius
    },
    rate() {
      return this.type === 'dashboard' ? 0.75 : 1
    },
    strokeDashoffset() {
      const offset = -1 * this.perimeter * (1 - this.rate) / 2
      return `${offset}px`
    },
    trailPathStyle() {
      return {
        strokeDasharray: `${(this.perimeter * this.rate)}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset
      }
    },
    circlePathStyle() {
      return {
        strokeDasharray: `${this.perimeter * this.rate * (this.percentage / 100)}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease'
      }
    },
    stroke() {
      let ret
      if (this.color) {
        ret = this.getCurrentColor(this.percentage)
      } else {
        switch (this.status) {
          case 'success':
            ret = '#13ce66'
            break
          case 'exception':
            ret = '#ff4949'
            break
          case 'warning':
            ret = '#e6a23c'
            break
          default:
            ret = '#20a0ff'
        }
      }
      return ret
    },
    iconClass() {
      if (this.status === 'warning') {
        return 'warning'
      }
      return this.status === 'success' ? 'checked' : 'clear'
    },
    progressTextSize() {
      return this.type === 'line'
        ? 12 + this.strokeWidth * 0.4
        : this.width * 0.111111 + 2
    },
    content() {
      if (typeof this.format === 'function') {
        return this.format(this.percentage) || ''
      } else {
        return `${this.percentage}%`
      }
    }
  },
  methods: {
    getCurrentColor(percentage) {
      if (typeof this.color === 'function') {
        return this.color(percentage)
      } else if (typeof this.color === 'string') {
        return this.color
      } else {
        return this.getLevelColor(percentage)
      }
    },
    getLevelColor(percentage) {
      const colorArray = this.getColorArray().sort((a, b) => a.percentage - b.percentage)

      for (let i = 0; i < colorArray.length; i++) {
        if (colorArray[i].percentage > percentage) {
          return colorArray[i].color
        }
      }
      return colorArray[colorArray.length - 1].color
    },
    getColorArray() {
      const color = this.color
      const span = 100 / color.length
      return color.map((seriesColor, index) => {
        if (typeof seriesColor === 'string') {
          return {
            color: seriesColor,
            progress: (index + 1) * span
          }
        }
        return seriesColor
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
