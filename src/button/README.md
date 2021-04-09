# Button 按钮

### 引入

```js
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
```

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`info`、`warning`、`danger` 五种类型，默认为 `default`。

```html
<queens-button type="primary">主要按钮</queens-button>
<queens-button type="info">信息按钮</queens-button>
<queens-button type="default">默认按钮</queens-button>
<queens-button type="warning">警告按钮</queens-button>
<queens-button type="danger">危险按钮</queens-button>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<queens-button plain type="primary">朴素按钮</queens-button>
<queens-button plain type="info">朴素按钮</queens-button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<queens-button disabled type="primary">禁用状态</queens-button>
<queens-button disabled type="info">禁用状态</queens-button>
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loading-text` 设置加载状态下的文字。

```html
<queens-button loading type="primary"></queens-button>
<queens-button loading type="info" loading-text="努力中..."></queens-button>
```

### 按钮形状

默认方形按钮，通过 `round` 设置圆形按钮。

```html
<queens-button type="primary">方形按钮</queens-button>
<queens-button round type="info">圆形按钮</queens-button>
```

### 图标按钮

通过 `icon` 属性设置按钮图标，支持 Icon 组件里的所有图标。

```html
<queens-button icon="plus" type="primary" />
<queens-button icon="plus" type="primary">按钮</queens-button>
```

### 按钮尺寸

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。

```html
<queens-button type="primary" size="large">大号按钮</queens-button>
<queens-button type="primary" size="normal">普通按钮</queens-button>
<queens-button type="primary" size="small">小型按钮</queens-button>
<queens-button type="primary" size="mini">迷你按钮</queens-button>
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

```html
<queens-button type="primary" block round size="large">块级元素</queens-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `info` `warning` `danger` | _string_ | `default` |
| size | 尺寸，可选值为 `large` `small` `mini` | _string_ | `normal` |
| icon | 图标名称 | _string_ | - |
| block | 是否为块级元素 | _boolean_ | `false` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| loading-text | 加载状态提示文字 | _string_ | - |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: Event_      |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |

### Slots

| 名称              | 说明           |
| ----------------- | -------------- |
| default           | 按钮内容       |
