<script lang="ts" setup>
import { ref } from 'vue';

import Header from '@/components/common/Header.vue'; // Module  ...  has no default export.Vetur(1192)
import NavBar from '@/components/common/NavBar.vue'; //是因为 vetur 对setup 支持不是很完善 虽报错 但是不影响使用
import Content from '@/components/common/Content.vue'; // 如果使用 setup函数就没报错  // 或者在setup模式文件顶部再加一个script标签 其中写入文件name属性

const isCollapse = ref(false);

const triggerMenu = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<template>
  <el-container class="home-content">
    <Header @triggerMenu="triggerMenu" :isCollapse="isCollapse"></Header>

    <el-container>
      <NavBar :isCollapse="isCollapse"></NavBar>
      <el-main>
        <div class="content">
          <Content></Content>
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
  height: 100%;
}
.el-container {
  flex-direction: column;
}
.home-content > .el-container {
  flex-direction: row;
}
</style>
