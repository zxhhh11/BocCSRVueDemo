<script lang="ts">
export default {
  name: 'History400' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<template>
  <div class="history-400">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <CustomTimeline :timelineData="timelineData"></CustomTimeline>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light timeline">
          <CustomList
            :list="callDetail"
            title="呼叫详情"
            labelClassName="label-width-100"
            :column="2"
            :span="1"
          ></CustomList>
          <BaseTable
            :tableData="data.common.historyList"
            :total="data.common.listTotal"
            :currentPage="data.common.currentPage"
            :hasPagination="true"
            :handleClick="handleClick"
            :isMutiSelect="false"
            title="交易列表"
            defaultSort="serviceNumber"
            @handleCurrent="handleCurrent"
            :newColumns="columns"
          ></BaseTable>
        </div>
      </el-col>
    </el-row>
    <CustomModal
      :dialogVisiable="data.common.cardVisiable"
      @hide-dialog="hideCardDialog"
      title="信用卡对账单信息"
      cancelText="关闭"
      :hasConfirm="false"
      width="30%"
    >
      <CustomList :list="callListDetail" :column="2" :span="1"></CustomList>
    </CustomModal>
  </div>
</template>
<script lang="ts" setup>
import { timelineData, callDetail, callListDetail } from '@/utils/data';
import CustomTimeline from '@/components/common/customTimeline/index.vue';
import CustomList from '@/components/common/customList/index.vue';
// import CustomTable from '@/components/custom/CustomTable/CustomTable.vue';
import CustomModal from '@/components/common/modal/index.vue';
// import ColumnRender from '../custom/CustomTable/column-render';
import BaseTable from '@/components/common/baseTable/index.vue';
import { getHistoryListAPI } from '@/apis/history';
import { defineProps, onMounted, defineEmits, reactive, ref } from 'vue';

let data = reactive({
  common: {
    timelineData,
    callDetail,
    historyList: [],
    cardVisiable: false,
    callListDetail,
    hiddenAuthBtn: true,
    hiddenDelAuthBtn: false,
    currentPage: 1,
    listTotal: 0
  }
});

onMounted(() => {
  getHistoryList({ currentPage: 1, part: 'h400' });
});

const handleCurrent = (val: any) => {
    getHistoryList({ currentPage: val, part: 'h400' });
    data.common.currentPage = val;
  },
  handleClick = (row: any, column: any, $index: any) => {
    // console.log(row, column, $index)
  },
  getHistoryList = (params: any) => {
    getHistoryListAPI(params).then((res: any) => {
      console.log(res, 'res getHistoryListAPI');
      data.common.historyList = res.data.rows;
      data.common.listTotal = res.data.total;
    });
  },
  showDetail = (record: any) => {
    data.common.cardVisiable = true;
  },
  hideCardDialog = () => {
    data.common.cardVisiable = false;
  },
  assetAuth = () => {
    // console.log('assetAuth')
  },
  assetAuthDel = () => {
    // console.log('assetAuthDel')
  },
  assetDel = () => {
    // console.log('assetDel')
  },
  handleEdit = (index: any, row: any) => {
    // console.log(index, row)
  },
  editHandle = (row: any, column: any, $index: any) => {
    // console.log('editHandle', row, column, $index)
  },
  deleteBtn = (row: any, column: any, $index: any) => {
    // console.log('deleteBtn', row, column, $index)
  },
  newColumns = () => {
    return [
      {
        index: 0,
        prop: 'date',
        dataIndex: 'date',
        label: '坐席',
        isLink: true
      },
      { index: 1, prop: 'name', dataIndex: 'name', label: 'serviceType' },
      { index: 2, prop: 'address', dataIndex: 'address', label: '渠道' },
      {
        index: 4,
        prop: 'actions',
        dataIndex: 'actions',
        label: '操作二',
        actions: [
          {
            code: 'edit',
            text: '编辑',
            onClick: editHandle
          },
          {
            code: 'delete',
            text: '删除',
            onClick: deleteBtn
          }
        ]
      }
    ];
  },
  columns = () => {
    return [
      {
        index: 0,
        prop: 'serviceNumber',
        dataIndex: 'serviceNumber',
        label: '服务编号',
        isLink: true,
        width: 90,
        sortable: true,
        onClick: showDetail
        // render: (h, { record }) => {
        //   return h(
        //     'b',
        //     {
        //       style: {
        //         margin: '0',
        //         cursor: 'pointer',
        //         textDecoration: 'underline'
        //       },
        //       class: 'custom-link',
        //       on: {
        //         click: () => _this.showDetail(record),
        //       },
        //     },
        //     record.serviceNmuber
        //   )
        // },
      },
      {
        index: 1,
        prop: 'serviceTime',
        dataIndex: 'serviceTime',
        label: '服务时间',
        sortable: true,
        width: 170
      },
      {
        index: 2,
        prop: 'operator',
        dataIndex: 'operator',
        label: '坐席',
        sortable: true
      },
      {
        index: 3,
        prop: 'status',
        dataIndex: 'status',
        label: 'serviceType',
        sortable: true
      },
      {
        index: 4,
        prop: 'channel',
        dataIndex: 'channel',
        label: '渠道',
        sortable: true
      },
      {
        index: 5,
        prop: 'serviceType',
        dataIndex: 'serviceType',
        label: '服务种类',
        sortable: true
      }
      // {
      //   index: 6, prop: 'actions', dataIndex: 'actions', label: '操作二',
      //   actions: [
      //     {
      //       code: 'edit',
      //       text: "编辑",
      //       onClick: _this.editHandle
      //     },
      //     {
      //       code: 'delete',
      //       text: "删除",
      //       type: 'danger',
      //       onClick: _this.deleteBtn
      //     }
      //   ]
      // },
    ];
  };
</script>

<style lang="scss">
/* @backColor: ; */
.history-400 {
  & > .el-row {
    .el-col.el-col-6 {
      padding-right: 10px;
      border-right: 1px solid #f1f1f1;
      /* border-right: 1px solid @backColor; */
      // height: calc(100vh - 306px);
      // overflow-y: auto;
      height: 100%;
    }
    .el-col.el-col-18 {
      padding-left: 10px;
    }
  }
  // .grid-content {
  //   .custom-timeline {
  //   }
  // }
}
</style>
