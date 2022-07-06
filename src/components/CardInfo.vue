<script lang="ts">
export default {
  name: 'CardInfo' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>

<script lang="ts" setup>
import { highCardList, generalCardList, ppCardList } from '@/utils/data';
import { ref, reactive, onMounted, toRef, toRefs } from 'vue';
import { accountDetail, cardDetail } from '@/utils/data';
import BaseModal from '@/components/common/modal/index.vue';
const accountData = [
  {
    key: '1',
    currency: 'USD',
    accountType: '准贷记卡个人人民币帐户',
    creditLimit: '0.00',
    cashLimit: '0.00',
    billDate: '2021-05-10',
    cardIssuer: '(北京)4110142 ',
    mainLand: '(北京)4110142 '
  },
  {
    key: '2',
    currency: 'RMB',
    accountType: '准贷记卡个人人民币帐户',
    creditLimit: '0.00',
    cashLimit: '0.00',
    billDate: '2021-10-19',
    cardIssuer: '(北京)4110142 ',
    mainLand: '(北京)4110142 '
  }
];
// interface DataType {
//   common: any;
//   list: any;
// }

const data: any = reactive({
  searchCard: '',
  accountVisiable: false,
  cardVisiable: false,
  highLists: highCardList,
  generalLists: generalCardList,
  ppLists: ppCardList,
  accountDatas: accountData
});
let {
  accountVisiable,
  searchCard,
  cardVisiable,
  highLists,
  generalLists,
  ppLists,
  accountDatas
} = toRefs(data);
onMounted(() => {
  console.log('render-huihui');
});
const showCardDetail = (index: number, row: any) => {
    showAccountDialog();
  },
  showAccountDialog = () => {
    console.log({ accountVisiable });
    accountVisiable.value = true;
  },
  hideAccountDialog = () => {
    accountVisiable.value = false;
  },
  hideCardDialog = () => {
    cardVisiable.value = false;
  },
  showCardDialog = (item: any) => {
    cardVisiable.value = true;
  };
</script>

<template>
  <div class="card-box">
    <div class="search-box">
      <div class="current-card"
        >当前卡：<span class="current-cardNo">6259****89699550</span></div
      >
      <el-input
        v-model="searchCard"
        placeholder="Please input"
        clearable
        class="input-with-select"
      >
        <template #append>
          <el-button>
            <el-icon style="vertical-align: middle">
              <Search />
            </el-icon>
          </el-button>
        </template>
      </el-input>
    </div>
    <div class="card-list">
      <div class="card-title">
        高端产品卡列表 <span class="add-info">(共8个卡片)</span></div
      >
      <template v-for="(item, key) in highLists" :key="key">
        <el-card
          shadow="hover"
          :class="['card-item', key === 0 ? 'is-active' : '']"
        >
          <template #header>
            <div class="clearfix custom-card-header">
              <div class="title">{{ item.title }}</div>
              <el-tag
                size="small"
                :class="['card-status', 'card-type-' + item.type]"
              >
                {{ item.typeDetail }}</el-tag
              >
            </div>
          </template>

          <div>
            <div class="card-No"
              ><span :class="'card-type ' + item.cardType">{{
                item.cardType === 'main' ? '主' : '附'
              }}</span>
              <span class="account" @click="showCardDialog(item)">{{
                item.account
              }}</span>
            </div>
            <div class="card-bottom"
              ><span class="term-validity"
                >{{ item.startDate }}
                <el-icon>
                  <SortUp />
                </el-icon>
                {{ item.endDate }} </span
              ><span class="identify">{{ item.identify }}</span></div
            >
          </div>
        </el-card>
      </template>
      <div class="card-title">
        普通产品列表 <span class="add-info">(共3个卡片)</span></div
      >
      <template v-for="(item, key) in generalLists" :key="key">
        <el-card shadow="hover" class="card-item">
          <template #header>
            <div class="clearfix custom-card-header">
              <div class="title">{{ item.title }}</div>
              <el-tag
                size="small"
                :class="['card-status', 'card-type-' + item.type]"
              >
                {{ item.typeDetail }}</el-tag
              >
            </div>
          </template>

          <div>
            <div class="card-No"
              ><span :class="'card-type ' + item.cardType">{{
                item.cardType === 'main' ? '主' : '附'
              }}</span>
              <span class="account" @click="showCardDialog(item)">{{
                item.account
              }}</span>
            </div>
            <div class="card-bottom"
              ><span class="term-validity"
                >{{ item.startDate }}
                <el-icon>
                  <SortUp />
                </el-icon>
                {{ item.endDate }} </span
              ><span class="identify">{{ item.identify }}</span></div
            >
          </div>
        </el-card>
      </template>
      <div class="card-title">
        PP龙腾产品列表 <span class="add-info">(共1个卡片)</span></div
      >
      <template v-for="(item, key) in ppLists" :key="key">
        <el-card shadow="hover" class="card-item">
          <template #header>
            <div class="clearfix custom-card-header">
              <div class="title">{{ item.title }}</div>
              <el-tag
                size="small"
                :class="['card-status', 'card-type-' + item.type]"
              >
                {{ item.typeDetail }}</el-tag
              >
            </div>
          </template>
          <div>
            <div class="card-No"
              ><span :class="'card-type ' + item.cardType">{{
                item.cardType === 'main' ? '主' : '附'
              }}</span>
              <span class="account" @click="showCardDialog(item)">{{
                item.account
              }}</span>
            </div>
            <div class="card-bottom"
              ><span class="term-validity"
                >{{ item.startDate }}
                <el-icon>
                  <SortUp />
                </el-icon>
                {{ item.endDate }} </span
              ><span class="identify">{{ item.identify }}</span></div
            >
          </div>
        </el-card>
      </template>
      <div class="card-title"> 账户信息列表</div>
      <el-table :data="accountDatas" border size="small" style="width: 100%">
        <el-table-column prop="currency" label="币种" width="60">
          <template #default="scope">
            <b
              class="custom-link"
              @click="showCardDetail(scope.$index, scope.row)"
              >{{ scope.row.currency }}</b
            >
          </template>
        </el-table-column>
        <el-table-column prop="accountType" label="账号类型" min-width="150">
        </el-table-column>
        <el-table-column prop="creditLimit" label="信用额度"> </el-table-column>
        <el-table-column prop="cashLimit" label="预借现金额度">
        </el-table-column>
        <el-table-column prop="billDate" label="账单日"> </el-table-column>
        <el-table-column prop="cardIssuer" label="发卡机构BH">
        </el-table-column>
        <el-table-column prop="mainLand" label="主使用地BH"> </el-table-column>
      </el-table>
    </div>
    <BaseModal
      :dialogVisiable="accountVisiable"
      @hide-dialog="hideAccountDialog"
      title="账户详细信息"
      cancelText="关闭"
      :hasConfirm="false"
      width="50%"
    >
      <el-descriptions title="" :column="3" size="small" border>
        <template v-for="(item, key) in accountDetail" :key="key">
          <el-descriptions-item :span="item.span ? item.span : '1'">
            <template #label>
              {{ item.label }}
            </template>
            <template v-if="item.isTag">
              <el-tag size="small" :type="item.type"> {{ item.value }}</el-tag>
            </template>
            <template v-else> {{ item.value }}</template>
          </el-descriptions-item>
        </template>
      </el-descriptions>
    </BaseModal>
    <BaseModal
      :dialogVisiable="cardVisiable"
      @hide-dialog="hideCardDialog"
      title="卡详细信息"
      width="50%"
    >
      <el-descriptions title="" :column="3" size="small" border>
        <template v-for="(item, key) in cardDetail" :key="key">
          <el-descriptions-item :span="item.span ? item.span : '1'">
            <template #label>
              {{ item.label }}
            </template>
            <template v-if="item.isTag">
              <el-tag size="small" :type="item.type"> {{ item.value }}</el-tag>
            </template>
            <template v-else> {{ item.value }}</template>
          </el-descriptions-item>
        </template>
      </el-descriptions>
    </BaseModal>
  </div>
</template>

<style lang="scss">
.card-box {
  .search-box {
    text-align: right;
    position: relative;
    height: 50px;
    line-height: 50px;
    .current-card {
      position: absolute;
      left: 10px;
      font-weight: 600;
      font-size: 16px;
      .current-cardNo {
        font-weight: 600;
        color: #1890ff;
      }
    }
    .el-input {
      width: 40%;
      .el-input__inner {
        border-radius: 0;
      }
      .el-input-group__append {
        vertical-align: top;
      }
    }
  }

  .card-item {
    display: inline-block;
    width: 46%;
    text-align: left;
    box-sizing: border-box;
    margin: 8px 12px;
    margin-bottom: 0;
    box-shadow: var(--el-box-shadow-light);
    .el-card__header {
      padding: 4px 10px;
      border-bottom: 0;
    }
    .el-card__body {
      padding: 4px 6px;
      .card-No {
        position: relative;
        text-align: center;
        padding: 10px 0 4px;
        .card-type {
          position: absolute;
          left: 10px;
          font-size: 14px;
          font-weight: 700;

          &.main {
            color: #a71e32;
          }
          &.affiliate {
            color: #9a60b4;
          }
        }
        .account {
          font-size: 16px;
          font-weight: 700;
          color: #5470c6;
          text-shadow: 1px 1px 1px #d9d9d9;
          cursor: pointer;
        }
      }
      .card-bottom {
        padding: 10px 0 4px;
        position: relative;
        text-align: left;
        font-size: 0.8em;
        .identify {
          position: absolute;
          right: 10px;
        }
        .term-validity {
          i {
            transform: rotate(90deg) scaleX(-1);
          }
        }
      }
    }
  }
}

.el-card__header {
  position: relative;
  border-bottom: 0;
  .title {
    font-size: 0.8em;
    font-weight: 500;
  }
  .card-status {
    position: absolute;
    right: 10px;
    top: 6px;
  }
}
// .card-box .ant-card .ant-card-grid{
//   border: 1px solid transparent;
// }
.card-box .el-card:hover,
.card-box .el-card.is-active {
  // background-color: #f5dcde;
  background-color: #f9e8e9;
  border: 1px solid #a71e32;
  .card-No {
    .account {
      color: #a71e32;
    }
  }
}
.card-box {
  .card-list {
    text-align: left;
    .el-table--border .el-table__cell {
      padding: 2px;
      font-size: 0.7em;
    }
  }
  b.custom-link {
    font-size: 0.8em;
  }
}
</style>
