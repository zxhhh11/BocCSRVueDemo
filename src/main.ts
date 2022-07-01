// import './styles/element/index.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './styles/iconfont/iconfont.js';
import './styles/base.css';
import 'element-plus/dist/index.css';
import './mock';
import './styles/element/index.scss';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import App from './App.vue';
import ElementPlus from 'element-plus';
// import { IconPark } from '@/plugins/iconPark';
import { createApp } from 'vue';
import router from './router';
import { store } from './store';

const app = createApp(App);

// app.config.compilerOptions.isCustomElement = (tag) => tag === 'iconpark-icon'; // 这个没用 但是这种配置是对的
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component); // 这里已经全局引入过element-plus/icons-vue中的icon了，所以组件内部使用时不需要再单独引用
}
app.config.errorHandler = (err, vm, info) => {
  console.log('[全局异常]', err, vm, info);
};
app.use(store).use(router).use(ElementPlus); // {size: 'small', zIndex: 3000 }
app.mount('#app');

// createApp(App).use(store).use(router).mount('#app');
