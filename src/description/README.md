# QueensDescription 题目说明

### 介绍

QueensDescription 对外暴露的题目的说明组件

### 引入

```js
import Vue from 'vue';
import { QueensDescription } from 'queens';

Vue.use(QueensDescription);
```

## 代码演示

### 基础用法

```html
<queens-description>Llisten and write the number</queens-description>
```
### 自定义文本颜色。
#### 默认题目说明文本颜色为 #7263FF，可以通过 text-color 这个 prop 自定义题目说明文本颜色。

```html
<queens-description text-color="#000">Llisten and write the number</queens-description>
```

### 自定义图标
#### 有默认图标，图标种类与 Vant UI 库中支持的图标一致，可以通过 icon 传入一个字体图标，也可以通过 name 为 icon 的插槽传入一个自定义图标。

```html
<queens-description icon="van-icon-alipay">Llisten and write the number</queens-description>
```

### 是否显示底边框
#### 默认显示底部边框，可以通过 border-bottom 这个 prop 控制是否显示。

```html
<queens-description border-bottom="false">Llisten and write the number</queens-description>
```

### 自定义容器样式
#### 可以通过 wrapper-style 和 inner-style 两个 prop 自定义外部容器（class 为 description-wrap）和内部容器（class 为 description-inner）的样式。

```html
<queens-description :inner-style="{background-color: '#ccc'}">Llisten and write the number</queens-description>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| icon | 字体图标 | *string* | - |
| border-bottom | 是否显示底边框 | *boolean* | true |
| wrapper-style | 自定义外部容器样式 | *object* | - |
| inner-style | 自定义内部容器样式 | *object* | - |

<!-- ### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event | -->

### Slots

| 名称 | 说明 |
|------|------|
| descContent | 默认插槽 |
| descIcon | 自定义图标 |
