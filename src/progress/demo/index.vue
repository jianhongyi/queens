<template>
  <demo-section>
    <demo-block title="slot自定义文案">
      <queens-progress :percentage="30">
        <span style="color: #A0A5AB;"><span style="color: #7263FF;">3</span>/10</span>
      </queens-progress>
    </demo-block>

    <demo-block title="线形进度条">
      <queens-progress :percentage="50" />
      <queens-progress :percentage="100" status="success" />
      <queens-progress :percentage="100" status="warning" />
      <queens-progress :percentage="50" status="exception" />
    </demo-block>

    <demo-block title="百分比内显">
      <queens-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
      <queens-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
      <queens-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" />
    </demo-block>

    <demo-block title="自定义颜色">
      <queens-progress :percentage="10" color="#5cb87a" />
    </demo-block>

    <demo-block title="环形进度条">
      <queens-progress type="circle" :percentage="0" />
      <queens-progress type="circle" :percentage="25" stroke-linecap="square" />
      <queens-progress type="circle" :percentage="100" status="success" />
      <queens-progress type="circle" :percentage="70" status="warning" />
      <queens-progress type="circle" :percentage="50" status="exception" />
    </demo-block>

    <demo-block title="仪表盘形进度条">
      <queens-progress type="dashboard" :percentage="25" :color="colors" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.demo-progress{
  background-color: #fff;
  .queens-progress{
    margin: 16px;
  }
}
</style>
