<template>
  <demo-section>
    <demo-block title="基本使用方式">
      <play-audio style="margin-left: 15px;" url="http://img.tukuppt.com/newpreview_music/08/99/00.mp3" />
    </demo-block>
    <demo-block title="点击改变播放状态">
      <play-audio style="margin-left: 15px;" click-type="changeState" url="http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3" />
    </demo-block>
    <demo-block title="循环播放">
      <play-audio style="margin-left: 15px;" :loop="true" url="http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3" />
    </demo-block>
  </demo-section>
</template>
