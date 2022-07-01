<script lang="ts">
export default {
  name: 'BaseDrawer' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<template>
  <div>
    <el-drawer
      title="交易列表"
      v-model="drawerVisiableVal"
      direction="rtl"
      :size="900"
      :append-to-body="false"
      :before-close="handleClose"
    >
      <template #title>
        <div class="card-title">快速查询</div>
      </template>
      <template #default>
        <div>
          <el-descriptions :column="2" class="query-box" size="small" border>
            <el-descriptions-item
              label="姓名"
              label-class-name="my-label"
              content-class-name="my-content"
            >
              <el-input
                placeholder="请在此处输入用户姓名"
                size="small"
                v-model="data.common.name"
                clearable
              >
              </el-input>
            </el-descriptions-item>
            <el-descriptions-item label="卡号">
              <el-input
                placeholder="请在此处输入信用卡号"
                size="small"
                v-model="data.common.creditCardNo"
                clearable
              >
              </el-input>
            </el-descriptions-item>
            <el-descriptions-item label="手机号">
              <el-input
                placeholder="请在此处输入手机号"
                size="small"
                v-model="data.common.phoneNo"
                clearable
              >
              </el-input>
            </el-descriptions-item>
            <el-descriptions-item label="证件号">
              <el-input
                placeholder="请在此处输入证件号"
                size="small"
                v-model="data.common.idNo"
                clearable
              >
              </el-input>
            </el-descriptions-item>
          </el-descriptions>
          <BaseTable
            :tableData="drawerData"
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
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="confirmClick">保存</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>
<script lang="ts" setup>
// import BaseTable from '../custom/BaseTable.vue';
import { drawerData } from '@/utils/data';
import {
  defineProps,
  onMounted,
  defineEmits,
  reactive,
  computed,
  ref
} from 'vue';

const props = defineProps({
  drawerVisiable: {
    type: Boolean,
    default: false
  }
});
let data = reactive({
  common: {
    name: '',
    creditCardNo: '',
    phoneNo: '',
    idNo: '',
    // drawerData: drawerData,
    listTotal: 0,
    currentPage: 1
  }
});
onMounted(() => {
  console.log(data, 'data');
});
const emit = defineEmits<{
  (e: 'handle-close', value: any): void;
  // (e: 'hide-dialog2'): void;
}>();
let drawerVisiableVal = computed({
  //封装组件中如果需要用V-model 来设置属性时，就需要通过computed 将属性做一下转化
  get: () => {
    console.log(props.drawerVisiable, ' props.drawerVisiable', emit, 'emit');
    return props.drawerVisiable;
  },
  set: (value) => {
    emit('handle-close', value);
  }
});
const handleClick = () => {},
  handleCurrent = (val: any) => {
    //这里没有用Mock
    // this.getHistoryList({ currentPage: val, part: 'branch' })
  },
  handleClose = (done: any) => {
    // this.$confirm('确认关闭？')
    //   .then(_ => {
    //     done();
    //   })
    //   .catch(_ => { });
    emit('handle-close', false);
  },
  cancelClick = () => {},
  confirmClick = () => {},
  columns = () => {
    return [
      {
        index: 0,
        prop: 'username',
        dataIndex: 'username',
        label: '客户姓名'
      },
      { index: 1, prop: 'cardNo', dataIndex: 'cardNo', label: '卡号' },
      { index: 2, prop: 'phoneNo', dataIndex: 'phoneNo', label: '手机号' },
      { index: 3, prop: 'ID', dataIndex: 'ID', label: '证件号码' }
    ];
  };
</script>

<style lang="scss">
/**遮罩层只显示在右侧content 中***/
.el-drawer__wrapper {
  position: absolute;
  .el-drawer__header {
    color: #333;
    font-weight: 600;
    border-bottom: 1px solid #f0f0f0;
    padding: 20px;
  }
  .el-drawer__body {
    padding: 0 8px;
  }
}
.el-drawer__open {
  .el-drawer.rtl {
    // padding: 4px 8px;
  }
}
.v-modal {
  position: absolute;
}
/**遮罩层只显示在右侧content 中***/
</style>
