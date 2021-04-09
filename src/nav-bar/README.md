# NavBar 导航栏

### 引入

```js
import Vue from 'vue';
import { NavBar } from 'queens';

Vue.use(NavBar);
```

## 代码演示

### 基础用法

```html
<queens-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
```

```js
export default {
  methods: {
    onClickLeft() {
    },
    onClickRight() {
    },
  },
};
```

### 使用插槽

通过插槽自定义导航栏两侧的内容

```html
<queens-nav-bar title="标题" left-text="返回" left-arrow>
    <template #right>
        <i class="icon"></i>
    </template>
</queens-nav-bar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | `''` |
| left-text | 左侧文案 | _string_ | `''` |
| right-text | 右侧文案 | _string_ | `''` |
| left-arrow | 是否显示左侧箭头 | _boolean_ | `true` |
| border | 是否显示下边框 | _boolean_ | `false` |
| fixed | 是否固定在顶部 | _boolean_ | `false` |

### Slots

| 名称  | 说明               |
| ----- | ------------------ |
| title | 自定义标题         |
| left  | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

### Events

| 事件名      | 说明               | 回调参数 |
| ----------- | ------------------ | -------- |
| click-left  | 点击左侧按钮时触发 | -        |
| click-right | 点击右侧按钮时触发 | -        |
