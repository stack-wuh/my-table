import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SearchGroup from 'wh-search-group'

Vue.use(ElementUI)
Vue.use(SearchGroup)

new Vue({
  el: '#app',
  render: h => h(App)
})
