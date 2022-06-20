import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/home.vue';
import NProgress from '@/utils/progress';

export const routes = [
  {
    path: '/',
    redirect: '/test'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '系统首页'
    },
    children: [
      {
        path: '/test',
        name: 'test',
        meta: {
          title: '测试及演示页面'
        },
        icon: 'analysis',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/test/index.vue'),
        redirect: '/test/dashboard',
        children: [
          {
            path: '/test/dashboard',
            name: 'dashboard',
            meta: {
              title: '仪表盘'
            },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ '@/views/test/dashboard.vue'
              )
          },
          {
            path: '/test/testData',
            name: 'testData',
            meta: {
              title: '数据测试'
            },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ '@/views/test/testData.vue'
              )
          }
        ]
      },
      {
        path: '/module1',
        name: 'module1',
        meta: {
          title: '演示模块一'
        },
        icon: 'view-list',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/module1/index.vue'
          ),
        redirect: '/module1/subModule1',
        children: [
          {
            path: '/module1/subModule1',
            name: 'subModule1',
            meta: {
              title: '模块一子模块'
            },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ '@/views/module1/subModule1.vue'
              )
          }
        ]
      },
      {
        path: '/module2',
        name: 'module2',
        meta: {
          title: '演示模块二'
        },
        icon: 'data-file',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/module2/index.vue'
          ),
        redirect: '/module2/billQuery',
        children: [
          {
            path: '/module2/billQuery',
            name: 'billQuery',
            meta: {
              title: '账单查询'
            },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ '@/views/module2/billQuery.vue'
              )
          },
          {
            path: '/module2/progressQuery',
            name: 'progressQuery',
            meta: {
              title: '申请进度查询'
            },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ '@/views/module2/progressQuery.vue'
              )
          },
          {
            path: '/module2/serviceHistory',
            name: 'serviceHistory',
            meta: {
              title: '服务历史'
            },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ '@/views/module2/serviceHistory.vue'
              )
          }
        ]
      },
      {
        path: '/charts',
        name: 'charts',
        meta: {
          title: '图表统计'
        },
        icon: 'analysis',
        component: () =>
          import(/* webpackChunkName: "charts" */ '@/views/charts/index.vue')
      },
      {
        path: '/404',
        name: '404',
        meta: {
          title: '找不到页面'
        },
        icon: 'commodity',
        component: () =>
          import(/* webpackChunkName: "404" */ '@/views/error/404.vue')
      },
      {
        path: '/401',
        name: '401',
        meta: {
          title: '没有权限'
        },
        icon: 'delete-three',
        component: () =>
          import(/* webpackChunkName: "403" */ '@/views/error/401.vue')
      }
      // {
      //   path: '/user',
      //   name: 'user',
      //   meta: {
      //     title: '个人中心'
      //   },
      //   component: () =>
      //     import(/* webpackChunkName: "user" */ '../views/User.vue')
      // }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  document.title = `${to.meta.title} | vue-manage-system`;
  // const role = localStorage.getItem('ms_username');
  // if (!role && to.path !== '/login') {
  //   next('/login');
  // } else if (to.meta.permission) {
  //   // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
  //   role === 'admin' ? next() : next('/403');
  // } else {
  //   next();
  // }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
console.log(router, 'router rr');
export default router;
