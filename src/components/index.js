import Table from './table/index.js'
import TableHeader from './table-header/index'
const components = [
  Table,
  TableHeader
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default  {
  version: '0.0.1',
  WTable: Table,
  WTableHeader: TableHeader
}