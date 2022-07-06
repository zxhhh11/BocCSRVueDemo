<script lang="ts">
export default {
  name: 'BranchHistory' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>

<template>
  <div class="branch-history">
    <el-descriptions :column="2" class="query-box" size="small" border>
      <el-descriptions-item
        label="信用卡号"
        label-class-name="my-label"
        content-class-name="my-content"
      >
        <el-input
          placeholder="请在此处输入信用卡号"
          size="small"
          v-model="creditCardNo"
          clearable
        >
        </el-input>
      </el-descriptions-item>
      <el-descriptions-item label-class-name="hide">
        <el-button type="primary" size="small" @click="queryClick" round
          >查询</el-button
        >
      </el-descriptions-item>
    </el-descriptions>
    <div v-if="showResult">
      <BaseTable
        :tableData="historyList"
        :total="listTotal"
        :currentPage="currentPage"
        :hasPagination="true"
        :handleClick="handleClick"
        :isMutiSelect="false"
        defaultSort="serialNumber"
        @handleCurrent="handleCurrent"
        :newColumns="columns"
      ></BaseTable>
    </div>
  </div>
</template>
<script lang="ts" setup>
import BaseTable from '@/components/common/baseTable/index.vue';
import CustomList from '@/components/common/customList/index.vue';
import {
  defineProps,
  onMounted,
  defineEmits,
  reactive,
  ref,
  toRefs
} from 'vue';
import { getHistoryListAPI } from '@/apis/history';
let data = reactive({
  currentPage: 1,
  listTotal: 0,
  historyList: [],
  creditCardNo: '',
  showResult: false
});
let { currentPage, listTotal, historyList, creditCardNo, showResult } =
  toRefs(data);
// onMounted(() => {
//   getHistoryList({ currentPage: 1, part: 'branch' });
// });

const queryClick = () => {
    showResult.value = true;
    getHistoryList({ currentPage: 1, part: 'branch' });
  },
  getHistoryList = (params: any) => {
    getHistoryListAPI(params).then((res: any) => {
      console.log(res, 'res getHistoryListAPI');
      historyList.value = res.data.rows;
      listTotal.value = res.data.total;
    });
  },
  handleClick = () => {},
  handleCurrent = (val: any) => {
    getHistoryList({ currentPage: val, part: 'branch' });
    currentPage.value = val;
  },
  columns = () => {
    return [
      {
        index: 0,
        prop: 'serialNumber',
        dataIndex: 'serialNumber',
        label: '流水号',
        sortable: true
      },
      {
        index: 1,
        prop: 'cardNo',
        dataIndex: 'cardNo',
        label: '卡号',
        sortable: true
      },
      // { index: 0, prop: 'number', dataIndex: 'number', label: '编号', },
      {
        index: 2,
        prop: 'name',
        dataIndex: 'name',
        label: '交易名称',
        sortable: true
      },
      {
        index: 3,
        prop: 'time',
        dataIndex: 'time',
        label: '时间',
        sortable: true,
        width: 180
      },
      {
        index: 4,
        prop: 'operator',
        dataIndex: 'operator',
        label: '操作员',
        sortable: true
      },
      {
        index: 5,
        prop: 'Reviewer',
        dataIndex: 'Reviewer',
        label: '复核员',
        sortable: true
      },
      {
        index: 6,
        prop: 'result',
        dataIndex: 'result',
        label: '结果',
        sortable: true
      }
    ];
  };
</script>

<style lang="scss">
.branch-history {
  .query-box {
    margin-bottom: 6px;
  }
}
</style>
