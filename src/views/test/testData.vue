<script lang="ts">
export default {
  name: 'testData' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<script lang="ts" setup>
import { useStore } from '@/store/index';
import { computed, reactive, toRefs } from 'vue';
// import { UserActionTypes } from '/@/store/modules/user/action-types';
import { UserMutationTypes } from '@/store/modules/user/mutation-types'; // mutation 的type 合集
const store = useStore();
interface stateType {
  user: string;
  num: number;
  numbers: number[];
  newCount: number[];
}
const data: stateType = reactive({
  user: 'huihui',
  num: 12,
  numbers: [1, 2, 3, 4, 5],
  newCount: computed(() => data.numbers.filter((num: number) => num % 2 === 0))
});
let { user, num, numbers, newCount } = toRefs(data);
const newCount2 = computed(() =>
  numbers.value.filter((num: number) => num % 2 === 1)
);
const storeCount = computed(() => store.state.user.count * 5);

const IncrementHandle = () => {
  num.value++;
  numbers.value.push(6);

  // console.log(
  //   state.numbers,
  //   state.newCount,
  //   newCount2.value,
  //   'ddf',
  //   storeCount.value
  // );
  store.commit(UserMutationTypes.SET_COUNT, 1);
};
const count = computed(() => store.state.user.count);
</script>

<template>
  <div
    >testData

    <div>
      Count: {{ count }} {{ num }} storeCount:{{ storeCount }} newCount:{{
        newCount[0]
      }}
      newCount2:{{ newCount2[0] }}</div
    >
    <span>{{ storeCount }}</span>
    <el-button @click="IncrementHandle">Increment</el-button>
  </div>
</template>
