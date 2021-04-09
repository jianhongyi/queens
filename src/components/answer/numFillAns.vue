<!-- 数字类型填空 -->
<template>
  <queens-popup class="popup" v-bind="$attrs">
    <div :style="{'justify-content': flexPosition}" class="num-fill-wrapper">
      <template v-for="(item, index) in effectiveAnswers">
        <div :key="index" class="item">
          <div v-if="item.content" class="item-fill">
            <div class="item-fill-inner">
              {{ item.content }}
            </div>
          </div>
          <img v-if="item.answerImg" :src="item.answerImg" class="item-img">
        </div>
      </template>
    </div>
  </queens-popup>
</template>

<script>
import answerMixin from '../../mixins/answerMixin'
export default {
  name: 'NumFill',
  mixins: [answerMixin]
}
</script>
<style lang='less' scoped>
    .num-fill-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        .item {
            flex: 0 0 48%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            &-img {
                width: 65px;
                height: 50px;
                margin-right: 12px;
                text-align: center;
                line-height:50px;
                border: 1px solid #E3E4E7;
                border-radius: 8px;
            }
            &-fill {
                min-width: 65px;
                max-width: 195px;
                height: 50px;
                margin-right: 12px;
                text-align: center;
                line-height:50px;
                border: 1px solid #E3E4E7;
                border-radius: 8px;
                font-size: 30px;
                font-weight: 600;
                overflow: hidden;
                &-inner {
                  width: 100%;
                  overflow-y: hidden;
                  overflow-x: auto;
                }
            }
        }
    }
</style>
