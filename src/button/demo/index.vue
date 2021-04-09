<template>
  <demo-section>
    <demo-block title="按钮类型">
      <queens-button type="primary">
        主要按钮
      </queens-button>
      <queens-button type="info">
        信息按钮
      </queens-button>
      <queens-button type="default">
        默认按钮
      </queens-button>
      <queens-button type="warning">
        警告按钮
      </queens-button>
      <queens-button type="danger">
        危险按钮
      </queens-button>
    </demo-block>

    <demo-block title="朴素按钮">
      <queens-button plain type="primary">
        朴素按钮
      </queens-button>
      <queens-button plain type="info">
        朴素按钮
      </queens-button>
    </demo-block>

    <demo-block title="禁用状态">
      <queens-button disabled type="primary">
        禁用状态
      </queens-button>
      <queens-button disabled type="info">
        禁用状态
      </queens-button>
    </demo-block>

    <demo-block title="加载状态">
      <queens-button loading type="primary" />
      <queens-button loading type="info" loading-text="努力中..." />
    </demo-block>

    <demo-block title="按钮形状">
      <queens-button type="primary">
        方形按钮
      </queens-button>
      <queens-button round type="info">
        圆形按钮
      </queens-button>
    </demo-block>

    <demo-block title="图标按钮">
      <queens-button icon="van-icon van-icon-chat-o" type="primary" />
      <queens-button icon="van-icon van-icon-chat-o" type="primary">
        按钮
      </queens-button>
    </demo-block>

    <demo-block title="按钮尺寸">
      <queens-button type="primary" size="large">
        大号按钮
      </queens-button>
      <queens-button type="primary" size="normal">
        普通按钮
      </queens-button>
      <queens-button type="primary" size="small">
        小型按钮
      </queens-button>
      <queens-button type="primary" size="mini">
        迷你按钮
      </queens-button>
    </demo-block>

    <demo-block title="块级元素">
      <queens-button type="primary" block round size="large" @click="deleteData">
        提交
      </queens-button>
    </demo-block>
  </demo-section>
</template>

<script>
import $http from '../../utils/request.js'
export default {
  data() {
    return {}
  },
  methods: {
    deleteData() {
      const params = {
        'homewkId': '5f992a1cade018000115cffd',
        stuId: 202008602
      }
      $http('deleteData', params)
        .then(data => {
          console.log(data)
        })
    }
  }
}
</script>

<style lang="less">
.demo-button {
  /deep/.queens-button {
    margin-bottom: 10px;
  }
  .van-doc-demo-block__title {
    padding: 32px 0px 20px;
  }
  .van-doc-demo-block {
    padding: 0 16px;
  }
}
</style>
