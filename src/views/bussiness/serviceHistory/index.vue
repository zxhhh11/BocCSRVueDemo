<script lang="ts">
export default {
  name: 'serviceHistory' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>

<template>
  <div class="servece-history">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="first">
        <template #label>
          <span><i class="el-icon-orange"></i> 400服务历史</span></template
        >
        <History400></History400>
      </el-tab-pane>
      <el-tab-pane name="second">
        <template #label>
          <span><i class="el-icon-coffee"></i> IVR历史</span>
        </template>
        <IvrHistory></IvrHistory>
      </el-tab-pane>
      <el-tab-pane name="third">
        <template #label>
          <span><i class="el-icon-coffee"></i> 分行服务历史</span>
        </template>
        <BranchHistory></BranchHistory>
      </el-tab-pane>
      <el-tab-pane name="fourth">
        <template #label>
          <span><i class="el-icon-coffee"></i> 国际卡服务历史</span>
        </template>
        <InterCard></InterCard>
      </el-tab-pane>
      <el-tab-pane name="fifth">
        <template #label>
          <span><i class="el-icon-coffee"></i> 工单历史</span>
        </template>
        <WorkSheet></WorkSheet>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary" class="refresh-btn" size="small" round>
      <el-icon><Refresh /></el-icon
    ></el-button>
  </div>
</template>
<script lang="ts" setup>
// import { useRouter } from 'vue-router';
import { defineProps, onMounted, defineEmits, reactive, ref } from 'vue';
import History400 from './History400.vue';
import BranchHistory from './BranchHistory.vue';

import InterCard from './InterCard.vue';
import WorkSheet from './WorkSheet.vue';
import IvrHistory from './IvrHistory.vue';
let activeName = ref('second');
const handleClick = (tab: any, event: any) => {
  // console.log(tab, event, this.$parent);
};
</script>
<style lang="scss">
.servece-history {
  position: relative;
  .refresh-btn {
    position: absolute;
    right: 200px;
    top: 6px;
  }
}
</style>
