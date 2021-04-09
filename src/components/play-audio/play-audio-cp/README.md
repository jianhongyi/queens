# PlayAudio 音频播放

### 介绍

PlayAudio 是一个音频播放组件

### 引入

```js
import Vue from 'vue';
import { PlayAudio } from 'queens';

Vue.use(PlayAudio);
```

## 代码演示

### 基础用法

```html
<play-audio url="http://img.tukuppt.com/newpreview_music/08/99/00/5c88d4a8d1f5745026.mp3"></play-audio>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| url | 音频地址 | *string* | `-` |
| autoplay | 自动播放 | *boolean* | `false` |
| clickType | `play`点击从头播放 `changeState`点击改变状态暂停／播放 | *string* | `play` |
| loop | 是否循环播放 | *Boolean*| `false` |
