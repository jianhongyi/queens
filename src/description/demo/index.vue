<template>
  <demo-section>
    <demo-block title="基础用法" class="demo">
      <queens-description :desc-content="descContent1" />
    </demo-block>

    <demo-block title="自定义文本颜色" class="demo">
      <queens-description text-color="#000" :desc-content="descContent2" />
    </demo-block>

    <demo-block title="自定义图标" class="demo">
      <queens-description icon="alipay" :desc-content="descContent2" />
    </demo-block>

    <demo-block title="是否显示底边框" class="demo">
      <queens-description :border-bottom="false" :desc-content="descContent2" />
    </demo-block>

    <demo-block title="自定义容器样式" class="demo">
      <queens-description :inner-style="{'background-color': '#ccc'}" :desc-content="descContent2" />
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      descContent1: 'Llisten and write the numberLlisten and write the numberLlisten and write the numberLlisten and write the number',
      descContent2: 'Llisten and write the number'
    }
  }
}
</script>
<style lang="less" scoped>
  .demo {
    padding: 0 16px;
  }
</style>
