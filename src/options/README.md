# Options 选项区

### 介绍

Options 使用于选择题和判断题等，是选择题和判断题等题型的核心组件；

### 引入

```js
import Vue from 'vue';
import { Options } from 'queens';

Vue.use(Options);
```

## 代码演示

### 文本选项
#### 将 template-type 这个 prop 值设置为 textSelect。

```html
<queens-options ref="quesOptions1" :options="options1" :answers="answers1" template-type="textSelect" />
```
### 图片选项
#### 将 template-type 这个 prop 值设置为 imgSelect。

```html
<queens-options ref="quesOptions2" :options="options2" :answers="answers2" template-type="imgSelect" />
```

### 音频选项
#### 将 template-type 这个 prop 值设置为 audioSelect。

```html
<queens-options ref="quesOptions3" :options="options3" :answers="answers3" template-type="audioSelect" />
```

### 判断选项
#### 将 template-type 这个 prop 值设置为 YNJudge。

```html
<queens-options ref="quesOptions3" :options="options3" :answers="answers3" template-type="audioSelect" />
```

<!-- ### 多项选择
#### 将 multiple-choice 这个 prop 传入 true。

```html
<queens-options ref="quesOptions4" :options="options4" :answers="answers4" :multiple-choice="true" template-type="audioSelect" />
``` -->

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
