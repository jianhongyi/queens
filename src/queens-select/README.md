# QueensSelect 选择题

### 介绍

QueensSelect 对外暴露的选择题型组件，包括图片选择题、文本选择题、音频选择题；

### 引入

```js
import Vue from 'vue';
import { QueensSelect } from 'queens';

Vue.use(QueensSelect);
```

## 代码演示

```html
<queens-select ref="quesSelect" :ques-data="quesData" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| ques-data | 选择题所需数据 | *Object* | {} |
| main-area-style | 主体区域自定义样式 | *Object* | {} |
| main-area-class | 主体区域自定义类名 | *String* | '' |
| icon | 题目说明左侧图标 | *String* | 默认值如示例所示 |
| show-answer | 是否显示答案和解析区域 | *Boolean* | false |
| use-animation | 题目切换时是否添加动画，默认是开启，即值默认为true, 默认的动画是左右滑动 <br> 我们默认提供了四种滑动动画(queens-slide-left/right/top/bottom) 你也可以传入 <br> 标识自定义的动画的类名字符串 | *Boolean/String* | '' |
| index | 题目序号 | *String Number* | `''`   |


<!-- ### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event | -->

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| checkAnswer | 获取本题作答结果信息 | - | 返回一个promise实例，其值是一个对象，包含三个属性：userCheckedAnswer[Array]，<br> 用户选择答案的集合；trueAnswer[Array]，正确答案的集合，与题目数据中的 answers 字段一致；answerResult[Boolean]，作答结果，true或者false |

### Slots

| 名称 | 说明 |
|------|------|
| descIcon | 题目说明左侧图标 |
| footer | 主体区域底部的内容 |
