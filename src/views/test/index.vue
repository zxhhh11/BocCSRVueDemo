<script lang="ts">
export default {
  name: 'test' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>

<template>
  test
  <router-view></router-view>
</template>
