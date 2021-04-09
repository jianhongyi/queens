# QueensLiner 选择器

### 介绍

QueensLiner 适用于连线题，是一个连线题型最核心的组件；

### 引入

```js
import Vue from 'vue';
import { QueensLiner } from 'queens';

Vue.use(QueensLiner);
```

## 代码演示

```html
<queens-liner :options="options1" :preview="preview" :answers="answers" :template-type="templateType" />
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| options | 连线选项 | *object* | {} |
| answers | 答案 | *array* | [] |
| user-answer | 用户答案 | *array* | [] |
| colors | 用户自已选项背景颜色集合 | *array* | [] |
| canActive | 是否可以交互标识 | *boolean* | true |
| preview | 是否预览模式 | *boolean* | false |

<!-- ### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event | -->

<!-- ### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽 |
| icon | 自定义图标 | -->
