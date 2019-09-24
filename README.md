# my-table

> A Vue.js project

## Preview

```bash
# clone
git clone git@github.com:stack-wuh/my-table.git

cd example

npm install

npm run dev
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 使用

### WTable
#### Props
| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| header | 是否展示Table的header部分 | Boolean | true |
| footer | 是否展示Table的Footer部分 | Boolean | true |
| columns | 提供迭代的TableColumn的列表 | Array | [] |
| data | Table的元数据 | Array | [] |
| border | 是否展示Table的边框 | Boolean | true |
| stripe | 是否Table的斑马纹 | Boolean | true |
| isShowPrefix | 是否展示表格第一列的功能列 | Boolean | true |
| textAlign | 对齐的位置 | String | center |

#### Events 
> 按钮点击或者其他事件全部由v-on代理了, 使用了MySearchButtonGroup组件, 具体上传的事件名全部通过ref属性自定义, 使用方法如下: 
```javascript
import WTable from 'wh-table'
Vue.use(WTable)

const btns = [
  {
    text: 'down',
    ref: 'down'
  },
  {
    text: 'search',
    ref: 'search'
  },
  {
    text: 'any',
    ref: 'any'
  }
]
```
```html
  <w-table
    @down="handleDown"
    @search="handleSearch"
    @any="handleAny">
  </w-table>
```

#### Slot
| name | 说明 |
| :-- | :-- |
| header | 表格Header区域 |
| footer | 表格的footer区域 |

### WTabelHeader 
#### Props
| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| name | 表格左上角的文本 | String | none |

#### Slot
| name | 说明 |
| :-- | :-- |
| right | 为表格Header区域预留了功能区域, 可以在这里添加按钮或者是表单, 推荐搭配MySearchGroup组件使用 |


### WTableColumn
> 由自定义JSON文件迭代渲染, 使用如下: 
```javascript
const List = [
  {
    label: '姓名',
    field: 'name',
    type: ['default', undefined, null], // 以上三种情况可以不填
  },
  {
    label: 'XXX',
    field: 'custom',
    type: 'image'
  },
  {
    label: 'XXX',
    field: 'custom',
    type: 'switch',
  },
  {
    label: 'XXX',
    field: 'custom',
    type: 'tag',
    transfer: {
      value1: mapValue1,
      value2: mapValue2
    },
    types: {
      value1: 'success',
      value2: 'info'
    }
  },
  {
    label: 'XXX',
    field: 'custom',
    type: 'component',
    component: VueComponent
  },
  {
    label: 'XXX',
    type: 'button',
    list: [
      {
        text: 'up',
        ref: 'up'
      },
      {
        text: 'down',
        ref: 'download'
      }
    ]
  }
]
```
#### type == [default, null, undefined]
| 参数 | 说明 |
| :-- | :-- |
| default |  只能渲染普通文本 |

#### type == image[, images]
| 参数 | 说明 |
| :-- | :-- |
| image | 只能渲染一张图片, 如: { url: 'https:www.baidu.com' } | 
| images | 可以渲染多张图片, 期待后台返回一个数组, 如: { url: ['/image1.png', '/imgs2.png'] } |

#### type == switch
| 参数 | 说明 |
| :-- | :-- |
| switch | 使用element的Switch组件, 一个双向开关, 属性同element |

#### type == tag
| 参数 | 说明 |
| :-- | :-- |
| tag | 用于多状态枚举, 后台返回值需要前端映射, 提供一个transfer对象用于渲染， types对象用于绑定展示type |

#### type == component
| 参数 | 说明 |
| :-- | :-- |
| component | 使用Vue中的Component标签, 自定义满足需求的组件, 组件声明如下 |

```javascript
const VueComponent = {
  props: ['scope'],
  template: `
    <div class="wrap">{{scope}}</div>
  `
}
const List = [
  {
    label: 'aaa',
    type: 'component',
    component: VueComponent
  }
]
```
```html
  <component :is="List.component" v-bind="List" :scope="List"></component>
```

#### type == button
> 搭配MySearchButtonGroup 使用