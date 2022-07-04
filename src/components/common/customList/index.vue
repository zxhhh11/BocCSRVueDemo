<script lang="ts">
export default {
  name: 'CustomList' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<template>
  <div class="custom-list">
    <el-descriptions
      :title="title"
      :class="customClass"
      :column="column"
      size="small"
      :labelStyle="labelStyle"
      border
    >
      <!-- 这里有跨组件传递slot的demo grandFather->parent-child   parent-->
      <template #extra>
        <slot name="extra"></slot>
      </template>
      <template v-for="(item, key) in list">
        <el-descriptions-item
          :key="key"
          v-if="showMore"
          :span="item.span ? item.span : span"
          :label-class-name="labelClassName"
        >
          <template #label>
            {{ item.label }}
          </template>
          <template v-if="item.isTag">
            <el-tag
              size="small"
              :class="['card-status', 'card-type-' + item.type]"
            >
              {{ item.value }}</el-tag
            >
          </template>
          <template v-else> {{ item.value }}</template>
        </el-descriptions-item>
      </template>
      <slot name="addItem"></slot>
      <!-- slot name = addItem 用来添加一些特殊的自定义内容 -->
    </el-descriptions>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, defineEmits, reactive, computed } from 'vue';
const props = defineProps({
  list: Array,
  title: String,
  labelStyle: Object,
  labelClassName: String,
  column: {
    type: Number,
    default: 2
  },
  span: {
    type: Number,
    default: 1
  },
  customClass: String,
  showMore: {
    type: Boolean,
    default: true
  }
});
onMounted(() => {
  // console.log(props, 'props dialogVisiable123');
});
</script>

<style lang="scss">
.label-width-100 {
  width: 100px;
}
</style>
