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
          v-model="idType"
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
        <el-input placeholder="请在此处输入证件号" v-model="idNo" clearable>
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
    <div class="result-box" v-if="showResult">
      <BaseTable
        :tableData="progressList"
        :total="listTotal"
        :currentPage="currentPage"
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
        :dialogVisiable="detailVisiable"
        @hide-dialog="hideCardDialog"
        title="申请见进度详细信息"
        cancelText="关闭"
        :hasConfirm="false"
        width="40%"
      >
        <CustomList :list="ProgressDetails" :column="2" :span="1"></CustomList>
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
  toRefs,
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
  ProgressDetails: ProgressDetail,
  detailVisiable: false,
  showResult: false,
  progressList: [],
  currentPage: 1,
  listTotal: 0,
  idType: '',
  idNo: ''
});
let {
  ProgressDetails,
  detailVisiable,
  showResult,
  progressList,
  currentPage,
  listTotal,
  idType,
  idNo
} = toRefs(data);
onMounted(() => {
  getProgressList({ currentPage: 1, part: 'query' });
});

const hideCardDialog = () => {
    detailVisiable.value = false;
  },
  queryClick = () => {
    showResult.value = true;
  },
  resetClick = () => {
    showResult.value = false;
    (idType.value = ''), (idNo.value = '');
  },
  handleCurrent = (val: any) => {
    getProgressList({ currentPage: val, part: 'query' });
    currentPage.value = val;
  },
  handleClick = (row: any, column: any, $index: any) => {
    // console.log(row, column, $index)
  },
  getProgressList = (params: any) => {
    getProgressListAPI(params).then((res: any) => {
      progressList.value = res.data.rows;
      listTotal.value = res.data.total;
    });
  },
  showMore = () => {
    detailVisiable.value = true;
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
        width: 160
      },
      { index: 3, prop: 'proposer', dataIndex: 'proposer', label: '申请人' },
      {
        index: 4,
        prop: 'incomID',
        dataIndex: 'incomID',
        label: '进件机构ID',
        width: 160
      },
      {
        index: 5,
        prop: 'receivedDate',
        dataIndex: 'receivedDate',
        label: '收件日期',
        width: 160
      },
      {
        index: 6,
        prop: 'status',
        dataIndex: 'status',
        label: '申请状态',
        width: 350
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
        label: '进件渠道',
        width: 100
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
