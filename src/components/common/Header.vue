<script lang="ts">
export default {
  name: 'Header' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>

<script lang="ts" setup>
// import { logout } from '@/apis/user';
// import { useRouter } from 'vue-router';
import { defineProps, onMounted, defineEmits, reactive } from 'vue';
import { Fold, Setting, Expand, Sugar } from '@element-plus/icons-vue';
import { useStore } from '@/store/index';
import { UserActionTypes } from '@/store/modules/user/action-types';
import logoImg from '@/assets/images/head_logo.png';
import avatarUrl from '@/assets/images/avatar.png';
const store = useStore();
const props = defineProps({
  isCollapse: Boolean
});
const state = reactive({
  // logoImg: require('../assets/images/head_logo.png')
});
// const emit = defineEmits<{
//   (e: 'triggerMenu'): void;
// }>();
// const router = useRouter();
const handleLogout = async () => {
  store.dispatch(UserActionTypes.ACTION_LOGIN_OUT);
  // await logout().then((res) => {
  //   console.log(res, '555');
  // });
  // router
  //   .push({
  //     path: '/login'
  //   })
  //   .catch((err) => {
  //     console.warn(err);
  //   });
};
// const triggerMenuFunc = () => {
//   emit('triggerMenu');
// };

onMounted(() => {});
</script>
<template>
  <el-header>
    <span class="logo">
      <img :src="logoImg" alt="" />
    </span>
    <span class="phone-box phone-set">
      <span class="phone-item">
        <span class="el-dropdown-link">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-phone-off"></use>
          </svg>
          <span class="phone-text">挂机</span>
        </span>
      </span>
      <span class="phone-item">
        <el-popover placement="bottom" trigger="click">
          <div class="m-phonePanel panel panel-default">
            <div class="panel-heading"> 软电话 </div>
            <div class="panel-body clearfix">
              <table
                cellpadding="0"
                cellspacing="0"
                class="table table-bordered text-center pull-left"
              >
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>0</td>
                    <td>#</td>
                  </tr>
                </tbody>
              </table>
              <div class="pull-right ml15">
                <div class="tips"
                  >请输入电话号码，外线请加前导码<br />
                  例如 (982726522)</div
                >
                <div class="select-number">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <el-button-group>
                  <el-button size="small" type="success">拨号</el-button>
                  <el-button size="small" type="danger">清除</el-button>
                  <el-button size="small">取消</el-button>
                  <el-button size="small" type="primary">选择</el-button>
                </el-button-group>
              </div>
            </div>
          </div>
          <template #reference>
            <span class="el-dropdown-link">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-phonelog"></use>
              </svg>
              <span class="phone-text"> 拨号 </span>
            </span>
          </template>
        </el-popover>
      </span>
      <el-dropdown class="phone-item">
        <span class="el-dropdown-link">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhuanjie"></use>
          </svg>
          <span class="phone-text"> 转接 </span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>选项1</el-dropdown-item>
            <el-dropdown-item>选项2</el-dropdown-item>
            <el-dropdown-item>选项3</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown class="phone-item">
        <span class="el-dropdown-link">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-transfer-zhuanjie"></use>
          </svg>
          <span class="phone-text">速转</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>选项7</el-dropdown-item>
            <el-dropdown-item>选项8</el-dropdown-item>
            <el-dropdown-item>选项9</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown class="phone-item">
        <span class="el-dropdown-link">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-phonesettings"></use>
          </svg>
          <span class="phone-text"> 私谈 </span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>选项10</el-dropdown-item>
            <el-dropdown-item>选项11</el-dropdown-item>
            <el-dropdown-item>选项12</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown class="phone-item">
        <span class="el-dropdown-link">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-keepHold-baochi"></use>
          </svg>
          <span class="phone-text">保持</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>选项13</el-dropdown-item>
            <el-dropdown-item>选项14</el-dropdown-item>
            <el-dropdown-item>选项15</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
    <!-- <span class="trigger-menu">
      <div>
        <el-icon :size="36" v-if="props.isCollapse" @click="triggerMenuFunc">
          <fold />
        </el-icon>
        <el-icon :size="36" v-else @click="triggerMenuFunc">
          <expand />
        </el-icon>
      </div>
      <span class="system-name">VUE3后台管理系统</span>
    </span> -->
    <span class="right-btns">
      <span class="user-info">
        <span class="user-module">
          <span class="item">
            <label> 来电号码：</label>
            <span>16688986696</span>
          </span>
          <span class="item">
            <label> 验密标识：</label>
            <span>已验密</span>
          </span>
          <span class="item">
            <label> 客户姓名：</label>
            <span>一二三</span>
          </span>
        </span>
        <el-dropdown trigger="click">
          <div class="item user-avatar">
            <el-avatar :src="avatarUrl"></el-avatar>
            <span class="user-name">Admin</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>操作一</el-dropdown-item>
              <el-dropdown-item>操作二</el-dropdown-item>
              <el-dropdown-item>操作三</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="item">
          <el-icon :size="36">
            <setting />
          </el-icon>
        </div>
        <div class="item">
          <el-icon :size="36">
            <sugar @click="handleLogout" />
          </el-icon>
        </div>
      </span>
    </span>
  </el-header>
</template>

<style lang="scss">
.el-header {
  background-color: #b50029;
  color: #fff;
  text-align: left;
  height: 80px;
  line-height: 80px;
  width: 100%;
  padding: 0 20px 0 0;
  .logo {
    display: inline-block;
    height: 80px;
    line-height: 80px;
    // width: 194px;
    // height: 76px;
    // float: left;
    // background: url(../assets/images/head_logo.png);
    // background-position: 3px -10px;
    // margin-top: 6px;
    // background-repeat: no-repeat;
    // margin-left: 6px;
    img {
      width: 198px;
      height: 78px;
      margin: 1px;
      // width: 200px;
      // height: 80px;
    }
  }
  .system-name {
    font-size: 1.2em;
    font-weight: 700;
    vertical-align: middle;
  }
  .trigger-menu,
  .right-btns {
    display: inline-block;
    height: 100%;
    cursor: pointer;
    & > i,
    & div.item {
      display: inline-block;
      color: #fff;
      /* vertical-align: middle; */
      margin-right: 10px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      padding: 0 8px;
      &:hover {
        background: #c90935;
      }
      & .el-avatar,
      & i {
        vertical-align: middle;
      }
    }
    .user-name {
      display: inline-block;
      margin-left: 6px;
    }
  }
  .right-btns {
    float: right;
  }
}
.phone-set {
  display: inline-block;
  height: 80px;
  // padding: 0 16px;
  color: #fff;
  background-color: #f4f2f7;
  z-index: 10;
  box-shadow: 0px 0px 2px #5d5c5d inset;
  .icon {
    width: 1.4em;
    height: 1.4em;
    fill: currentColor;
    overflow: hidden;
    position: absolute;
    top: 14px;
    left: 30px;
  }
  .phone-item {
    position: relative;
    display: inline-block;
    width: 90px;
    text-align: center;
    color: #fff;
    margin: 0 1px;
    cursor: pointer;
    // border-radius: 6px;
    height: 80px;
    line-height: 80px;
    &:nth-child(1) {
      background-color: #5470c6;
      margin-left: 2px;
      &:hover {
        background-color: #435aa0;
      }
    }
    &:nth-child(3) {
      background-color: #91cc75;
      &:hover {
        background-color: #73d13d;
      }
    }
    &:nth-child(2) {
      background-color: #fac858;
      &:hover {
        background-color: #faad14;
      }
    }
    &:nth-child(4) {
      background-color: #ee6666;
      &:hover {
        background-color: #ee6666;
      }
    }
    &:nth-child(5) {
      background-color: #73c0de;
      &:hover {
        background-color: #1890ff;
      }
    }
    &:nth-child(6) {
      background-color: #bd75cc;
      margin-right: 2px;
      &:hover {
        background-color: #ce5ae6;
      }
    }
    &:hover {
      box-shadow: 0 2px 2px 2px #00000029, 0 3px 6px 0 #0000001f,
        0 6px 12px 4px #00000017;
    }
    .el-dropdown-link {
      color: #fff;
      width: 100%;
      height: 80px;
      display: inline-block;
      position: relative;
      .phone-text {
        position: absolute;
        top: 18px;
        left: 30px;
      }
    }
  }
}
.el-dropdown.phone-item {
  & > div {
    height: 90px;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  font-size: 18px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.user-info {
  .user-module {
    display: inline-block;
    height: 100%;
    background: rgb(255 255 255 / 10%);
    padding: 0 10px;
    .item {
      margin-right: 20px;
    }
  }
}
.panel {
  border-radius: 0;
}
.panel-default {
  border-color: #cdcdcd;
}
.panel {
  background-color: #fff;
  /* border: 1px solid transparent; */
  border: none;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}
.m-phonePanel .tips {
  margin: 15px 0 15px;
}
.m-phonePanel .pull-right {
  width: 230px;
}
.m-phonePanel .pull-right .btn-group .btn {
  width: 50px;
  margin-right: 4px;
  text-align: center;
  padding-left: 0;
  padding-right: 0;
  color: #ffffff;
  transition: all 0.2s;
}
.m-phonePanel .pull-right .btn-group .btn:last-child {
  margin-right: 0;
}
.m-phonePanel .pull-right .btn-group .btn-dial {
  background-color: #27a9e3;
}
.m-phonePanel .pull-right .btn-group .btn-dial:hover {
  background-color: #198bbe;
}
.m-phonePanel .pull-right .btn-group .btn-clear {
  background-color: #ddd4cb;
}
.m-phonePanel .pull-right .btn-group .btn-clear:hover {
  background-color: #c9bbac;
}
.m-phonePanel .pull-right .btn-group .btn-cancel {
  background-color: #ccddcb;
}
.m-phonePanel .pull-right .btn-group .btn-cancel:hover {
  background-color: #aec9ac;
}
.m-phonePanel .pull-right .btn-group .btn-select {
  background-color: #d6e8f0;
}
.m-phonePanel .pull-right .btn-group .btn-select:hover {
  background-color: #b1d3e2;
}
.m-phonePanel .table {
  width: 208px;
  font-size: 16px;
  font-family: arial, sans-serif;
  margin-bottom: 0;
}
.m-phonePanel .table tbody td {
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.m-phonePanel .table tbody td:hover {
  cursor: pointer;
  background-color: #f1f1f1;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #333;
}
.panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #337ab7;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #337ab7;
}
.panel-primary > .panel-heading .badge {
  color: #337ab7;
  background-color: #fff;
}
.panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #337ab7;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-heading .badge {
  color: #dff0d8;
  background-color: #3c763d;
}
.panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f;
}
.panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-heading .badge {
  color: #fcf8e3;
  background-color: #8a6d3b;
}
.panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-heading .badge {
  color: #f2dede;
  background-color: #a94442;
}
.panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ebccd1;
}
.panel-heading {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.panel-default {
  border-color: #cdcdcd;
}
.panel-default > .panel-heading {
  border-color: #cdcdcd;
  color: #666666;
  font-size: 16px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
}
.panel {
  border-radius: 0;
}
.panel-body {
  display: inline-block;
  padding: 15px;
}
.pull-left {
  float: left !important;
}
.ml15 {
  margin-left: 15px;
}
.pull-right {
  float: right !important;
}
.el-popover {
  padding: 0;
}
.el-popover.el-popper {
  width: auto !important;
  padding: 0;
}

.table-bordered,
.table-bordered > tbody > tr > td,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > td,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > thead > tr > th {
  border: 1px solid #ddd;
}
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  padding: 8px;
  // line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
.select-number {
  margin: 32px 0;
}
.clearfix:before {
  display: table;
  content: ' ';
}
</style>
