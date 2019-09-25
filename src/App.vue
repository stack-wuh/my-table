<template>
  <div id="app">
    <el-button @click="handleAdd">clickMe</el-button>
    <el-button @click="() => { data.pop() }">delete</el-button>
      <my-table
        header
        @delete="handleDel"
        @create="handleCreate"
        :columns="cols" 
        :data="data" 
        border 
        stripe
        :isShowPrefix='show'>
          <MyTableHeader name="测试列表" slot="header">
            <search-group slot='right' :list="List" v-model="searchForm"></search-group>
          </MyTableHeader>
      </my-table>
  </div>
</template>

<script>
const List = [
  {
    field: 'name',
    type: 'normal'
  },
  {
    field: 'state',
    type: 'select',
    list: [
      {
        label: 'AAA',
        value: 1
      },
      {
        label: 'BBB',
        value: 2
      }
    ]
  },
  {
    field: '',
    type: 'button',
    list: [
      {
        text: 'export',
        type: 'success',

      },
      {
        text: 'import',
        type: 'warning'
      }
    ]
  }
]
const addressCm = {
  props: ['scope'],
  computed: {
    firstName(){
      let { row: { name } } = this.scope
      return name
    }
  },
  template: `
    <div>
      <h4>this is my name: {{this.firstName}}</h4>
      <span>{{this.scope.row}}</span>
    </div>
  `
}
import MyTable from './components/table/index'
import MySearchGroup from 'wh-search-group'
import MyTableHeader from './components/table-header/src/main'
export default {
  name: 'app',
  components: {
    MyTable,
    MyTableHeader,
    btnGroup: MySearchGroup.MySearchButtonGroup,
    searchGroup: MySearchGroup.MySearchGroup
  },
  data () {
    return {
      List,
      searchForm: {},
      show: true,
      cols: [
        {
          label: '姓名',
          field: 'name'
        },
        {
          label: 'images',
          field: 'img',
          type: 'images'
        },
        {
          label: '年龄',
          field: 'age',
          type: 'default'
        },
        {
          label: '状态',
          field: 'state',
          type: 'switch',
          activeValue: 1,
          inActiveValue: 0,
        },
        {
          label: '多状态枚举',
          field: 'status',
          type: 'tag',
          transfer: {
            1: '男',
            2: '女'
          },
          types: {
            1: 'success',
            2: 'info'
          }
        },
        {
          label: 'address',
          field: 'address',
          type: 'component',
          component: addressCm
        },
        {
          label: '操作',
          type: 'button',
          list: [
            {
              text: 'create',
              ref: 'create',
              field: ['status'],
              rules: 1
            },
            {
              text: 'delete',
              ref: 'delete'
            }
          ]
        }
      ],
      data: [
        { info: { status: 2 }, status: 1, state: 1, name: 'shadow', age: 20, img: ['https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjc8_L62-jkAhVPrJ4KHWAVBUQQjRx6BAgBEAQ&url=https%3A%2F%2Ftwitter.com%2Fimgafootball&psig=AOvVaw16dW5chATrNehYu_tWf0un&ust=1569389015648085']},
        { info: { status: 1 },status: 2, state: 0, name: 'fielding', age: 40, img: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjc8_L62-jkAhVPrJ4KHWAVBUQQjRx6BAgBEAQ&url=https%3A%2F%2Ftwitter.com%2Fimgafootball&psig=AOvVaw16dW5chATrNehYu_tWf0un&ust=1569389015648085'}
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleAdd(){
      var obj = {
        name: 'shadow' + (Math.random() * 10 -1 ),
        age: Math.random()
      }
      this.data.push(obj)
    },
    handleDel(e){
      let { scope: { $index } } = e
      setTimeout(() => {
        this.data.splice($index, 1)
      }, 400)
    },
    handleCreate(e){
      console.log('is clicked created', e)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-enter,
.slide-leave,
.slide-leave-active {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all .4s cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
