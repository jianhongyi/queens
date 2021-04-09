# QueensComposite 复合题

### 介绍

QueensComposite 对外暴露的复合题型组件，包括选词填空复合题、阅读填空复合题、完形填空复合题、阅读选择复合题、阅读判断复合题；

### 引入

```js
import Vue from 'vue';
import { QueensComposite } from 'queens';

Vue.use(QueensComposite);
```

## 代码演示

### 基础用法
#### 将 ques-data 这个 prop 传入。

```html
<queens-composite ref="quesComposite" :ques-data="quesData" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| ques-data | 试题全部数据 | *object* | {} |
| preview | 预览模式 | *boolean* | false |
| main-area-style | 主体区域自定义样式 | *Object* | {} |
| main-area-class | 主体区域自定义类名 | *String* | '' |
| useAnimation | 切换题目时是否有动画 | *boolean*  | true |
| show-answer | 是否显示答案和解析区域 | *Boolean* | false |
| reg | 正则表达式替换为输入区域`填空题` | *RegExp* | `new RegExp(/<img [^>]* class=\"ke-content-kong\"(.*?)>/gi)` |
| index | 题目序号 | *String Number* | `''`   |

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