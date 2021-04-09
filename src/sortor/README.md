# QueensSortor 题目说明

### 介绍

Options 是选择题的选项区域

### 引入

```js
import Vue from 'vue';
import { QueensSortor } from 'queens';

Vue.use(QueensSortor);
```

## 代码演示

### 图片排序
#### 将 template-type 这个 prop 传入imgSort。

```html
<queens-sortor template-type="imgSort" :options="quesData1.options" :answers="quesData1.answers" :preview="true" :user-answer="quesData1.userAnswer" />
```
### 句子排序题
#### 将 template-type 这个 prop 传入sentenceSort。

```html
<queens-sortor template-type="sentenceSort" :options="quesData.options" :answers="quesData.answers" :preview="preview" />
```

### 单词排序题
#### 将 template-type 这个 prop 传入 textSort。

```html
<queens-sortor template-type="textSort" :options="quesData.options" :answers="quesData.answers" :body="quesData.body" :preview="preview" />
```

### 多项选择
#### 将 multiple-choice 这个 prop 传入 true。

```html
<queens-options ref="quesOptions4" :options="options4" :answers="answers4" :multiple-choice="true" template-type="audioSelect" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| template-type | 选项类型 | *string* | - |
| options | 选项数据 | *object* | {} |
| answers | 答案 | *array* | [] |
| multipleChoice | 是否支持多选 | *boolean* | false |

<!-- ### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event | -->

<!-- ### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽 |
| icon | 自定义图标 | -->
