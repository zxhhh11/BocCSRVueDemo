<script lang="ts" setup>
// import { Ref, ref } from 'vue';

import Header from '@/components/common/Header.vue'; // Module  ...  has no default export.Vetur(1192)
import NavBar from '@/components/common/NavBar.vue'; //是因为 vetur 对setup 支持不是很完善 虽报错 但是不影响使用
import Content from '@/components/common/Content.vue'; // 如果使用 setup函数就没报错  // 或者在setup模式文件顶部再加一个script标签 其中写入文件name属性
import {
  defineProps,
  onMounted,
  defineEmits,
  reactive,
  onUnmounted
} from 'vue';
import { messageList } from '@/utils/data';
import CardInfo from '@/components/CardInfo.vue';
import CustomerInfo from '@/components/CustomerInfo.vue';
// const isCollapse = ref(null);
// const nav: Ref<null> = ref();
const triggerMenu = () => {
  // isCollapse.value = !isCollapse.value;
};
const data = reactive({
  common: {
    activeName: 'second',
    messageList,
    animationUp: false
  }
  // logoImg: require('../assets/images/head_logo.png')
});
const handleKeyDown = (e: any) => {
  if (e.keyCode === 122) {
    e.preventDefault(); // 阻止默认事件
    e.stopPropagation(); // 阻止冒泡事件
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  } else if (e.keyCode === 27) {
    console.log(27, e);
    e.preventDefault(); // 阻止默认事件
    e.stopPropagation(); // 阻止冒泡事件
  }
};
window.addEventListener('keydown', handleKeyDown, true);
const keyDown = () => {
    document.onkeydown = (e) => {
      console.log(e, 'e');
      //事件对象兼容
      // let e1 = e || window.event || arguments.callee.caller.arguments[0]
      let e1 = e || window.event;
      let key = Number(e1.keyCode);
      if ((e1 && key > 47 && key < 58) || (key > 64 && key < 91)) {
        const inputs = document.getElementsByTagName('input');
        const textAreas = document.getElementsByTagName('textarea');
        let allIpts = [...inputs, ...textAreas];
        let isFocusFlag = false;
        for (let i = 0; i < allIpts.length; i++) {
          if (allIpts[i] == document.activeElement) {
            isFocusFlag = true;
            break;
          }
        }
        if (!isFocusFlag) {
          document.getElementById('quickSearch')?.focus();
          console.log(222, 'quickSearch2');
        }
      }
    };
  },
  scrollAnimate = () => {
    data.common.animationUp = true;
    setTimeout(() => {
      let arr = { ...data.common.messageList };
      data.common.messageList.push(arr[0]);
      data.common.messageList.push(arr[1]);
      data.common.messageList.shift();
      data.common.messageList.shift();
      data.common.animationUp = false;
    }, 1000);
  };
onMounted(() => {
  keyDown(); // 监听键盘
  const timer = setInterval(scrollAnimate, 3000);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown, true);
});
</script>

<template>
  <el-container class="home-content">
    <!-- :isCollapse="isCollapse" -->
    <Header @triggerMenu="triggerMenu"></Header>

    <el-container>
      <!-- :isCollapse="isCollapse" -->
      <NavBar></NavBar>
      <el-container>
        <el-main>
          <!-- <div class="content">
          <Content></Content>
        </div> -->
          <el-row :gutter="8" class="content-box">
            <el-col :span="9" class="part-box">
              <div class="grid-content bg-purple left-box">
                <span class="trigger-btn">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-100"></use></svg
                ></span>
                <!-- <span class="trigger-btn">
                  <i class="el-icon-s-fold"
                     v-if="isCollapse"
                     @click="handleCollapse"></i>
                  <i class="el-icon-s-unfold"
                     v-else
                     @click="handleCollapse"></i>
                </span> -->
                <el-tabs
                  v-model="data.common.activeName"
                  type="card"
                  @tab-click="handleClick"
                  class="left-tabs"
                >
                  <el-tab-pane label="客户信息区" name="first">
                    <CustomerInfo />
                  </el-tab-pane>
                  <el-tab-pane label="卡信息区" name="second">
                    <CardInfo />
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-col>
            <el-col :span="15" class="part-box">
              <div class="grid-content bg-purple right-box">
                <div class="right-content">
                  <Content></Content>
                  <div class="right-bottom">
                    <el-row>
                      <el-col :span="24" class="announcement">
                        <!-- <div class="grid-content bg-purple"> -->
                        <ul
                          class="announcement-list"
                          :class="{ 'animation-up': data.common.animationUp }"
                        >
                          <li
                            v-for="(item, index) in data.common.messageList"
                            :key="index"
                          >
                            {{ item }}
                          </li>
                        </ul>
                        <!-- </div> -->
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  padding: 8px;
  .content {
    width: 100%;
    height: 100%;
    background: #fff;
  }
}
.el-main {
  background-color: #f4f2f7;
  color: #333;
  padding: 8px;
}

.el-col,
.el-row {
  height: 100%;
}
.bg-purple-dark {
  background: #99a9bf;
}
.home-content.el-container {
  height: 100%;
}
.el-container {
  flex-direction: column;
}
.home-content > .el-container {
  flex-direction: row;
}
.content-box {
  height: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
.grid-content {
  height: 100%;
  position: relative;
}
.part-box {
}
.left-box {
  padding-left: 0;
  background: #fff;
}
.trigger-btn {
  font-size: 24px;
  color: #a71e32;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
}
.left-tabs.el-tabs {
  padding-top: 6px;
  & > .el-tabs__header.is-top {
    margin: 0px 0 5px;
    padding: 0 0 0 50px;
    .el-tabs__item.is-active {
      color: #fff;
      background: #a71e32;
    }
    .el-tabs__item.is-active:hover {
      color: #fff;
      background: #cd0633;
    }
    .el-tabs__item:hover {
      background: #fff;
      color: #303133;
    }
  }
}

.el-tabs__content {
  padding: 0 4px;
}
.left-tabs {
  height: 100%;
  & > .el-tabs__content {
    // height: calc(100% - 52px);
    height: calc(100vh - 148px);
    overflow-y: auto;
  }
}
.right-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  .grid-content {
    height: unset;
  }
  .right-tabs {
    // height: calc(100% - 108px);
    height: 100%;
    background: #fff;
    padding-top: 6px;
  }
  .right-bottom {
    height: 48px;
    background: #fff;
    margin-top: 8px;
  }
}
.right-bottom {
  // padding: 0.06rem 0px;
  font-size: 1em;
  background: #fff;
}
.announcement {
  // position: relative;
  padding: 0 12px;
  height: 100%;
  overflow: hidden;
  padding-top: 4px;
  color: #fff;
  background: #ee6666;
  border-radius: 6px;
  text-align: left;
  ul {
    width: 100%;
    height: 100%;

    // position: absolute;
    // animation: scroll 10s infinite alternate linear;
    // top: 0%;
    li {
      width: 100%;
      // height: 100%;
      list-style-type: none;
      padding-right: 0.1em;
    }
  }
  .animation-up {
    transition: all 1s ease-in-out;
    transform: translateY(
      -42px
    ); //TODO: 如果每个li 的高度不固定的时候这里应该换成 计算后的行高
  }
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  /*解决页面左侧切换tab 时文字颜色出现闪动 */
  transition: none;
}
</style>
