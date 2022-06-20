<script lang="ts">
import { defineComponent } from 'vue'; // onMounted, reactive

export default defineComponent({
  setup() {
    // const data = reactive({
    //   name: '123'
    // });
    // onMounted(() => {
    //   console.log(data);
    // });
  }
});
</script>

<template>
  <div class="content-test">
    <router-view></router-view>
  </div>
</template>
<style scoped>
.content-test div {
  background: salmon;
  color: yellowgreen;
  font-size: 40px;
}
</style>
