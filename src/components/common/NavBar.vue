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
'@element-plus/icons-vue';
import { defineProps, onMounted, computed, ref, defineExpose } from 'vue';
// import { routes } from '@/router/index';
import { useRoute } from 'vue-router';
import { mockRouters } from '@/utils/routers';
const route = useRoute();
const menuquery = ref(null);
const focusFlag = ref(false);
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
  console.log(menuquery.value, onRoutes, 'onRoutes');
});
defineExpose({
  handleOpen,
  menuquery,
  focusFlag
});
</script>

<template>
  <div class="side-box">
    <div class="search-menu">
      <el-autocomplete
        popper-class="my-autocomplete"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        clearable
        ref="menuquery"
        @clear="clearQuickQuery"
        @select="handleSelect"
      >
        <template v-slot="{ item }">
          <div class="name">{{ item.value }}</div>
          <!-- <span class="addr">{{ item.address }}</span> -->
        </template>
      </el-autocomplete>
    </div>

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
    <div class="message">
      <div class="grid-content bg-purple">
        <div class="current-call">
          <div class="line">最近来电： <b class="time">2021-10-11</b></div>

          <div class="line"> 来电号码：<b class="callNo">18816881688</b> </div>
        </div>

        <div>
          <span class="line">
            <span> 您有&nbsp;<h3>10</h3>&nbsp;份待处理工单 </span>
          </span>

          <span class="line unread-message">
            <!-- <MailOutlined /> -->
            <i class="el-icon-message"></i>
            未读消息&nbsp;<h3>12</h3>&nbsp;条
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.el-aside {
  display: flex;
  flex-direction: column;
  height: calc(100% - 170px);
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
    border-right: 0;
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
.side-box {
  height: 100%;
  width: 200px;
  background: #fff;
}

.search-menu {
  height: 50px;
  padding: 8px 6px 4px;
  width: 200px;
  box-sizing: border-box;
  .el-input--suffix {
    .el-input__inner {
      padding-right: 30px;
      border: 1px solid #409eff;
      &:focus {
        border-width: 2px;
        box-shadow: 0 0 0 2px hwb(210deg 25% 0% / 20%);
      }
    }
  }
}
.message {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0;
  text-align: left;
  height: 120px;
  background: #f4f2f7;
  width: 200px;
  letter-spacing: 1.6px;
  color: #fff;
  font-size: 0.8em;
  padding: 4px 0 4px 4px;
  .grid-content.bg-purple {
    padding: 10px 0 0 12px;
    // background: #5470c6;
    border-radius: 4px 4px 0 0;
    background-image: linear-gradient(#fff, #5470c6);
    &:hover {
      background-image: linear-gradient(#fff, #5470c6);
      // background: #435aa0;
      // background-image: linear-gradient(#fff, #435aa0);
      box-shadow: 0 2px 2px 2px #00000029, 0 3px 6px 0 #0000001f,
        0 6px 12px 4px #00000017;
    }
  }
  .current-call {
    color: #18a058;
    margin: 6px 0 0;
    b.callNo {
      color: #409eff;
      cursor: pointer;
      text-decoration: underline;
      &:hover {
        color: #1890ff;
      }
    }

    // b {
    //   color: #1890ff;
    //   text-decoration: underline;
    //   cursor: pointer;
    //   &:hover {
    //     color: #096dd9;
    //   }
    // }
  }

  h3 {
    display: inline-block;
    font-size: 1.2em;
    color: #fac858;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
      color: #faad14;
    }
  }
  .unread-message {
  }
  .line {
    display: inline-block;
    margin-bottom: 6px;
  }
  .el-divider--horizontal {
    margin: 4px 0;
  }
}
</style>
