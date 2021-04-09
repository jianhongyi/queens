# AnsweringArea 答题区域

### 介绍

AnsweringArea 对外暴露的题目答题区域组件

### 引入

```js
import Vue from 'vue';
import { AnsweringArea } from 'queens';

Vue.use(AnsweringArea);
```

### 代码演示

```html
    <queens-answering-area
        :options="options"
        :template-type="templateType"
        :active-index="activeIndex"
        @change-active-index="changeIndex"
    />
```
## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| options | 选词及完型填空选择是选项集合 阅读判断/选择是小题集合 | *Array* | [] |
| template-type | 模板类型 | *String* | '' |
| active-index | Swiper初始化索引 | *Number* | 0 |
### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change-active-index | 修改Swiper索引 | event: Event |
