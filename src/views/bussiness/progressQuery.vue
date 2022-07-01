<script lang="ts">
export default {
  name: 'ProgressQuery' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<template>
  <div>
    <el-descriptions :column="3" class="query-box" size="mini" border>
      <el-descriptions-item
        label="证件类型"
        label-class-name="my-label"
        content-class-name="my-content"
      >
        <el-select
          v-model="data.common.idType"
          class="idType"
          clearable
          placeholder="请选择证件类型"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item
        label="证件号"
        label-class-name="my-label"
        content-class-name="my-content"
      >
        <el-input
          placeholder="请在此处输入证件号"
          v-model="data.common.idNo"
          clearable
        >
        </el-input>
      </el-descriptions-item>
      <el-descriptions-item label-class-name="hide">
        <el-button type="primary" size="small" @click="queryClick"
          >查询</el-button
        >
        <el-button type="danger" size="small" @click="resetClick"
          >重置</el-button
        >
      </el-descriptions-item>
    </el-descriptions>
    <div class="result-box" v-if="data.common.showResult">
      <BaseTable
        :tableData="data.common.progressList"
        :total="data.common.listTotal"
        :currentPage="data.common.currentPage"
        :hasPagination="true"
        :handleClick="handleClick"
        :isMutiSelect="false"
        title="交易列表"
        @handleCurrent="handleCurrent"
        :newColumns="columns"
      ></BaseTable>
    </div>
    <div>
      <CustomModal
        :dialogVisiable="data.common.detailVisiable"
        @hide-dialog="hideCardDialog"
        title="申请见进度详细信息"
        cancelText="关闭"
        :hasConfirm="false"
        width="40%"
      >
        <CustomList :list="ProgressDetail" :column="2" :span="1"></CustomList>
      </CustomModal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getProgressListAPI } from '@/apis/progress';

import CustomList from '@/components/common/customList/index.vue';
import { ProgressDetail } from '@/utils/data';

import BaseTable from '@/components/common/baseTable/index.vue';
import CustomModal from '@/components/common/modal/index.vue';
import {
  defineProps,
  onMounted,
  defineEmits,
  reactive,
  ref,
  computed
} from 'vue';
const options = [
  {
    value: 'item1',
    label: '居民身份证'
  },
  {
    value: 'item2',
    label: '临时身份证'
  },
  {
    value: 'item3',
    label: '军官证'
  },
  {
    value: 'item4',
    label: '武警警官证'
  },
  {
    value: 'item5',
    label: '士兵证'
  },
  {
    value: 'item6',
    label: '护照'
  }
];
let data = reactive({
  common: {
    ProgressDetail,
    detailVisiable: false,
    showResult: false,
    progressList: [],
    currentPage: 1,
    listTotal: 0,

    idType: '',
    idNo: ''
  }
});
onMounted(() => {
  getProgressList({ currentPage: 1, part: 'query' });
});

const hideCardDialog = () => {
    data.common.detailVisiable = false;
  },
  queryClick = () => {
    data.common.showResult = true;
  },
  resetClick = () => {
    data.common.showResult = false;
    (data.common.idType = ''), (data.common.idNo = '');
  },
  handleCurrent = (val: any) => {
    getProgressList({ currentPage: val, part: 'query' });
    data.common.currentPage = val;
  },
  handleClick = (row: any, column: any, $index: any) => {
    // console.log(row, column, $index)
  },
  getProgressList = (params: any) => {
    getProgressListAPI(params).then((res: any) => {
      data.common.progressList = res.data.rows;
      data.common.listTotal = res.data.total;
    });
  },
  showMore = () => {
    data.common.detailVisiable = true;
  },
  columns = () => {
    return [
      {
        index: 1,
        prop: 'tpk',
        dataIndex: 'tpk',
        label: 'TPK'
      },
      {
        index: 2,
        prop: 'applicationNo',
        dataIndex: 'applicationNo',
        label: '申请件编号',
        width: 140
      },
      { index: 3, prop: 'proposer', dataIndex: 'proposer', label: '申请人' },
      {
        index: 4,
        prop: 'incomID',
        dataIndex: 'incomID',
        label: '进件机构ID'
      },
      {
        index: 5,
        prop: 'receivedDate',
        dataIndex: 'receivedDate',
        label: '收件日期	'
      },
      {
        index: 6,
        prop: 'status',
        dataIndex: 'status',
        label: '申请状态',
        width: 300
      },
      {
        index: 7,
        prop: 'mechanism',
        dataIndex: 'mechanism',
        label: '处理机构'
      },
      {
        index: 8,
        prop: 'incomChannel',
        dataIndex: 'incomChannel',
        label: '进件渠道'
      },
      {
        index: 9,
        prop: 'actions',
        dataIndex: 'actions',
        label: '操作',
        actions: [
          {
            type: 'green',
            text: '详情',
            shape: 'round',
            onClick: showMore
          }
        ]
      }
    ];
  };
</script>

<style lang="scss">
.idType {
  width: 100%;
}
.result-box {
  margin: 4px 0;
}
</style>
