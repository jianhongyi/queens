<!-- 题目说明 -->
<template>
  <div v-if="descContent" :class="['description-wrap', wrapperClass]" :style="wrapperStyle">
    <div :class="['description-inner', borderBottom ? 'inner-border-bottom' : '', innerClass]" :style="[innerStyle, {'align-items': icon ? 'center' : 'baseline'}]">
      <span class="description-icon">
        <slot name="descIcon">
          <i v-if="icon" :class="`van-icon van-icon-${icon}`" />
          <template v-if="!icon" class="icon-wrap">
            <span class="light-circle" />
            <span class="weight-circle" />
          </template>
        </slot>
      </span>
      <span class="description-text" :style="{ color: textColor }" v-html="descContent" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'QueensDescription',

  components: {

  },

  props: {
    icon: {
      type: String,
      default: ''
    },
    wrapperClass: {
      type: String,
      default: ''
    },
    wrapperStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    innerClass: {
      type: String,
      default: ''
    },
    innerStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    borderBottom: {
      type: Boolean,
      default: true
    },
    textColor: {
      type: String,
      default: '#7263FF'
    },
    descContent: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang='less' scoped>
@import '../style/var.less';
  .description-wrap {
    .description-inner {
        display: flex;
        padding: 12px 0;
        .description-icon {
            display: flex;
            align-items: center;
            .light-circle, .weight-circle {
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
            }
            .light-circle {
                background-color:@commonLightColor;
            }
            .weight-circle {
                background-color:@commonColor;
                margin-left: -5px;
            }
        }
        .description-text {
            font-size: 14px;
            line-height: 26px;
            padding: 0 8px;
            word-break: break-word;
            font-weight: 600;
        }
    }
    .inner-border-bottom {
        border-bottom: 1px solid rgba(213, 209, 255, 0.5);
    }
  }
</style>
