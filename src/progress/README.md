# Progress 进度条

### 引入

```js
import Vue from 'vue';
import { Progress } from 'vant';

Vue.use(Progress);
```

## 代码演示

### 进度条默认样式

```html
<queens-progress :percentage="50" />
```

## API

### Props

| 参数          | 说明            | 类型            | 默认值   |
|-------------  |---------------- |---------------- |-------- |
| **percentage** | **百分比（必填）**   | number 0-100      |    0    |
| type          | 进度条类型           | string`line/circle/dashboard` | line |
| stroke-width  | 进度条的宽度，单位 px | number         | 8 |
| text-inside  | 进度条显示文字内置在进度条内（只在 type=line 时可用） | boolean | false |
| status  | 进度条当前状态 | string`success/exception/warning` | — |
| color  | 进度条背景色（会覆盖 status 状态颜色） | string/function/array | '' |
| width  | 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用） | number | 126 |
| show-text  | 是否显示进度条文字内容 | boolean | — | true |
| stroke-linecap  | circle/dashboard 类型路径两端的形状 | string`butt/round/square` | round |