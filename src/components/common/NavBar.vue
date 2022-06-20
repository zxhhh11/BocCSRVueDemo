<script lang="ts">
export default {
  name: 'NavBar'
};
</script>
<script lang="ts" setup>
// import bigLogo from '@/assets/boc2013_logo.png'; // @ is an alias to /src
// import smallLogo from '@/assets/logo-small.png'; // @ is an alias to /src
import // Menu as IconMenu,
// Setting,
// Document as IconDocument,
// Location as IconLocation
// Search
'@element-plus/icons';
import { defineProps, onMounted, computed } from 'vue';
// import { routes } from '@/router/index';
import { useRoute } from 'vue-router';
import { mockRouters } from '@/utils/routers';
const route = useRoute();

const onRoutes = computed(() => {
  return route.path;
});
const props = defineProps({
  isCollapse: Boolean
});
const handleOpen = (key: any, keyPath: any) => {
    //console.log(key, keyPath);
  },
  handleClose = (key: any, keyPath: any) => {
    // console.log(key, keyPath);
  };
onMounted(() => {
  console.log(mockRouters, onRoutes, 'onRoutes');
});
</script>

<template>
  <el-aside :width="isCollapse ? '64px' : '200px'">
    <!-- <div class="logo">
      <img :src="isCollapse ? smallLogo : bigLogo" alt="BOC" />
    </div> -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        unique-opened
        :default-active="onRoutes"
        class="el-menu-vertical-demo"
        :collapse="props.isCollapse"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <template v-for="item in mockRouters">
          <template v-if="item.children">
            <el-sub-menu :index="item.path" :key="item.path">
              <template #title>
                <iconpark-icon
                  class="custom-svg"
                  :name="item.icon"
                ></iconpark-icon>
                <span>{{ item?.title }}</span>
              </template>
              <template v-for="subItem in item.children">
                <el-sub-menu
                  v-if="subItem.children"
                  :index="subItem.path"
                  :key="subItem.path"
                >
                  <template #title>{{ subItem?.title }}</template>
                  <el-menu-item
                    v-for="(threeItem, i) in subItem.children"
                    :key="i"
                    :index="threeItem.path"
                  >
                    {{ threeItem?.title }}</el-menu-item
                  >
                </el-sub-menu>
                <el-menu-item v-else :index="subItem.path" :key="subItem.path"
                  >{{ subItem?.title }}
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.path" :key="item.path">
              <iconpark-icon
                :name="item.icon"
                :color="
                  onRoutes.indexOf(item.path) !== -1 ? '#409eff' : '#303133'
                "
              ></iconpark-icon>
              <template #title>{{ item?.title }}</template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<style lang="scss">
.el-aside {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--el-text-color-primary);
  text-align: center;
  overflow-y: auto;
  transition: width 0.15s;
  -webkit-transition: width 0.15s;
  -moz-transition: width 0.15s;
  -webkit-transition: width 0.15s;
  -o-transition: width 0.15s;
  .logo {
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
    box-sizing: border-box;
    border-bottom: 1px solid transparent;
    img {
      vertical-align: middle;
    }
  }
  .el-menu {
    height: 100%;
    .el-sub-menu__title,
    .el-menu-item {
      iconpark-icon {
        margin-right: 6px;
      }
    }
    .el-menu-item {
      iconpark-icon {
        vertical-align: middle;
      }
    }
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%;
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  flex: 1;
}
</style>
