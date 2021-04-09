<template>
  <demo-section>
    <demo-block title="基本使用方式">
      <play-audio style="margin-left: 15px;" url="http://img.tukuppt.com/newpreview_music/08/99/00.mp3" template-type="textSelect" />
    </demo-block>
    <demo-block title="点击改变播放状态">
      <play-audio style="margin-left: 15px;" click-type="changeState" url="http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3" template-type="textSelect" />
    </demo-block>
    <demo-block title="循环播放">
      <play-audio style="margin-left: 15px;" :audio-data="audioData" template-type="zjtextSelect" />
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      audioData: {
        duration: 35060,
        unit: 'ms',
        url: 'http://ai-content-bank.oss-cn-shanghai.aliyuncs.com/listening/public/paper/4da43ae45e114751a237/8f5f9f485d3947afafe19a092daf9ad7.mp3'
      }
    }
  }
}
</script>
