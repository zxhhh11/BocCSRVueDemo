<script lang="ts" setup>
import bigLogo from '/@/assets/boc2013_logo.png'; // @ is an alias to /src
import smallLogo from '/@/assets/logo-small.png'; // @ is an alias to /src
import { useStore } from '/@/store/index';
import { ref, computed } from 'vue';
// import { UserActionTypes } from '/@/store/modules/user/action-types';
import { UserMutationTypes } from '/@/store/modules/user/mutation-types';
import {
  Fold,
  Menu as IconMenu,
  Setting,
  Expand,
  Sugar
} from '@element-plus/icons';
import { logout } from '/@/apis/user';
import { useRouter } from 'vue-router';
const store = useStore();
const isCollapse = ref(false);
const router = useRouter();
const handleOpen = (key: any, keyPath: any) => {
    console.log(key, keyPath);
  },
  handleClose = (key: any, keyPath: any) => {
    console.log(key, keyPath);
  },
  triggerMenu = () => {
    console.log(isCollapse);

    isCollapse.value = !isCollapse.value;
  },
  IncrementHandle = () => {
    console.log(store.state.user.name);
    store.commit(UserMutationTypes.SET_COUNT, 1);
  };
const handleLogout = async () => {
  await logout().then((res) => {
    console.log(res, '555');
  });
  router
    .push({
      path: '/login'
      // query: state.otherQuery
    })
    .catch((err) => {
      console.warn(err);
    });
};
const count = computed(() => store.state.user.count);
</script>

<template>
  <el-container class="home-content">
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <div class="logo">
        <img :src="isCollapse ? smallLogo : bigLogo" alt="BOC" />
      </div>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon>
            <icon-menu />
          </el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <document />
          </el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <span class="trigger-menu">
          <div>
            <el-icon :size="36" v-if="isCollapse" @click="triggerMenu">
              <fold />
            </el-icon>
            <el-icon :size="36" v-else @click="triggerMenu">
              <expand />
            </el-icon>
          </div>
        </span>
        <span class="right-btns">
          <div class="user-avatar">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <span class="user-name">Admin</span>
          </div>
          <div>
            <el-icon :size="36">
              <setting />
            </el-icon>
          </div>
          <div>
            <el-icon :size="36">
              <sugar @click="handleLogout" />
            </el-icon>
          </div>
        </span>
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">expand</el-radio-button>
          <el-radio-button :label="true">collapse</el-radio-button>
        </el-radio-group> -->
      </el-header>
      <el-main>
        <div class="content">
          <div> Count: {{ count }} </div>
          <el-button @click="IncrementHandle">Increment</el-button>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #b50029;
  color: #fff;
  text-align: left;
  height: 60px;
  line-height: 60px;
  .trigger-menu,
  .right-btns {
    display: inline-block;
    height: 100%;
    cursor: pointer;
    & > i,
    & > div {
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
      height: 100%;
      text-align: center;
      padding: 0 8px;
      &:hover {
        background: #c90935;
      }
      & .el-avatar,
      & i {
        vertical-align: middle;
      }
    }
    .user-name {
      display: inline-block;
      margin-left: 6px;
    }
  }
  .right-btns {
    float: right;
  }
}

.el-aside {
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
    margin: auto;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e4e4;
    img {
      vertical-align: middle;
    }
  }
  .el-menu {
    height: 90%;
  }
}
.el-menu-item-group {
  .el-menu-item-group__title {
    display: none;
  }
}
.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  padding: 8px;
  .content {
    width: 100%;
    height: 100%;
    background: #fff;
  }
}

.home-content.el-container {
  height: 100vh;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
