# QuesQuesSwitcher 题目切换器

### 介绍

QuesQuesSwitcher 题号切换组件，选中题号会尽可能移动到容器中间位置，可以传入不同的prop来控制图标形状、颜色等；

### 引入

```js
import Vue from 'vue';
import { QuesQuesSwitcher } from 'queens';

Vue.use(QuesQuesSwitcher);
```

## 代码演示

### 基础用法

```html
<queens-ques-switcher ref="ques-switcher" :question-infos="questionInfos" :active-index="activeIndex" :item-active-border="true" :item-border="true" @click="clickHandler" />
```
### 显示答案

```html
<queens-ques-switcher ref="ques-switcher" :question-infos="questionInfos" :active-index="activeIndex1" :is-show-result="true" item-bg="#fff" item-active-bg="#fff" :item-border="false" class="switcher-style" @click="clickHandler" />
```
### 椭圆不显示作答结果

```html
<queens-ques-switcher ref="ques-switcher" :question-infos="questionInfos" :is-ellipse="true" :active-index="activeIndex" :is-show-arrow="false" :is-show-icon="false" @click="clickHandler" />
```
### 椭圆显示作答结果

```html
<queens-ques-switcher ref="ques-switcher" :question-infos="questionInfos" :is-ellipse="true" :active-index="activeIndex" :is-show-arrow="false" :is-show-result="true" :is-show-icon="false" item-active-color="#fff" @click="clickHandler" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| question-infos | 包含quesData中的questionId(必选)、answers(可选)、userAnswer(可选) | *object* | {} |
| is-ellipse | 是否是椭圆形选项 | *boolean* | false |
| is-show-arrow | 是否显示小箭头 | *boolean* | true |
| is-show-icon | 是否显示正确、错误图标 | *boolean* | true |
| is-show-result | 是否显示作答结果，即显示正确和错误图标，此时question-infos <br> 必须包含answers和userAnswer属性 | *boolean* | false |
| item-bg | 题号背景颜色 | *string/boolean* | '' |
| item-active-bg | 题号选中时背景颜色 | *string/boolean* | '' |
| item-color | 题号文本颜色 | *string/boolean* | '' |
| item-active-color | 题号选中时文本颜色 | *string/boolean* | '' |
| item-boder | 题号边框颜色 | *string/boolean* | '' |
| item-active-boder | 题号选中时边框颜色 | *string/boolean* | '' |
| item-active-boder | 题号选中时边框颜色 | *string/boolean* | '' |


### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |

<!-- ### Methods

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| preAnswer/nextAnswer | 切换上一题和下一题并获取作答结果 | - | 返回一个promise实例，其值是一个对象，包含三个属性：userCheckedAnswer[Array]，<br> 用户选择答案的集合；trueAnswer[Array]，正确答案的集合，与题目数据中的 answers 字段一致；answerResult[Boolean]，作答结果，true或者false |

### Slots

| 名称 | 说明 |
|------|------|
| descIcon | 题目说明左侧图标 |
| footer | 主体区域底部的内容 | -->
