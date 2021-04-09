# stem 题干展示

### 介绍

stem 是一个题干解析组件

### 引入

```js
import Vue from 'vue';
import { stem } from 'queens';

Vue.use(stem);
```

## 代码演示

### 基础用法

##### structure题型
选择：0、判断：8、填空：2、趣配音: 5、排序: 6，连线：7，复合题：9 

##### templateType模板类型
图文选择：imgSelect、文本选择：textSelect、音频选择：audioSelect、单词填空：wordFill、字母填空：letterFill、数字填空：numFill、图片排序：imgSort、单词排序：textSort、句子排序：sentenceSort、字母排序：letterSort、Y/N判断：YNJudge、T/F判断：TFJudge、文文连线：textLine、图文连线：imgTextLine、音文连线：audioTextLine、图图连线：imgLine、音图连线：audioImgLine、完型填空：clozeFillComplex、选词填空：selectFillComplex、阅读填空：readFillComplex、阅读选择：readSelectComplex、阅读判断：readJudgeComplex、 完型填空：clozeFillComplex, 选词填空: selectFillComplex, 阅读填空: readFillComplex, 阅读选择: readSelectComplex, 阅读判断: readJudgeComplex

```html
<queens-stem :body="body" structure="2" template-type="letterFill"></queens-stem>

<script>
    export default {
        data() {
            return {
                body: {
                    content: ``,
                    type: "RICHTEXT",
                    audioInfo: {
                        "url":"",
                        "duration":112,
                        "unit":"ms"
                    },
                }
            };
        }
    };
</script>
```

## API

### Props

| 参数 | 说明           | 类型     | 默认值 |
|------|----------------|----------|--------|
| body | 富文本题干内容`必填` | *Object* | `{}`   |
| structure | 题型`必填` | *String* | `''`   |
| template-type | 题型模版`必填` | *String* | `''`   |
| index | 题目序号 | *String Number* | `''`   |
| correct-answers | 录入的正确答案`填空题需传入` | *Array* | `[]`   |
| answers | 用户输入答案`填空题需传入` | *Array* | `[]`   |
| preview | 预览模式 | *Boolean* | false |
| reg | 正则表达式替换为输入区域`填空题` | *RegExp* | `new RegExp(/<img [^>]* class=\"ke-content-kong\"(.*?)>/gi)` |
| enlarge-stem-img | 是否可以点击放大题干中的图片 | *Boolean* | true |
