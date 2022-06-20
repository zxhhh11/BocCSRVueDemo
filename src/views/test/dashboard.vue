<script lang="ts" setup>
import {
  onMounted,
  ref,
  watchEffect,
  reactive,
  onBeforeUpdate,
  onUpdated
} from 'vue'; // computed, watch

const count = ref(1);
// const plusOne = computed(() => count.value + 1);
const state = reactive({ num: 1, think: 5 });
// const plusOne = computed({
//   get: () => count.value + 1, //   重新计算的值  即plusOne 的重新计算后的值
//   set: (val) => {
//     count.value = val - 1;
//   }
// });
console.log(count.value, 'value');
watchEffect(() => {
  //只能获取到变化后的值
  console.log(state.num, 'watch effect state.num');
});
// watch(
//   () => state.num, //这里必须传入要用watch 观察的参数
//   (newValue, oldValue) => {
//     // 可以拿到被追踪参数变化前后的值 这一点 watchEffect 做不到
//     console.log(newValue, 'newValue');
//     console.log(oldValue, 'oldValue');
//   }
// );
onMounted(() => {
  console.log(count.value, 'value 2');
  count.value++;
  // console.log(plusOne.value, 'b');
  // setInterval(() => {
  //   state.num = state.num + 2;
  // }, 2000);
});
onBeforeUpdate(() => {
  console.log('数据更新前调用----------', state);
});
onUpdated(() => {
  console.log('数据更新后调用------------', state);
});
const handelData = () => {
  state.think = state.think + 3;
  console.log(state.think);
};
const handelViewData = () => {
  state.num = state.num + 5;
  console.log(state.num);
};
</script>

<template>
  <div
    >dashboard {{ state.num }}

    <el-button type="primary" @click="handelData">handelData</el-button>
    <el-button type="primary" @click="handelViewData">handelViewData</el-button>
  </div>
</template>
