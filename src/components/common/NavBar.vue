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
import {
  defineProps,
  onMounted,
  computed,
  // ref,
  defineExpose,
  reactive,
  toRefs
} from 'vue';
import router from '@/router/index';
// import { routes } from '@/router/index';
import { useRoute } from 'vue-router';
import { originalMockRouters } from '@/utils/routers';
interface RouteType {
  value: string;
  path: string;
  address: string;
  quickCheck: string;
}
// interface MenuType{
//   value :RouteType[]
// }
const route = useRoute();
// const menuquery = ref(null);
// const focusFlag = ref(false);
const onRoutes = computed(() => {
  return route.path;
});
const menus: RouteType[] = [];
const data = reactive({
  allMenus: menus,
  menuIpt: '',
  mockRouters: originalMockRouters
  // testNum: 1
});
let { allMenus, menuIpt, mockRouters } = toRefs(data);
const props = defineProps({
  // isCollapse: Boolean
});
const handleOpen = (key: any, keyPath: any) => {
    //console.log(key, keyPath);
    // state.obj.testNum = state.obj.testNum + 2;
  },
  handleClose = (key: any, keyPath: any) => {
    // console.log(key, keyPath);
    // state.obj.testNum++;
  };
const clearQuickQuery = () => {
  mockRouters.value = originalMockRouters;
};
const handleSelect = (item: any) => {
  if (route.path === item.path) {
    return;
  }
  if (item.path) {
    const local = item.address.slice(0, 1);
    mockRouters.value = [originalMockRouters[local]];
    router.push(item.path);
  }
};
const querySearch = (queryString: any, cb: any) => {
  var queryMenus = allMenus.value;
  const results = queryMenus.filter((item) => {
    return item.quickCheck.toLowerCase().includes(queryString.toLowerCase());
  });

  cb(results);
};
const loadAll = () => {
  return [
    {
      value: '仪表盘',
      path: '/test/dashboard',
      address: '0-0',
      quickCheck: 'YBP'
    },
    // {
    //   value: '组件传参',
    //   path: '/test/emit',
    //   address: '0-1',
    //   quickCheck: 'ZJCC'
    // },
    {
      value: '数据测试',
      path: '/test/testData',
      address: '0-1',
      quickCheck: 'SJCE'
    },
    {
      value: '演示模块一',
      path: '/module1/subModule1',
      address: '1-0',
      quickCheck: 'YSMK'
    },
    {
      value: '账单查询',
      path: '/bussiness/billQuery',
      address: '2-0',
      quickCheck: 'ZDCX'
    },
    {
      value: '申请进度查询',
      path: '/bussiness/progressQuery',
      address: '2-1',
      quickCheck: 'SQJDCX'
    },
    {
      value: '关联业务',
      path: '/bussiness/relatedBussiness',
      address: '2-2',
      quickCheck: 'GLYW'
    },
    // {
    //   value: '服务历史',
    //   path: '/bussiness/serviceHistory',
    //   address: '2-3',
    //   quickCheck: 'FWLS'
    // },

    { value: '图表统计', path: '/charts', address: '3', quickCheck: 'TBTJ' }
  ];
};
onMounted(() => {
  allMenus.value = loadAll();
});
defineExpose({
  handleOpen
  // menuquery,
  // focusFlag
});
</script>

<template>
  <div class="side-box">
    <div class="search-menu">
      <el-autocomplete
        id="quickSearch"
        popper-class="my-autocomplete"
        v-model="menuIpt"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        clearable
        :trigger-on-focus="false"
        @clear="clearQuickQuery"
        @select="handleSelect"
      >
        <template v-slot="{ item }">
          <div class="name">{{ item.value }}</div>
        </template>
      </el-autocomplete>
    </div>
    <el-aside width="200px">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :default-active="onRoutes"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <template v-for="item in mockRouters">
            <template v-if="item.children">
              <el-sub-menu :index="item.path" :key="item.path">
                <template #title>
                  <svg class="icon" aria-hidden="true">
                    <use :xlink:href="item.icon"></use>
                  </svg>
                  <span>&nbsp;{{ item?.title }}</span>
                </template>
                <template v-for="subItem in item.children" :key="subItem.path">
                  <el-sub-menu v-if="subItem.children" :index="subItem.path">
                    <template #title>{{ subItem?.title }}</template>
                    <el-menu-item
                      v-for="(threeItem, i) in subItem.children"
                      :key="i"
                      :index="threeItem.path"
                    >
                      {{ threeItem?.title }}</el-menu-item
                    >
                  </el-sub-menu>
                  <el-menu-item v-else :index="subItem.path"
                    >{{ subItem?.title }}
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item :index="item.path" :key="item.path">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="item.icon"></use>
                </svg>
                <template #title>&nbsp;{{ item?.title }}</template>
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
    .el-sub-menu {
      .el-menu-item {
        height: 36px;
        line-height: 36px;
      }
    }
    .el-sub-menu__title,
    .el-menu-item {
      height: 40px;
      line-height: 40px;
      iconpark-icon {
        margin-right: 6px;
      }
    }
    .el-menu-item {
      iconpark-icon {
        vertical-align: middle;
      }
      &.is-active {
        background-color: #f5dcde;
        color: #a71e32;
        border-right: 2px solid #a71e32;
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
.el-menu-item:focus,
.el-menu-item:hover,
.el-menu .el-submenu__title:hover,
.el-menu .el-submenu__title:focus {
  color: #a71e32;
  background-color: #fafafa;
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
  .el-input {
    height: 40px;
    line-height: 40px;
  }
  .el-input--suffix {
    .el-input__inner {
      /* padding-right: 30px; */
      /* border: 1px solid #409eff; */
      &:focus {
        /* border-width: 2px;
        box-shadow: 0 0 0 2px hwb(210deg 25% 0% / 20%); */
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
