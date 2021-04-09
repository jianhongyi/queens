# QueensQuestion 题目引擎

### 介绍

QueensQuestion 本质上是一个活动组件，将对外暴露的各种题型做了进一步封装，只需要传入quesData，便能根据不同的题型数据渲染不同的题型模板。

### 引入

```js
import Vue from 'vue';
import { QueensQuestion } from 'queens';

Vue.use(QueensQuestion);
```

## 代码演示

### 基础用法
#### 将 ques-data 这个 prop 传入。

```html
<queens-question ref="quesQuestion" :ques-data="quesData" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| ques-data | 试题全部数据 | *object* | {} |

```js
 // ques-data 详细说明见文档: https://shimo.im/docs/xOO39ScfLnUArTHj/read
 quesData: {
    templateType: '', // 单词填空：wordFill、字母填空：letterFill、数字填空：numFill
 }
```

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| checkAnswer | 获取作答结果 | - | 返回一个promise实例，其值是一个对象，包含三个属性：userCheckedAnswer[Array]， 用户选择答案的集合；trueAnswer[Array]，正确答案的集合，与题目数据中的 answers 字段一致；answerResult[Boolean]，作答结果，true或者false |

### Slots

| 名称 | 说明 |
|------|------|
| descIcon | 题目说明左侧图标 |
| footer | 主体区域底部的内容 |