// import './styles/element/index.scss';
import 'element-plus/dist/index.css';
import './mock';

import * as ElIconModules from '@element-plus/icons';

import App from './App.vue';
import ElementPlus from 'element-plus';
import { createApp } from 'vue';
import router from './router';
import { store } from './store';

interface IconType {
  [key: string]: any;
}
const Module: IconType = ElIconModules;
const app = createApp(App);
for (let iconName in Module) {
  app.component(iconName, Module[iconName]);
}
app.use(store).use(router).use(ElementPlus, { zIndex: 3000 }); //size: 'small',
app.mount('#app');
// createApp(App).use(store).use(router).mount('#app');
