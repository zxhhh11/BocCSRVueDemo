<script lang="ts">
export default {
  name: 'BillQuery' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<template>
  <div>
    <div class="card-title">
      信用卡账单查询
      <span class="title-btn">
        <Button type="primary" size="small" class="wechat-push" disabled
          >微信推送</Button
        >
        <span class="custom-message">暂不支持转接IVR</span>
        <Button type="primary" size="small" disabled>转IVR播报-本期账单</Button>
      </span>
    </div>
    <el-descriptions :column="2" class="query-box" size="small" border>
      <el-descriptions-item
        label="信用卡卡号"
        label-class-name="my-label"
        content-class-name="my-content"
      >
        <el-input
          placeholder="请在此处输入信用卡号"
          size="small"
          v-model="creditCardNo"
          clearable
        >
        </el-input>
      </el-descriptions-item>
      <el-descriptions-item label-class-name="hide">
        <el-button type="primary" size="small" @click="queryClick"
          >提交</el-button
        >
      </el-descriptions-item>
    </el-descriptions>
    <div v-if="billListVisiable">
      <div class="card-title">账期列表 </div>
      <div class="cst-new-card">
        <el-tooltip
          v-for="(item, key) in billLists"
          :key="key"
          effect="dark"
          :content="`( ${item.dateRange} )`"
          placement="top-start"
        >
          <div
            class="custom-month-list golang"
            @click="monthClick(key)"
            :class="activeKey === key ? 'active' : ''"
          >
            <div class="title select">{{ item.monthValue }}</div>
          </div>
        </el-tooltip>
      </div>
      <div>
        <div class="custom-message"
          >自2020年8月1日钱起，新出账单涉及白金级以上信用卡产品宽限期限从原有9天调整为8天，公务卡宽限期限从原有3天调整为2天。钛金，金，普卡宽限期限仍为3天!</div
        >
        <CustomList
          :list="monthListDescs"
          :labelStyle="{ width: '100px' }"
          :column="3"
          :span="1"
        ></CustomList>
        <BaseTable
          :tableData="fourDatas"
          class="new-table"
          :total="listTotal"
          :currentPage="currentPage"
          :handleClick="handleClick"
          :isMutiSelect="false"
          @handleCurrent="handleCurrent"
          :newColumns="columns"
        ></BaseTable>
        <div class="cst-footer">
          <el-button
            type="green"
            size="small"
            class="success"
            @click="tranDetailHandle(true)"
            >交易明细</el-button
          >
          <el-button
            type="orange"
            size="small"
            class="warning"
            @click="billResetHandle"
            >个人卡短信账单重置2021-06</el-button
          >
        </div>
      </div>
    </div>

    <div class="card-title"
      >发送咨询类短讯
      <el-button
        type="danger"
        class="show-hide"
        size="small"
        @click="handleTextMsg"
        plain
        >{{ isShowTextMsg ? '隐藏' : '显示' }}</el-button
      >
    </div>
    <div v-if="isShowTextMsg">
      <el-descriptions :column="2" class="query-box" size="small" border>
        <el-descriptions-item
          label="手机号"
          label-class-name="my-label"
          content-class-name="my-content"
        >
          <el-input
            placeholder="请在此处输入手机号"
            size="small"
            v-model="phoneNo"
            :style="{ width: '30%', marginRight: '20px' }"
            clearable
          >
          </el-input
          ><span class="custom-message"
            >提示：如未修改发送号码将向客户预留手机号发送短信</span
          >
        </el-descriptions-item>
      </el-descriptions>
      <BaseCollapse></BaseCollapse>
    </div>
    <div v-if="detailVisiable">
      <CustomModal
        :dialogVisiable="detailVisiable"
        @hide-dialog="hideTranDetailDialog"
        title="交易明细"
        cancelText="关闭"
        :hasConfirm="false"
        width="80%"
      >
        <BaseTable
          :tableData="tradeDatas"
          class="new-table"
          :total="tranListTotal"
          :currentPage="tranCurrentPage"
          :handleClick="tranHandleClick"
          :isMutiSelect="false"
          @handleCurrent="TtranHandleCurrent"
          :newColumns="tranColumns"
        ></BaseTable>
      </CustomModal>
    </div>
    <div v-if="billResetVisiable">
      <CustomModal
        :dialogVisiable="billResetVisiable"
        @hide-dialog="hideBillResetDialog"
        title="个人卡短信账单重置"
        cancelText="关闭"
        :hasConfirm="false"
        width="40%"
      >
        <el-descriptions :column="2" class="query-box" size="small" border>
          <el-descriptions-item label="信用卡卡号">
            <el-input
              placeholder="请在此处输入信用卡卡号"
              size="small"
              v-model="billCreditCardNo"
              clearable
            >
            </el-input>
          </el-descriptions-item>
          <el-descriptions-item label="手机号">
            <el-input
              placeholder="请在此处输入手机号"
              size="small"
              v-model="billPhoneNo"
              clearable
            >
            </el-input>
          </el-descriptions-item>
          <el-descriptions-item label="账单日期">
            <!-- <el-input placeholder="请在此处选择账单日期"
                     
                      v-model="billDate"
                      clearable>
            </el-input> -->
            <el-date-picker
              v-model="billDate"
              size="small"
              type="date"
              placeholder="请在此处选择账单日期"
            >
            </el-date-picker>
          </el-descriptions-item>
          <el-descriptions-item label="账单日">
            <el-input
              placeholder="请在此处输入账单日"
              size="small"
              v-model="billNo"
              clearable
            >
            </el-input>
          </el-descriptions-item>
        </el-descriptions>
      </CustomModal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseCollapse from '@/components/common/baseCollapse/index.vue';
import { billList, monthListDesc, fourData, tradeData } from '@/utils/data';
import CustomList from '@/components/common/customList/index.vue';
import BaseTable from '@/components/common/baseTable/index.vue';
import CustomModal from '@/components/common/modal/index.vue';
import {
  defineProps,
  onMounted,
  defineEmits,
  reactive,
  ref,
  computed,
  toRefs
} from 'vue';
let data = reactive({
  creditCardNo: '',
  billLists: billList,
  billListVisiable: false,
  billResetVisiable: false,
  activeKey: 0,
  monthListDescs: monthListDesc,
  fourDatas: fourData,
  tradeDatas: tradeData,
  tranListTotal: 1,
  tranCurrentPage: 1,
  listTotal: 1,
  currentPage: 1,
  isShowTextMsg: false,
  phoneNo: 18202008219,
  detailVisiable: false,
  billNo: '',
  billDate: '',
  billPhoneNo: '',
  billCreditCardNo: ''
});

let {
  creditCardNo,
  billLists,
  billListVisiable,
  billResetVisiable,
  activeKey,
  monthListDescs,
  fourDatas,
  tradeDatas,
  tranListTotal,
  tranCurrentPage,
  listTotal,
  currentPage,
  isShowTextMsg,
  phoneNo,
  detailVisiable,
  billNo,
  billDate,
  billPhoneNo,
  billCreditCardNo
} = toRefs(data);
onMounted(() => {
  console.log(billListVisiable, ',billListVisiable');
});
const tranHandleClick = () => {},
  TtranHandleCurrent = () => {},
  tranDetailHandle = () => {
    detailVisiable.value = true;
  },
  billResetHandle = () => {
    billResetVisiable.value = true;
  },
  hideTranDetailDialog = () => {
    detailVisiable.value = false;
  },
  hideBillResetDialog = () => {
    billResetVisiable.value = false;
  },
  handleTextMsg = () => {
    isShowTextMsg.value = !isShowTextMsg.value;
  },
  billReset = () => {},
  queryClick = () => {
    billListVisiable.value = true;
  },
  monthClick = (key: any) => {
    activeKey.value = key;
  },
  handleClick = () => {},
  handleCurrent = () => {},
  columns = () => {
    return [
      {
        index: 0,
        prop: 'previousBill',
        dataIndex: 'previousBill',
        label: '上期账单金额'
      },
      {
        index: 1,
        prop: 'previousRepayment',
        dataIndex: 'previousRepayment',
        label: '上期还款金额'
      },
      {
        index: 2,
        prop: 'currentSigning',
        dataIndex: 'currentSigning',
        label: '本期签帐金额'
      },
      {
        index: 3,
        prop: 'currentAdjustment',
        dataIndex: 'currentAdjustment',
        label: '本期调整金额'
      },
      {
        index: 4,
        prop: 'revolvingInterest',
        dataIndex: 'revolvingInterest',
        label: '循环利息'
      },
      {
        index: 5,
        prop: 'currentBalance',
        dataIndex: 'currentBalance',
        label: '本期结欠金额'
      },
      { index: 6, prop: 'currency', dataIndex: 'currency', label: '币种' },
      {
        index: 7,
        prop: 'smallmumRepayment',
        dataIndex: 'smallmumRepayment',
        label: '最小还款额'
      },
      {
        index: 8,
        prop: 'remainingOutstanding',
        dataIndex: 'remainingOutstanding',
        label: '剩余未还款金额'
      }
    ];
  },
  tranColumns = () => {
    return [
      {
        index: 0,
        prop: 'accountNumber',
        dataIndex: 'accountNumber',
        label: '账号'
      },
      {
        index: 1,
        prop: 'tradeDate',
        dataIndex: 'tradeDate',
        label: '交易日期',
        width: 100
      },
      {
        index: 2,
        prop: 'mentryDate',
        dataIndex: 'mentryDate',
        label: '入账日期',
        width: 100
      },
      { index: 3, prop: 'amount', dataIndex: 'amount', label: '交易金额' },
      {
        index: 4,
        prop: 'currency',
        dataIndex: 'currency',
        label: '交易币别'
      },
      {
        index: 5,
        prop: 'loanFlag',
        dataIndex: 'loanFlag',
        label: '借贷标志'
      },
      {
        index: 6,
        prop: 'disputeSign',
        dataIndex: 'disputeSign',
        label: '争议标志'
      },
      {
        index: 7,
        prop: 'disputeDate',
        dataIndex: 'disputeDate',
        label: '争议日期'
      },
      {
        index: 8,
        prop: 'releaseDate',
        dataIndex: 'releaseDate',
        label: '释放日期'
      },
      {
        index: 7,
        prop: 'code',
        dataIndex: 'code',
        label: '交易代号',
        width: 110
      },
      {
        index: 7,
        prop: 'settleAmount',
        dataIndex: 'settleAmount',
        label: '结算金额	'
      },
      {
        index: 7,
        prop: 'settleAmountCurrency',
        dataIndex: 'settleAmountCurrency',
        label: '结算金额币种',
        width: 100
      },
      {
        index: 7,
        prop: 'detail',
        dataIndex: 'detail',
        label: '交易描述',
        width: 200
      },
      {
        index: 7,
        prop: 'cardNo',
        dataIndex: 'cardNo',
        label: '卡号',
        width: 160
      },
      {
        index: 7,
        prop: 'freeSerectSign',
        dataIndex: 'freeSerectSign',
        label: '小额免密标志'
      },
      { index: 7, prop: 'authCode', dataIndex: 'authCode', label: '授权码' }
    ];
  };
</script>
<style lang="scss">
.card-title {
  .title-btn {
    position: absolute;
    right: 20%;
    .wechat-push {
      margin-right: 100px;
    }
    .custom-message {
      margin: 0 20px;
    }
  }
}
.cst-new-card {
  display: flex;
  justify-content: start;
  justify-content: flex-start;
  flex-wrap: wrap;
  .custom-month-list {
    padding: 8px 16px;
    border-radius: 4px;
    margin: 3px 6px;
    text-align: center;
    position: relative;
    cursor: pointer;
    box-shadow: 0 0px 1px -2px #00000029, 0 1px 2px 0 #0000001f,
      0 2px 4px 2px #00000017;
    &:hover {
      box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px 0 #0000001f,
        0 5px 12px 4px #00000017;
      transition: all 0.3s;
    }
  }

  .golang {
    position: relative;
    opacity: 1;
    overflow: hidden;
    color: #2194e0;
    border: 1px solid #2194e0;
    transition: all 0.2s ease-in-out;
    &:before {
      content: '';
      background-color: rgba(255, 255, 255, 0.5);
      height: 100%;
      width: 3em;
      display: block;
      position: absolute;
      top: 0;
      left: -4.5em;
      transform: skewX(-45deg) translateX(0);
      transition: none;
    }
    &:hover,
    &.active {
      background-color: #2194e0;
      color: #fff;
    }
  }
}

.new-table {
  margin-top: 10px;
}
.cst-footer {
  text-align: center;
  margin-top: 4px;
}
.show-hide {
  margin-left: 40px;
}
</style>
