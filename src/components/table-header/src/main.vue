<template>
  <section class='c-table-header'>
    <div class="b-outer">
      <div class="b-left">
        <span class="el-icon-s-operation b-left__title">表格名字</span>
      </div>
      <div class="b-right">
        <slot name='right'></slot>
      </div>
    </div>
  </section>
</template>

<script>
 export default{
  name: 'WTableHeader',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.c-table-header {
  width: 100%;
  height: 50px;
  max-height: 50px;
  padding: 4px 15px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #dbd9d9;

  .b-outer {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    .b-left {
      display: flex;
      align-items: center;
      width: 20%;
      height: 100%;
      margin-right: 15px;
      font-size: 14px;
      color: #666;
    }
    .b-right {
      display: flex;
      align-items: center;
      flex-flow: row-reverse;
      flex: 1;
      height: 100%;
    }
  }
}
</style>