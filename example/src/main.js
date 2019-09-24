import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MySearch from 'wh-search-group'
import MyTable from 'wh-table-group'

Vue.use(ElementUI)
Vue.use(MySearch)
Vue.use(MyTable)
console.log(MyTable)

new Vue({
  el: '#app',
  render: h => h(App)
})
