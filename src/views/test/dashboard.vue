<script lang="ts" setup>
import {
  onMounted,
  ref,
  watchEffect,
  reactive,
  onBeforeUpdate,
  onUpdated,
  toRefs
} from 'vue'; // computed, watch

const count = ref(1);
// const plusOne = computed(() => count.value + 1);
const data = reactive({ num: 1, think: 5 });
// const plusOne = computed({
//   get: () => count.value + 1, //   重新计算的值  即plusOne 的重新计算后的值
//   set: (val) => {
//     count.value = val - 1;
//   }
// });
// console.log(count.value, 'value');
let { num, think } = toRefs(data);
watchEffect(() => {
  //只能获取到变化后的值
  // console.log(state.num, 'watch effect state.num');
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
  // console.log(count.value, 'value 2');
  count.value++;
  // console.log(plusOne.value, 'b');
  // setInterval(() => {
  //   state.num = state.num + 2;
  // }, 2000);
});
onBeforeUpdate(() => {
  console.log('数据更新前调用----------', data);
});
onUpdated(() => {
  console.log('数据更新后调用------------', data);
});
const handelData = () => {
  think.value = think.value + 3;
  console.log(think.value);
};
const handelViewData = () => {
  num.value = num.value + 5;
  console.log(num.value);
};
</script>

<template>
  <div
    >dashboard {{ num }}

    <el-button type="primary" @click="handelData">handelData</el-button>
    <el-button type="primary" @click="handelViewData">handelViewData</el-button>
  </div>
</template>
