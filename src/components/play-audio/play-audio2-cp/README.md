# PlayAudio2 音频播放

### 介绍

PlayAudio2 是一个音频播放组件

### 引入

```js
import Vue from 'vue';
import { PlayAudio2 } from 'queens';

Vue.use(PlayAudio2);
```

## 代码演示

### 基础用法

```html
<play-audio :audio-data="{
        duration: 35060,
        unit: 'ms',
        url: 'http://ai-content-bank.oss-cn-shanghai.aliyuncs.com/listening/public/paper/4da43ae45e114751a237/8f5f9f485d3947afafe19a092daf9ad7.mp3'
      }"></play-audio>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| audioData | 音频数据 | *object* | `{}` |
| showDuration | 是否显示进度条 | *Boolean*| `true` |
