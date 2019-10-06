<template>
  <div id="app">
    <img src="./assets/logo.png">
    <MySearchGroup v-model="form" :list="List"></MySearchGroup>
    <WTable 
      border
      :columns="columns"
      :data="data">
    </WTable>

    <MySearchButtonGroup :list="btnList" :data="{ name: 'shadow', age: 20, states: { state: 1 } }"  ></MySearchButtonGroup>
  </div>
</template>

<script>
const btnList = [
  {
    _id: 0,
    text: 'down',
    ref: 'down',
    backgroundColor: '#fcc',
    options: {
      isLoading: false,
      type: 'text'
    }
  },
  {
    _id: 1,
    text: 'up',
    ref: 'up',
    type: 'text',
    color: 'red',
    options: {
      isLoading: false,
      type: 'text',
    },
    validator: (data) => {
      return false
    }
  },
  {
    _id: 2,
    text: 'show',
    options: {
      isLoading: true
    }
  }
]
export default {
  name: 'app',
  data () {
    return {
      btnList,
      form: {},
      List: [
        {
          label: 'name',
          field: 'name',
          type: 'normal'
        },
        {
          label: 'age',
          field: 'age',
          type: 'normal'
        },
        {
          label: 'state',
          field: 'state',
          type: 'select',
          list: [
            {
              label: 'X',
              value: 1
            },
            {
              label: 'Y',
              value: 2
            }
          ]
        }
      ],
      columns: [
        {
          label: '姓名',
          field: 'name'
        },
        {
          label: '单张图片',
          field: 'url',
          type: 'image'
        },
        {
          label: '多张图片',
          field: 'imgs',
          type: 'images'
        },
        {
          label: '切换状态',
          field: 'state',
          type: 'switch'
        },
        {
          label: '多状态枚举',
          field: 'status',
          type: 'tag',
          transfer: {
            1: '一',
            2: '二',
            3: '三'
          },
          types: {
            1: 'success',
            2: 'info',
            3: 'warning'
          }
        },
        {
          label: '自定义Component',
          type: 'component',
          component: {
            props: ['scope'],
            template: `
              <div>
                <h3>this is my name: {{scope.row.name}}</h3>
                <p>this is my state: {{scope.row.state}}</p>
              </div>
            `
          }
        },
        {
          label: '操作',
          type: 'button',
          list: [
            {
              text: 'create',
              ref: 'create',
              field: ['info', 'state'],
              rules: [true, 1, 0, 2]
            },
            {
              text: 'delete',
              ref: 'del'
            }
          ]
        }
      ],
      data: [
        {
          name: 'shadow',
          url: 'https://www.baidu.com',
          imgs: [
            'https://www.baidu.com',
            'https://www.baidu.com',
          ],
          state: true,
          status: 1,
          info: {
            state: 1
          }
        },
        {
          name: 'fielding',
          url: 'https://www.baidu.com',
          imgs: [
            'https://www.baidu.com',
            'https://www.baidu.com'
          ],
          state: false,
          status: 3,
          info: {
            state: 2
          }
        }
      ]
    }
  },
  components: {
  
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

</style>
