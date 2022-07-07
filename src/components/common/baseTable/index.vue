<script lang="ts">
export default {
  name: 'BaseTable' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
/*******Table Paramter****
 *isMutiSelect 用于判断是否支持多选
 *
 *
 *
 * ***/
</script>

<template>
  <div>
    <div v-if="title" class="card-title">{{ title }}</div>
    <el-table
      :data="tableData"
      border
      size="small"
      fit
      :highlight-current-row="!isMutiSelect"
      @selection-change="handleSelectionChange"
      @current-change="handleCurrentChange"
      style="width: 100%"
      :default-sort="{ prop: defaultSort, order: 'descending' }"
    >
      <el-table-column type="selection" v-if="isMutiSelect" width="55">
      </el-table-column>
      <el-table-column
        v-for="(item, index) in newColumns()"
        :key="index"
        :sortable="item.sortable"
        :prop="item.prop"
        :width="item.width ? item.width : ''"
        :min-width="item.minwidth ? item.minwidth : ''"
        :label="item.label"
      >
        <template v-slot="{ row, column, $index }">
          <b
            v-if="item.isLink"
            class="custom-link"
            @click="item.onClick(row, column, $index)"
            >{{ row[item.prop] }}</b
          >
          <!-- render 方法渲染 column 中的自定义内容 -->
          <!-- <div v-else-if="item.prop=='operation'">
          <ColumnRender :render-col="item.render"
                        :record="item"
                        :value="row[item.dataIndex]"
                        :index="$index"
                        :column="column"
                        :prop-key="item.prop"></ColumnRender>

        </div> -->
          <!-- 如果actions 部分是按钮的组合 可以使用这个方法 -->
          <div v-else-if="item.prop == 'actions'">
            <el-button
              size="small"
              v-for="(btn, key) in item.actions"
              @click="btn.onClick(row, column, $index)"
              :type="btn.type ? btn.type : 'primary'"
              :round="btn.shape === 'round'"
              :key="key"
            >
              {{ btn.text }}</el-button
            >
          </div>
          <span v-else>{{ row[item.prop] }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="hasPagination"
      hide-on-single-page
      v-model:currentPage="currentPageValue"
      small
      layout="total, prev, pager, next, jumper"
      :total="total"
      @current-change="handleCurrentChangePage"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  defineProps,
  onMounted,
  defineEmits,
  reactive,
  ref,
  computed,
  toRefs
} from 'vue';
const props = defineProps({
  defaultSort: String,
  title: String,
  isMutiSelect: {
    type: Boolean
  },
  tableData: {
    type: Array
  },
  newColumns: {
    type: Function
  },
  handleClick: {
    type: Function
  },
  currentPage: {
    type: Number,
    default: () => 1
  },
  pageSize: {
    type: Number,
    default: () => 10
  },
  total: {
    type: Number,
    default: () => 20
  },
  layout: {
    type: String,
    default: () => ''
  },
  hasPagination: {
    type: Boolean,
    default: false
  }
});
let data = reactive({
  multipleSelection: [],
  currentRow: null
});
let { multipleSelection, currentRow } = toRefs(data);
const emit = defineEmits<{
  (e: 'handleCurrent', value: any): void;
  // (e: 'hide-dialog2'): void;
}>();
const handleCurrentChangePage = (val: any) => {
    emit('handleCurrent', val);
  },
  handleSelectionChange = (val: any) => {
    multipleSelection.value = val;
    // console.log(val, 'select')
  },
  handleCurrentChange = (val: any) => {
    if (props.isMutiSelect) {
      return;
    }
    currentRow.value = val;
    // console.log(val, 'singal')
  };
const currentPageValue = computed({
  //封装组件中如果需要用V-model 来设置属性时，就需要通过computed 将属性做一下转化
  get: () => {
    // console.log(showModal, 'showModal', emit, 'emit');
    return props.currentPage;
  },
  set: (value) => {
    emit('handleCurrent', value);
  }
});
</script>

<style lang="scss">
.base-pagination {
  font-size: 12px;
  color: #2a3451;
  line-height: 20px;
  height: 20px;
  padding-top: 20px;
  text-align: right;
  background-color: '#fff';
  .el-pagination__total,
  .el-pagination__sizes,
  .el-pagination__jump {
    font-size: 12px;
    line-height: 20px;
  }
  .el-pagination__total,
  .el-pagination__sizes {
    float: left;
  }
  .btn-prev,
  .btn-next,
  .el-pager li {
    margin: 0px 5px;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
  }
  .el-pager li {
    font-weight: 400;
    color: #606266;
    margin: 0 5px;
    min-width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 2px;
  }
  .el-pager li:not(.disabled).active {
    background-color: #2a76cd;
    color: #ffffff;
  }
  .el-input .el-input__inner {
    height: 20px;
    line-height: 20px;
  }
  .el-input--small .el-input__icon {
    line-height: 20px;
  }
  .btn-prev {
    padding-right: 0px;
  }
  .btn-next {
    padding-left: 0px;
  }
  .el-pagination button,
  .el-pagination span:not([class*='suffix']) {
    min-width: 25.5px;
  }
}
</style>
