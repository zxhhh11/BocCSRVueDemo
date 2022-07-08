<script lang="ts">
export default {
  name: 'Content' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<script lang="ts" setup>
import BaseDrawer from '@/components/common/baseDrawer/index.vue';
import serviceHistory from '@/views/bussiness/serviceHistory/index.vue';
import TagModule2 from './TagModule2.vue';
import { useRoute } from 'vue-router';

import {
  defineProps,
  onMounted,
  defineEmits,
  reactive,
  computed,
  ref,
  watch,
  watchEffect,
  toRefs,
  Ref
} from 'vue';
/**********data************/
const route = useRoute();

let data = reactive({
  drawerVisiable: false
});
let { drawerVisiable } = toRefs(data);
let handleClose = () => {
    drawerVisiable.value = false;
  },
  showDrawer = () => {
    drawerVisiable.value = true;
  };

let tabIndex = 2;
const editableTabsValue = ref('2');
interface TabItemType {
  title: string | unknown;
  name: string;
  content: HTMLElement;
  closable: boolean;
}
const editableTabs: Ref<TabItemType[]> = ref([
  {
    title: '服务历史',
    name: '1',
    content: serviceHistory,
    closable: false
  },
  {
    title: route.meta.title, //这个是刷新时或页面首次加载时得默认值
    name: '2',
    content: TagModule2,
    closable: false
  }
]);
watchEffect(() => {
  //只能获取到变化后的值
});
watch(
  route, //这里必须传入要用watch 观察的参数
  (to, from) => {
    // 可以拿到被追踪参数变化前后的值 这一点 watchEffect 做不到
    console.log(
      to,
      ' towatch effect state.num',
      editableTabsValue,
      'editableTabsValue'
    );
    if (typeof to.meta.title === 'string') {
      editableTabs.value[1].title = to.meta.title;
    }
    if (editableTabsValue.value === '1' && to.fullPath !== '/login') {
      editableTabsValue.value = '2';
    }
  }
);
</script>

<template>
  <div class="right-box">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      class="demo-tabs right-tabs"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="(item.title as string)"
        :name="item.name"
        :closable="item.closable"
      >
        <component :is="item.content"></component>
      </el-tab-pane>
    </el-tabs>
    <div class="link-box">
      <div v-if="!drawerVisiable" class="custom-user-link" @click="showDrawer">
        交易列表
        <el-icon><CaretRight /></el-icon>
      </div>
    </div>
    <BaseDrawer
      :drawerVisiable="drawerVisiable"
      @handle-close="handleClose"
    ></BaseDrawer>
  </div>
</template>

<style lang="scss">
.el-tabs .el-tabs__header.is-top {
  padding: 0 0 0 6px;
}
.right-tabs {
  & > .el-tabs__content {
    height: calc(100vh - 204px);
    // height: calc(100% - 52px);
    //  height: calc(100% - 52px);
    overflow-y: auto;
    .el-tab-pane {
      height: 100%;
      & > div {
        height: 100%;
        & > .el-tabs.el-tabs--top {
          height: 100%;
          .el-tabs__header {
            margin: 0 0 6px;
          }
          .el-tabs__content {
            //  height: calc(100% - 52px);
          }
        }
      }
    }
  }
  &.el-tabs > .el-tabs__header.is-top {
    margin: 0 0 5px;
  }
}
.right-box {
  height: 100%;
  position: relative;
  .link-box {
    position: absolute;
    right: 0;
    top: 10px;
    z-index: 10;
    .custom-user-link {
      font-size: 14px;
      width: 70px;
      background: #5470c6;
      border-radius: 50% 0 0 50%;
      height: 70px;
      text-align: center;
      color: #fff;
      padding: 10px 12px 0 18px;
      cursor: pointer;
      box-shadow: 0 2px 2px 2px #00000029, 0 3px 6px 0 #0000001f,
        0 6px 12px 4px #00000017;
      &:hover {
        background: #435aa0;
      }
      i {
        font-size: 18px;
      }
    }
  }
}
</style>
