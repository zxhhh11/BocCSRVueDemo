<template>
  <div class="box">
    <div>
      <div class="card-title">金融历史查询</div>
      <el-descriptions :column="3" class="query-box" size="small" border>
        <el-descriptions-item label="信用卡卡号">
          <el-input v-model="formInline.CARDNO" placeholder="请输入卡号" />
        </el-descriptions-item>
        <el-descriptions-item label="客户号">
          <el-input v-model="formInline.UCIFSN" placeholder="请输入客户号" />
        </el-descriptions-item>
        <el-descriptions-item label-class-name="hide">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-descriptions-item>
      </el-descriptions>
      <BaseTable
        v-if="showResult"
        :tableData="financialList"
        class="new-table"
        :total="listTotal"
        :currentPage="currentPage"
        :handleClick="handleClick"
        :isMutiSelect="false"
        :hasPagination="true"
        @handleCurrent="handleCurrent"
        :newColumns="columns"
      ></BaseTable>
    </div>
    <div>
      <div class="card-title">账户状态查询</div>
      <el-descriptions :column="3" class="query-box" size="small" border>
        <el-descriptions-item label="信用卡卡号">
          <el-input v-model="tranForm.CARDNO" placeholder="请输入卡号" />
        </el-descriptions-item>
        <el-descriptions-item label="管理账号">
          <el-input v-model="tranForm.ACTNUM" placeholder="请输入管理账号" />
        </el-descriptions-item>
        <el-descriptions-item label-class-name="hide">
          <el-button type="primary" @click="onTradSubmit">查询</el-button>
        </el-descriptions-item>
      </el-descriptions>
      <BaseTable
        v-if="showTranResult"
        :tableData="tranLists"
        class="new-table"
        :total="tranListTotal"
        :currentPage="tranCurrentPage"
        :handleClick="handleClick"
        :isMutiSelect="false"
        :hasPagination="true"
        @handleCurrent="handleCurrent"
        :newColumns="tranColumns"
      ></BaseTable>
    </div>
    <CustomModal
      :dialogVisiable="modifyVisiable"
      @hide-dialog="hideModifyDialog"
      title="账单寄送方式设定交易"
      cancelText="关闭"
      :hasConfirm="true"
      width="40%"
      confirmText="提交"
      @submit-handle="submitHandle"
    >
      <div>
        <div class="card-title">账单寄送方式查询——返回结果：</div>
        <div>
          <div class="card-title"
            >账单寄送方式设置：<span>当前状态：</span></div
          >
          <el-descriptions :column="2" class="query-box" size="small" border>
            <el-descriptions-item label="信用卡卡号" :span="2">
              <el-input
                placeholder="请在此处输入信用卡卡号"
                v-model="CARDNO"
                clearable
              >
              </el-input>
            </el-descriptions-item>
            <el-descriptions-item label="当前账单寄送方式" :span="2">
              <el-select
                v-model="STLTYPE"
                class="m-2"
                disabled
                placeholder="Select"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-descriptions-item>
            <el-descriptions-item label="账单寄送方式新设置" :span="2">
              <template #label>
                <div class="cell-item">
                  账单寄送方式[ <span class="custom-message">新</span> ] 设置
                </div>
              </template>
              <span class="new-set">
                <el-checkbox-group v-model="NEWSTLTYPE" @change="STLTYPEChange">
                  <el-checkbox label="DUANXIN">短信</el-checkbox>
                  <el-checkbox label="EMAIL">EMAIL</el-checkbox>
                  <el-checkbox label="ZHIZHI">纸质</el-checkbox>
                </el-checkbox-group>
                <span class="new-method"> {{ NEWSTLTYPETEXT }}</span>
              </span>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
    </CustomModal>
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue';
import CustomModal from '@/components/common/modal/index.vue';

import BaseTable from '@/components/common/baseTable/index.vue';
import { getFinancialListAPI, getTranListAPI } from '@/apis/history.ts';
const NEWSTLTYPE = ref([]);
const formInline = ref({
  UCIFSN: '',
  CARDNO: ''
});
const tranForm = ref({
  ACTNUM: '',
  CARDNO: ''
});
const data = reactive({
  listTotal: 0,
  financialList: [],
  currentPage: 1,
  showResult: false,
  showTranResult: false,
  tranLists: [],
  tranListTotal: 0,
  tranCurrentPage: 1,
  modifyVisiable: false,
  CARDNO: '',
  STLTYPE: '0',
  NEWSTLTYPETEXT: ''
});

let {
  listTotal,
  financialList,
  currentPage,
  showResult,
  showTranResult,
  tranLists,
  tranListTotal,
  tranCurrentPage,
  modifyVisiable,
  CARDNO,
  STLTYPE,
  NEWSTLTYPETEXT
} = toRefs(data);
const options = [
  {
    value: '0',
    label: '0纸质'
  },
  {
    value: '2',
    label: '2EMAIL'
  },
  {
    value: 'C',
    label: 'C推入式'
  },
  {
    value: '1',
    label: '1纸质+EMAIL'
  },
  {
    value: 'Q',
    label: 'Q纸质+推入式'
  },
  {
    value: 'G',
    label: 'G推入式+EMAIL'
  },
  {
    value: 'U',
    label: 'U纸质+推入式+EMAIL'
  }
];
const onSubmit = () => {
    let params = {
      currentPage: 1,
      ...formInline.value
    };
    getFinancialListAPI(params).then((res: any) => {
      if (res) {
        financialList.value = res.data.rows;
        listTotal.value = res.data.total;
        showResult.value = true;
      }
    });
  },
  onTradSubmit = () => {
    let params = {
      currentPage: tranCurrentPage.value,
      ...tranForm.value
    };
    getTranListAPI(params).then((res: any) => {
      if (res) {
        tranLists.value = res.data.rows;
        tranListTotal.value = res.data.total;
        showTranResult.value = true;
      }
    });
  },
  STLTYPEChange = (val: any) => {
    let str = '',
      strText = '';
    console.log(val, 'value');
    if (val.length === 1) {
      switch (val[0]) {
        case 'ZHIZHI':
          str = '0';
          strText = '0纸质';
          break;
        case 'EMAIL':
          str = '2';
          strText = '2EMAIL';
          break;
        case 'DUANXIN':
          str = 'C';
          strText = 'C推入式';
          break;
      }
    } else if (val.length === 2) {
      if (val.indexOf('ZHIZHI') === -1) {
        str = 'G';
        strText = 'G推入式+EMAIL';
      } else if (val.indexOf('EMAIL') === -1) {
        str = 'Q';
        strText = 'Q纸质+推入式';
      } else {
        str = '1';
        strText = '1纸质+EMAIL';
      }
    } else if (val.length === 3) {
      str = 'U';
      strText = 'U纸质+推入式+EMAIL';
    } else {
      str = '';
      strText = '';
    }
    NEWSTLTYPETEXT.value = strText;
  },
  submitHandle = () => {},
  handleClick = () => {},
  handleCurrent = () => {},
  columns = () => {
    return [
      {
        index: 0,
        prop: 'UCIFSN',
        dataIndex: 'UCIFSN',
        label: '客户号'
      },
      {
        index: 1,
        prop: 'CARDNO',
        dataIndex: 'CARDNO',
        label: '卡号'
      },
      {
        index: 2,
        prop: 'TOTALAMT',
        dataIndex: 'TOTALAMT',
        label: '期末余额'
      },
      {
        index: 3,
        prop: 'MINPAYAMT',
        dataIndex: 'MINPAYAMT',
        label: '周期最小还款金额'
      },
      {
        index: 4,
        prop: 'OVRBAL',
        dataIndex: 'OVRBAL',
        label: '期末超限金额'
      },
      {
        index: 5,
        prop: 'CRTARGAMT',
        dataIndex: 'CRTARGAMT',
        label: '期末逾期金额'
      },
      {
        index: 6,
        prop: 'TOTALPAY',
        dataIndex: 'TOTALPAY',
        label: '应付款总金额'
      },
      {
        index: 7,
        prop: 'STRDAT',
        dataIndex: 'STRDAT',
        label: '周期起始日期'
      },
      {
        index: 8,
        prop: 'CYCDAT',
        dataIndex: 'CYCDAT',
        label: '周期日期'
      },
      {
        index: 9,
        prop: 'ENDDAT',
        dataIndex: 'ENDDAT',
        label: '周期结束日期'
      },
      {
        index: 10,
        prop: 'CYCLE',
        dataIndex: 'CYCLE',
        label: '周期编号'
      },
      {
        index: 11,
        prop: 'STRBAL',
        dataIndex: 'STRBAL',
        label: '期初余额'
      },
      {
        index: 12,
        prop: 'PAYDAT',
        dataIndex: 'PAYDAT',
        label: '还款截止日期'
      },
      {
        index: 13,
        prop: 'CRDTAMT',
        dataIndex: 'CRDTAMT',
        label: '贷方总金额'
      },
      {
        index: 14,
        prop: 'PAYAMT',
        dataIndex: 'PAYAMT',
        label: '本周期内还款总金额'
      },
      {
        index: 15,
        prop: 'DBTAMT',
        dataIndex: 'DBTAMT',
        label: '借方总金额'
      },
      {
        index: 16,
        prop: 'PERIODAMT',
        dataIndex: 'PERIODAMT',
        label: '宽限期内还款金额'
      },
      {
        index: 17,
        prop: 'DISPUTEAMT',
        dataIndex: 'DISPUTEAMT',
        label: '争议总金额'
      },
      {
        index: 18,
        prop: 'DISPUTETXN',
        dataIndex: 'DISPUTETXN',
        label: '争议交易数量'
      },
      {
        index: 19,
        prop: 'CURCOD',
        dataIndex: 'CURCOD',
        label: '币种'
      }
    ];
  },
  showModifyModal = () => {
    modifyVisiable.value = true;
  },
  hideModifyDialog = () => {
    modifyVisiable.value = false;
  },
  tranColumns = () => {
    return [
      {
        index: 0,
        prop: 'STLTYPE',
        dataIndex: 'STLTYPE',
        label: '账单寄送方式代码',
        isLink: true,
        onClick: showModifyModal,
        width: 120
      },
      {
        index: 1,
        prop: 'BILADRTYP',
        dataIndex: 'BILADRTYP',
        label: '对账单地址类型代码',
        width: 120
      },
      {
        index: 2,
        prop: 'CURCOD',
        dataIndex: 'CURCOD',
        label: '币种',
        width: 120
      },
      {
        index: 3,
        prop: 'UCIFSN',
        dataIndex: 'UCIFSN',
        label: '客户号',
        width: 120
      },
      {
        index: 4,
        prop: 'ACTAUTDAT',
        dataIndex: 'ACTAUTDAT',
        label: '自动状态设置日期',
        width: 120
      },
      {
        index: 5,
        prop: 'ACTMAUDAT',
        dataIndex: 'ACTMAUDAT',
        label: '手工状态设置日期',
        width: 120
      },
      {
        index: 6,
        prop: 'ACTAUTSTS',
        dataIndex: 'ACTAUTSTS',
        label: '自动设置状态',
        width: 120
      },
      {
        index: 7,
        prop: 'ACTMAUSTS',
        dataIndex: 'ACTMAUSTS',
        label: '手工设置状态',
        width: 120
      },
      {
        index: 8,
        prop: 'CYCDAT',
        dataIndex: 'CYCDAT',
        label: '账单日',
        width: 120
      },
      {
        index: 9,
        prop: 'PRDCOD',
        dataIndex: 'PRDCOD',
        label: '产品代码',
        width: 120
      },
      {
        index: 10,
        prop: 'ENDDAT',
        dataIndex: 'ENDDAT',
        label: '年费免除结束日期',
        width: 120
      },
      {
        index: 11,
        prop: 'FEEFLG',
        dataIndex: 'FEEFLG',
        label: '年费免除标识',
        width: 120
      },
      {
        index: 12,
        prop: 'STRDAT',
        dataIndex: 'STRDAT',
        label: '年费免除开始日期',
        width: 120
      },
      {
        index: 13,
        prop: 'ORLVENDDAT',
        dataIndex: 'ORLVENDDAT',
        label: '其他账户费用免除结束日期',
        width: 200
      },
      {
        index: 14,
        prop: 'ORLVSTRDAT',
        dataIndex: 'ORLVSTRDAT',
        label: '其他账户费用免除起始日期',
        width: 200
      },
      {
        index: 15,
        prop: 'ORLVFLG',
        dataIndex: 'ORLVFLG',
        label: '其他账户费用免除标识',
        width: 200
      },
      {
        index: 16,
        prop: 'PAYTYP',
        dataIndex: 'PAYTYP',
        label: '还款类型',
        width: 120
      },
      {
        index: 17,
        prop: 'ACTTYP',
        dataIndex: 'ACTTYP',
        label: '账户类型代码',
        width: 120
      },
      {
        index: 18,
        prop: 'MAINFLG',
        dataIndex: 'MAINFLG',
        label: '主账户标志',
        width: 120
      },
      {
        index: 19,
        prop: 'TRSFLG',
        dataIndex: 'TRSFLG',
        label: '交易手续费免除标志',
        width: 120
      },
      {
        index: 20,
        prop: 'TRSSTRDAT',
        dataIndex: 'TRSSTRDAT',
        label: '交易手续费免除起始日期',
        width: 160
      },
      {
        index: 21,
        prop: 'TRSENDDAT',
        dataIndex: 'TRSENDDAT',
        label: '交易手续费免除结束日期',
        width: 160
      },
      {
        index: 22,
        prop: 'INTFLG',
        dataIndex: 'INTFLG',
        label: '利息免除标志',
        width: 120
      }
    ];
  };
</script>

<style>
.align-left {
  text-align: left;
}
.demo-form-inline.align-left {
  padding-top: 10px;
}
.box {
  border-top: 1px solid transparent;
}
.box .el-descriptions__cell.el-descriptions__label.is-bordered-label {
  width: 160px;
}
.el-descriptions__cell > .el-input {
  width: 60%;
}
.el-descriptions__cell > .el-select {
  width: 60%;
}
.new-set {
  position: relative;
}
.new-set .new-method {
  position: absolute;
  top: 8px;
  right: 40px;
}
.box .query-box {
  margin: 6px 0;
}
</style>
