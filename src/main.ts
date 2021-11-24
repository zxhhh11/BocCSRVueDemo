// import './styles/element/index.scss';
import 'element-plus/dist/index.css';

import App from './App.vue';
import ElementPlus from 'element-plus';
import { createApp } from 'vue';
import router from './router';
import { store } from './store';

const app = createApp(App);

app.use(store).use(router).use(ElementPlus, { size: 'small', zIndex: 3000 });
app.mount('#app');
// createApp(App).use(store).use(router).mount('#app');
