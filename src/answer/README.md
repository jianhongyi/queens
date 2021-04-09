# Answer 答案

### 介绍

Answer 对外暴露的题目的答案组件

### 引入

```js
import Vue from 'vue';
import { QueensAnswer } from 'queens';

Vue.use(QueensAnswer);
```

## 代码演示

```html
<queens-answer :body="body" :options="options" :answers="answers" :explain="explain" :template-type="templateType"/>
```
## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| body | 题干信息 | *Object* | {} |
| options | 选项集合(仅在需要选项的题型中使用) | *Array* | [] |
| answers | 答案集合 | *Array* | [] |
| explain | 解析数据 | *Object* | {} |
| template-type | 模板类型 | *String* | '' |
| position | 答案的位置 | *String* | 'center' |
| show-explain | 是否显示答案解析区域 | *Boolean* | true |
| label | 显示文案(仅在组卷中使用) | *String* | 正确答案 |
| structure | 题型(仅在组卷中使用) | *String* | '' |

<!-- ### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event | -->
