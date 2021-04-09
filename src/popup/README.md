# popup 弹出层

### 介绍

popup 弹出层容器，用于展示弹窗、信息提示等内容。

### 引入

```js
import Vue from 'vue';
import { QueensPopup } from 'queens-unipus';

Vue.use(QueensPopup);
```

### 代码演示

```html
<queens-popup
    v-if="index==='自定义按钮内容'"
    button-text="选词"
    decorate-icon-class="iconxuanci1"
    :is-show-swiper-icon="true"
    >
    <p>
        插槽 随便写点
    </p>
</queens-popup>
```

### Props
| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| buttonText | 按钮文案 | *String* | '正确答案' |
| decorateIconClass | 修饰按钮icon | *String* | 'iconzhengquedaan' |
| interactiveIconClass | 交互按钮icon | *String* | 'iconhuadong' |
| initHeight | 初始化内容高度 | *Number* | 0 |
| isStopAudios | 拖拽时 是否停掉音频播放 | *Boolean* | true |
| isCanClickShowHide | 点击按钮是否可以展开收起 | *Boolean* | true |
| isUnfold | 控制展开收起 | *Boolean* | false |
| isShowSwiperIcon | 是否展示滑动试试按钮 | *Boolean* | false |

### Provide
| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| thisComponent | 如底部需要留白，传入容器组件的this | *Object* | null |
| refClassName | 如底部需要留白，传入需要加留白的组件ref值 | *String* | null |
| setDomNode | 如底部需要留白，传入dom节点 | *Object* | null |

```js
// 例如
provide() {
    return {
        setDomNode: {
            getNode: () => {
                return dom
            }
        },
        // 或
        thisComponent: this, // 组件this
        refClassName: 'composite' // ref名称 如果传入了thisComponent 没有传refClassName 留白添加在this下
    }
},
```

### Slots

| 名称 | 说明 |
|------|------|
| 默认 | 中间内容区 |
| popupButton | 按钮 |
