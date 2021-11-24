import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import Home from '../views/home.vue';
import Login from '../views/login.vue';
import NProgress from '../utils/progress/index';
import RoutesMapConfig from './routers/index';
import { openLink } from '/@/utils/link';
import { split } from 'lodash-es';

export function resetRouter() {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher; // reset router
}
console.log({ RoutesMapConfig });
const routes: Array<RouteRecordRaw> = [
    //
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '/@/views/layout/index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    }
  ],
  router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes.concat(RoutesMapConfig)
  });
const whiteList = ['/login'];

router.beforeEach((to, _from, next) => {
  // if (to.meta?.keepAlive) {  // 根据keepalive 参数控制页面是否需要缓存
  //   const newMatched = to.matched;
  //   handleAliveRoute(newMatched, 'add');
  //   //页面整体刷新和点击标签页刷新
  //   if (_from.name === undefined || _from.name === 'redirect') {
  //     handleAliveRoute(newMatched);
  //   }
  // }
  // const name = storageSession.getItem('info'); // 还需要再研究
  const name = { accessToken: 'eyJhbGciOiJIUzUxMiJ9.test', username: 'admin' }; //临时写的,需要调整 TODO:
  NProgress.start();
  const externalLink = to?.redirectedFrom?.fullPath;
  // @ts-ignore
  // const { t } = i18n.global;
  // @ts-ignore
  // if (!externalLink) to.meta.title ? (document.title = t(to.meta.title)) : '';
  if (!externalLink) to.meta.title ? '123test router' : '';
  if (name) {
    if (_from?.name) {
      console.log(_from.name, '_from.name');
      // 如果路由包含http 则是超链接 反之是普通路由
      if (externalLink && externalLink.includes('http')) {
        openLink(`http${split(externalLink, 'http')[1]}`);
        NProgress.done();
      } else {
        next();
      }
    } else {
      // 刷新
      // if (usePermissionStoreHook().wholeRoutes.length === 0)
      //   initRouter(name.username).then((router: Router) => {
      //     router.push(to.path);
      //     // 刷新页面更新标签栏与页面路由匹配
      //     const localRoutes = storageLocal.getItem(
      //       'responsive-routesInStorage'
      //     );
      //     const optionsRoutes = router.options?.routes;
      //     const newLocalRoutes = [];
      //     optionsRoutes.forEach((ors) => {
      //       localRoutes.forEach((lrs) => {
      //         if (ors.path === lrs.parentPath) {
      //           newLocalRoutes.push(lrs);
      //         }
      //       });
      //     });
      //     storageLocal.setItem(
      //       'responsive-routesInStorage',
      //       uniqBy(newLocalRoutes, 'path')
      //     );
      //   });
      next();
    }
  } else {
    if (to.path !== '/login') {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        next({ path: '/login' });
      }
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
