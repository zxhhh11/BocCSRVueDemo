<script lang="ts">
export default {
  name: 'BaseCollapse' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<template>
  <div class="collapse-box">
    <el-collapse>
      <el-collapse-item>
        <template #title>
          1、中银卡取现手续费及利息介绍&nbsp;
          <i class="header-icon el-icon-info"></i>
          <el-button type="primary" class="send-msg" size="small"
            >发送短信</el-button
          >
        </template>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="data.common.textarea1"
        >
        </el-input>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          2、滞纳金及利息咨询&nbsp; <i class="header-icon el-icon-info"></i>
          <el-button type="primary" class="send-msg" size="small"
            >发送短信</el-button
          >
        </template>
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="data.common.textarea2"
        >
        </el-input>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          3、还款渠道提示&nbsp;<i class="header-icon el-icon-info"></i>
          <el-button type="primary" class="send-msg" size="small"
            >发送短信</el-button
          >
        </template>
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="data.common.textarea3"
        >
        </el-input>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          4、微信功能介绍及使用&nbsp; <i class="header-icon el-icon-info"></i>
          <el-button type="primary" class="send-msg" size="small"
            >发送短信</el-button
          >
        </template>
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="data.common.textarea4"
        >
        </el-input>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import {
  defineProps,
  onMounted,
  defineEmits,
  reactive,
  ref,
  computed
} from 'vue';
let data = reactive({
  common: {
    textarea1: `境内本行柜台：交易金额的1%，最低人民币10元/笔。境内本行和跨行ATM：交易金额的1%，
本行最低人民币8元/笔、跨行最低人民币12元/笔。境外本行或国际组织会员银行柜台或ATM：交易金额的3%，最低3.5美元/笔或500日元/笔。
境外银联ATM机：按照交易金额的1%,最低人民币15元/笔。现金类交易不享受免息还款待遇，另按日息万分之五的利率收取利息。
 `,
    textarea2: '',
    textarea3: '',
    textarea4: ''
  }
});
</script>

<style lang="scss">
.collapse-box {
  margin: 4px 0;
  // padding: 0 4px;
  border: 1px solid #ebeef5;
  .el-collapse-item__header {
    background: #f5f6fa;
    padding-left: 20px;
    .send-msg {
      position: absolute;
      right: 10%;
      z-index: 100;
    }
  }
  .el-collapse-item__content {
    background: #f5f6fa;
    padding: 10px 20px 10px;
  }
}
</style>
