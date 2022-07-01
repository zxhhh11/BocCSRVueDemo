<script lang="ts">
export default {
  name: 'CustomerInfo' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<template>
  <div class="customer-info">
    <CustomList
      :list="customerBasicInfo"
      title="客户基础信息"
      :column="2"
      :span="1"
    ></CustomList>
    <el-tabs>
      <el-tab-pane>
        <template #label
          ><span
            ><el-icon class="tabs-icon"><User /></el-icon> 客户信息</span
          ></template
        >
        <CustomList
          :list="customerInfoData"
          :column="2"
          title="客户详细信息"
        ></CustomList>

        <CustomList
          customClass="manager-info"
          :list="ManagerInfo"
          :column="2"
          :showMore="showMore"
          title="客户经理信息"
        >
          <template #extra>
            <!-- 这里有跨组件传递slot的demo grandFather->parent-child  -->
            <el-icon
              @click="showMoreHandle"
              class="el-icon-caret-top trigger-menu"
            >
              <CaretTop v-if="showMore" />
              <CaretBottom v-else />
            </el-icon>
          </template>
        </CustomList>
        <CustomList :list="recepInfo" :column="2" title="接待单信息">
          <!-- 用于在list 后面添加一些自定义项 -->
          <template #addItem>
            <el-descriptions-item
              :span="2"
              label="来电原因"
              v-model="callReason"
            >
              <el-cascader :options="options" clearable></el-cascader>
            </el-descriptions-item>
            <el-descriptions-item :span="2" label="客户问题">
              <el-input type="textarea" v-model="customerIssue"></el-input>
            </el-descriptions-item>
            <el-descriptions-item :span="2" label="">
              <el-button type="primary" size="mini">保存</el-button>
            </el-descriptions-item>
          </template>
        </CustomList>
      </el-tab-pane>
      <el-tab-pane>
        <template #label
          ><span>
            <el-icon class="tabs-icon"><CollectionTag /></el-icon>
            客户标识</span
          ></template
        >
        <CustomList :list="customerTags" :column="1" title=""></CustomList>
        <div class="tags-desc">
          <el-input type="textarea" v-model="tagsDesc"></el-input>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import {
  customerInfoData,
  ManagerInfo,
  recepInfo,
  options,
  customerTags,
  customerBasicInfo
} from '@/utils/data';
import CustomList from '@/components/common/customList/index.vue';
import {
  defineProps,
  onMounted,
  defineEmits,
  reactive,
  computed,
  ref
} from 'vue';
const showMore = ref(false),
  showMoreHandle = () => {
    showMore.value = !showMore.value;
  };
// export default {
//   components: { CustomList },
//   data() {
//     return {
//       customerInfoData,
//       ManagerInfo,
//       recepInfo,
//       showMore: false,
//       options,
//       customerTags,
//       customerBasicInfo,
//       callReason: '',
//       customerIssue: '',
//       tagsDesc: '这是一段关于重要标识得详细得文字描述'
//     };
//   },
//   methods: {
//     showMoreHandle() {
//       this.showMore = !this.showMore;
//     }
//   }
// };
</script>
<style lang="scss">
.customer-info {
  .el-tabs__content {
    padding: 0 4px;
  }
  .tabs-icon {
    vertical-align: middle;
  }
  .manager-info {
    .el-descriptions__header {
      justify-content: unset;
      i {
        cursor: pointer;
      }
    }
    .el-descriptions__extra {
      i {
        display: inline-block;
        width: auto;
        height: auto;
        text-align: center;
        svg {
          width: 1.4em;
          height: 1.4em;
        }
      }
    }
  }
  .tags-desc {
    margin: 4px 0;
  }
}
</style>
