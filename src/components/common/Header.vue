<script lang="ts">
export default {
  name: 'Header' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>

<script lang="ts" setup>
// import { logout } from '@/apis/user';
// import { useRouter } from 'vue-router';
import { defineProps, onMounted, defineEmits } from 'vue';
import { Fold, Setting, Expand, Sugar } from '@element-plus/icons';
import { useStore } from '@/store/index';
import { UserActionTypes } from '@/store/modules/user/action-types';
const store = useStore();
const props = defineProps({
  isCollapse: Boolean
});
const emit = defineEmits<{
  (e: 'triggerMenu'): void;
}>();
// const router = useRouter();
const handleLogout = async () => {
  store.dispatch(UserActionTypes.ACTION_LOGIN_OUT);
  // await logout().then((res) => {
  //   console.log(res, '555');
  // });
  // router
  //   .push({
  //     path: '/login'
  //   })
  //   .catch((err) => {
  //     console.warn(err);
  //   });
};
const triggerMenuFunc = () => {
  emit('triggerMenu');
};

onMounted(() => {});
</script>
<template>
  <el-header>
    <span class="trigger-menu">
      <div>
        <el-icon :size="36" v-if="props.isCollapse" @click="triggerMenuFunc">
          <fold />
        </el-icon>
        <el-icon :size="36" v-else @click="triggerMenuFunc">
          <expand />
        </el-icon>
      </div>
      <span class="system-name">VUE3后台管理系统</span>
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
  </el-header>
</template>

<style lang="scss">
.el-header {
  background-color: #b50029;
  color: #fff;
  text-align: left;
  height: 60px;
  line-height: 60px;
  width: 100%;
  padding: 0 20px 0 8px;
  .system-name {
    font-size: 1.2em;
    font-weight: 700;
    vertical-align: middle;
  }
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
</style>
