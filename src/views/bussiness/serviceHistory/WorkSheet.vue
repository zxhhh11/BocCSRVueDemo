<script lang="ts">
export default {
  name: 'WorkSheet' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<template>
  <div class="work-sheet-history">
    <BaseTable
      :tableData="historyList"
      :total="listTotal"
      :currentPage="currentPage"
      :hasPagination="true"
      :handleClick="handleClick"
      :isMutiSelect="false"
      @handleCurrent="handleCurrent"
      :newColumns="columns"
      defaultSort="wordNo"
    ></BaseTable>
  </div>
</template>
<script lang="ts" setup>
import BaseTable from '@/components/common/baseTable/index.vue';
import { getHistoryListAPI } from '@/apis/history';
import {
  defineProps,
  onMounted,
  defineEmits,
  reactive,
  ref,
  toRefs
} from 'vue';
let data = reactive({
  currentPage: 1,
  listTotal: 0,
  historyList: []
});
let { currentPage, listTotal, historyList } = toRefs(data);
onMounted(() => {
  getHistoryList({ currentPage: 1, part: 'work' });
});

const getHistoryList = (params: any) => {
    getHistoryListAPI(params).then((res: any) => {
      historyList.value = res.data.rows;
      listTotal.value = res.data.total;
    });
  },
  handleClick = () => {},
  handleCurrent = (val: any) => {
    getHistoryList({ currentPage: val, part: 'work' });
    currentPage.value = val;
  },
  columns = () => {
    return [
      {
        index: 0,
        prop: 'wordNo',
        dataIndex: 'wordNo',
        label: '工单编号',
        sortable: true
      },
      {
        index: 1,
        prop: 'name',
        dataIndex: 'name',
        label: '名称',
        sortable: true
      },
      {
        index: 2,
        prop: 'cardNo',
        dataIndex: 'cardNo',
        label: '卡号',
        sortable: true
      },

      {
        index: 2,
        prop: 'initiator',
        dataIndex: 'initiator',
        label: '发起人',
        sortable: true
      },
      {
        index: 4,
        prop: 'initialTime',
        dataIndex: 'initialTime',
        label: '发起时间',
        sortable: true
      },
      {
        index: 2,
        prop: 'detail',
        dataIndex: 'detail',
        label: '详情',
        sortable: true
      }
    ];
  };
</script>
