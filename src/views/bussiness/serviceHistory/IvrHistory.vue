<script lang="ts">
export default {
  name: 'IvrHistory' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<template>
  <div class="ivr-history">
    <BaseTable
      :tableData="data.common.historyList"
      :total="data.common.listTotal"
      :currentPage="data.common.currentPage"
      :hasPagination="true"
      :handleClick="handleClick"
      :isMutiSelect="false"
      defaultSort="number"
      @handleCurrent="handleCurrent"
      :newColumns="columns"
    ></BaseTable>
  </div>
</template>
<script lang="ts" setup>
import BaseTable from '@/components/common/baseTable/index.vue';
import { getHistoryListAPI } from '@/apis/history';
import { defineProps, onMounted, defineEmits, reactive, ref } from 'vue';
let data = reactive({
  common: {
    currentPage: 1,
    listTotal: 0,
    historyList: []
  }
});
onMounted(() => {
  getHistoryList({ currentPage: 1, part: 'ivr' });
});

const getHistoryList = (params: any) => {
    getHistoryListAPI(params).then((res: any) => {
      data.common.historyList = res.data.rows;
      data.common.listTotal = res.data.total;
    });
  },
  handleClick = () => {},
  handleCurrent = (val: any) => {
    getHistoryList({ currentPage: val, part: 'ivr' });
    data.common.currentPage = val;
  },
  columns = () => {
    return [
      {
        index: 0,
        prop: 'number',
        dataIndex: 'number',
        label: '编号',
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
        prop: 'result',
        dataIndex: 'result',
        label: '结果',
        sortable: true
      },
      {
        index: 4,
        prop: 'time',
        dataIndex: 'time',
        label: '时间',
        sortable: true
      }
    ];
  };
</script>
