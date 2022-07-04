<script lang="ts">
export default {
  name: 'InterCard' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<template>
  <div class="inter-history">
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
    <BaseTable
      v-if="showResult"
      :tableData="historyList"
      :total="listTotal"
      :currentPage="currentPage"
      :hasPagination="true"
      :handleClick="handleClick"
      :isMutiSelect="false"
      @handleCurrent="handleCurrent"
      :newColumns="columns"
      defaultSort="cardNo"
    ></BaseTable>
  </div>
</template>
<script lang="ts" setup>
import BaseTable from '@/components/common/baseTable/index.vue';

// import CustomList from '@/components/common/customList/index.vue';
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
  historyList: [],
  creditCardNo: '',
  showResult: false
});
let { currentPage, listTotal, historyList, creditCardNo, showResult } =
  toRefs(data);
onMounted(() => {
  getHistoryList({ currentPage: 1, part: 'inter' });
});

const queryClick = () => {
    showResult.value = true;
  },
  getHistoryList = (params: any) => {
    getHistoryListAPI(params).then((res: any) => {
      historyList.value = res.data.rows;
      listTotal.value = res.data.total;
    });
  },
  handleClick = () => {},
  handleCurrent = (val: any) => {
    getHistoryList({ currentPage: val, part: 'inter' });
    currentPage.value = val;
  },
  columns = () => {
    return [
      {
        index: 0,
        prop: 'cardNo',
        dataIndex: 'cardNo',
        label: '卡号',
        sortable: true
      },
      {
        index: 1,
        prop: 'initialTime',
        dataIndex: 'initialTime',
        label: '发起时间',
        sortable: true
      },
      {
        index: 2,
        prop: 'returnTime',
        dataIndex: 'returnTime',
        label: '返回时间',
        sortable: true
      },
      {
        index: 3,
        prop: 'type',
        dataIndex: 'type',
        label: '交易类型',
        sortable: true
      }
    ];
  };
</script>

<style lang="scss">
.inter-history {
  .query-box {
    margin-bottom: 6px;
  }
}
</style>
