# QuesOral 口语题

### 介绍

QuesOral 对外暴露的口语题型组件

### 引入

```js
import Vue from 'vue';
import { QuesOral } from 'queens';

Vue.use(QuesOral);
```

## 代码演示

```html
<ques-oral ref="quesOral" :ques-data="quesData" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| ques-data | 选择题所需数据 | *Object* | {} |
| wrapper-style | 外层容器区域自定义样式 | *Object* | {} |
| main-area-style | 主体区域自定义样式 | *Object* | {} |
| main-area-class | 主体区域自定义类名 | *String* | '' |
| index | 题目序号 | *String Number* | ''   |
