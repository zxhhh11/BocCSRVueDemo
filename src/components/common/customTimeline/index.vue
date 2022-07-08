<script lang="ts">
export default {
  name: 'CustomTimeline' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>

<template>
  <div class="custom-timeline">
    <el-timeline>
      <template v-for="(item, index) in timelineData" :key="index">
        <el-timeline-item
          :timestamp="item.callNumber"
          :icon="item.icon"
          :color="item.color"
          placement="top"
        >
          <el-card>
            <h5>坐席：{{ item.operator }}</h5>
            <p>来电时间{{ item.time }}</p>
          </el-card>
        </el-timeline-item>
      </template>
    </el-timeline>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
interface LineItemType {
  callNumber: string;
  icon?: string;
  color?: string;
  operator: string;
  time: string;
}
const props = defineProps({
  timelineData: {
    type: Array as PropType<LineItemType[]>
  }
});
</script>

<style lang="scss">
.custom-timeline {
  .el-card {
    h4 {
      margin-bottom: 6px;
    }
  }
}
.el-timeline-item__node--normal {
  left: -4px;
  width: 18px;
  height: 18px;
}
.el-timeline-item__timestamp.is-top {
  text-align: left;
}
</style>
