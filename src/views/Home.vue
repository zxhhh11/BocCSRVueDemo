<script lang="ts" setup>
import { Ref, ref } from 'vue';

import Header from '@/components/common/Header.vue'; // Module  ...  has no default export.Vetur(1192)
import NavBar from '@/components/common/NavBar.vue'; //是因为 vetur 对setup 支持不是很完善 虽报错 但是不影响使用
import Content from '@/components/common/Content.vue'; // 如果使用 setup函数就没报错  // 或者在setup模式文件顶部再加一个script标签 其中写入文件name属性
import { defineProps, onMounted, defineEmits, reactive } from 'vue';
const isCollapse = ref(null);
// const nav: Ref<null> = ref();
const triggerMenu = () => {
  // isCollapse.value = !isCollapse.value;
};
const handleKeyDown = (e: any) => {
  if (e.keyCode === 122) {
    console.log(122, e);
    e.preventDefault(); // 阻止默认事件
    e.stopPropagation(); // 阻止冒泡事件
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  } else if (e.keyCode === 27) {
    console.log(27, e);
    e.preventDefault(); // 阻止默认事件
    e.stopPropagation(); // 阻止冒泡事件
  }
};
window.addEventListener('keydown', handleKeyDown, true);
const keyDown = () => {
  document.onkeydown = (e) => {
    //事件对象兼容
    // let e1 = e || window.event || arguments.callee.caller.arguments[0]
    let e1 = e || window.event;
    let key = Number(e1.key);
    if ((e1 && key > 47 && key < 58) || (key > 64 && key < 91)) {
      const inputs = document.getElementsByTagName('input');
      const textAreas = document.getElementsByTagName('textarea');
      let allIpts = [...inputs, ...textAreas];
      let isFocusFlag = false;
      for (let i = 0; i < allIpts.length; i++) {
        if (allIpts[i] == document.activeElement) {
          isFocusFlag = true;
          break;
        }
      }
      if (!isFocusFlag) {
        // console.log(nav, 'ref');
        // nav.value.focusFlag = true;
        // nav.value.menuquery.value.focus();
        // ref.nav.$refs.menuquery.focus();
      }
    }
  };
};
onMounted(() => {
  console.log(
    // nav.value.handleOpen,
    // nav.value.menuquery.focusFlag,

    'ref onMounted'
  );
  keyDown(); // 监听键盘
});
</script>

<template>
  <el-container class="home-content">
    <Header @triggerMenu="triggerMenu" :isCollapse="isCollapse"></Header>

    <el-container>
      <NavBar :isCollapse="isCollapse" ref="nav"></NavBar>
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
