<template>
  <section class='c-table'>
    <header v-if='header' class="b-header">
      <slot name='header'></slot>
    </header>
    <div class="b-outer">
      <el-table
        v-on="$listeners"
        v-loading="loading"
        :data="data"
        :border="border"
        :stripe="stripe"
        :size="size"
        :width="width"
        :height="height"
        :maxHeight="maxHeight">
          <transition name='slide' mode='out-in'>
            <el-table-column v-if="isShowPrefix" :type="type" :align="textAlign" :label="label" fixed='left' width='70'></el-table-column>
          </transition>
          <template v-for="(tr, td) in columns">
            <div v-if="tr" :key="td + 'table__column--outer'">
              <!-- default component -->
              <el-table-column
                :key="'table_column--item' + td"
                v-if="['default', null, undefined].includes(tr.type)"
                :align='textAlign'
                :label='tr.label'
                :prop='tr.field'>
              </el-table-column>

              <!-- image component -->
              <el-table-column
                :key="'table_column--item' + td"
                v-else-if="['image', 'images'].includes(tr.type)"
                :align='tr.type.endsWith("s") ? textAlign : "left"'
                :label='tr.label'
                :prop='tr.field'>
                  <template slot-scope="{ row }">
                    <span v-if="Array.isArray(row[tr.field])">
                        <img v-for="(ii, iid) in row[tr.field]" :key="'img' + iid" :src="ii" alt="img">
                    </span>
                    <span v-else>
                      <img v-if='row[tr.field]' :src="row[tr.field]" alt="img">
                    </span>
                  </template>
              </el-table-column>

              <!-- switch component -->
              <el-table-column
                :key="'table_column--item' + td"
                v-else-if="['switch'].includes(tr.type)"
                :align='textAlign'
                :label='tr.label'
                :prop='tr.field'>
                  <template slot-scope="{ row }">
                    <el-switch
                      v-model='row[tr.field]'
                      :acitve-value='tr.activeValue'
                      :inactive-value='tr.inActiveValue'>
                    </el-switch>
                  </template>
              </el-table-column>

              <!-- tag 标签 -->
              <el-table-column 
                :key="'table_column--item' + td"
                v-else-if="tr.type == 'tag'"
                :label="tr.label"
                :prop='tr.field'
                :align='textAlign'>
                  <template slot-scope="{ row }">
                    <el-tag :type='tr.types[row[tr.field]]'>{{tr.transfer[row[tr.field]]}}</el-tag>
                  </template>
              </el-table-column>

              <!-- custom component-->
              <el-table-column
                :key="'table_column--item' + td"
                v-else-if="tr.type == 'component'"
                :label='tr.label'
                :prop='tr.field'
                :align='textAlign'>
                <template slot-scope="scope">
                    <component :is="tr.component" :scope="scope"></component>
                </template>
              </el-table-column>

              <!-- preset button group-->
              <el-table-column
                :key="'table_column--item--btn' + td"
                v-else-if="tr.type == 'button'"
                :label='tr.label'
                :prop='tr.field'
                align='center'>
                  <template slot-scope='scope'>
                      <btnGroup v-on="$listeners" align='center' :list='JSON.parse(JSON.stringify(tr.list))' :scope="scope" style="text-align: center"></btnGroup>
                  </template>
              </el-table-column>
            </div>
          </template>
      </el-table>
    </div>
    <footer v-if='footer' class="b-footer">
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<script>
 import mySearch from 'wh-search-group'
 export default{
  name: 'WTable',
  components: {
    btnGroup: mySearch.MySearchButtonGroup
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    isShowPrefix: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: '序号'
    },
    type: {
      type: String,
      default: 'index'
    },
    size: String,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    stripe: Boolean,
    border: Boolean,
    textAlign: {
      type: String,
      default: 'center'
    },
    loading: true,
    header: Boolean,
    footer: Boolean
  },
  watch: {},
  computed: {},
  data(){
    return {
    }
  },
  methods: {
    handleTags(scope){
      let { item: { field, transfer }, row } = scope

    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.slide-enter,
.slide-leave,
.slide-leave-active {
  // transform: translateX(-20px);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}
.c-table {
  width: inherit;
  height: inherit;
  // min-height: 400px;
}
.b-footer {
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-top: none;
}
</style>