<template>
  <div class="home-index-container"
       style="width: 100%; height: 100%">

    <el-button @click="nodeId = +new Date()" type="success">弹框测试</el-button>
    <el-button type="success" @click="uploadFileEvt('USER_LOGIN', [{ key: 'file', type: 'file' }], {acceptType: '.pdf,.doc,.rar', acceptTypeMsg: '请上传.pdf,.doc,.rar'})">文件上传</el-button>

    <base-table :pagingData="pagingData"
                :tableData="tableData"
                @sizeChange="(val, type) => pagingEvent(val, type)"
                @currentChange="(val, type) => pagingEvent(val, type)"
                @sortChange="(val) => sortChange(val)"
                @tableSelection="(val) => tableSelection(val)">
      <template slot="columnType">
        <el-table-column type="selection" width="35"></el-table-column>
        <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
      </template>
    </base-table>


    <base-dialog title="标题"
                 :nodeId="nodeId"
                 @dialogClose="nodeId=null"
                 class="dialog-btn-center">
      <span class="dialogTxt">dha</span>
      <template slot="dialogFooter">
        <el-button type="primary" @click="nodeId=null">确 定</el-button>
        <el-button type="info" @click="nodeId=null">取 消</el-button>
      </template>
    </base-dialog>
  </div>
</template>

<script>
import BaseView from '../BaseView.vue'
export default {
  extends: BaseView,
  data() {
    return {
      nodeId: null,
    }
  },
  methods: {
    async getTableData() {
      let result = await this.$api.postDataRequest('GET_LIST', {});
      console.log(result);
      this.tableData.data = result.data;
    }
  },
  created() {
    this.tableData.column = [
      { label: '时间', props: 'time', filter: 'dateFormat', funcParam: ['YYYY-MM-DD hh:mm:ss', 'hahhaha', ''], sortable: true },
      { label: '协议', props: 'proto'},
      { label: '标题', props: 'title' },
      { label: '公司', props: 'company' },
      { label: 'attention_degree', props: 'attention_degree' },
      { label: 'photo', props: 'photo' }
    ]
    this.getTableData();
  },
  mounted() { }
}
</script>

<style lang="less" scoped>
.el-pagination {
  padding: 18px 10px;
}
</style>

