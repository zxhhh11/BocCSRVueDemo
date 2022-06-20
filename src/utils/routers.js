export const mockRouters = [
  {
    path: '/test',
    title: '系统首页',
    name: 'name',
    icon: 'dashboard',
    children: [
      {
        path: '/test/dashboard',
        title: '仪表盘',
        name: 'dashboard'
      },
      {
        path: '/test/testData',
        title: '数据测试',
        name: 'data'
      }
    ]
  },
  {
    path: '/module1',
    title: '演示模块一',
    name: 'module1',
    icon: 'view-list',
    children: [
      {
        path: '/module1/subModule1',
        title: '模块一子模块',
        name: 'subModule1'
      }
    ]
  },
  {
    path: '/module2',
    title: '演示模块二',
    name: 'module2',
    icon: 'data-file',
    children: [
      {
        path: '/module2/billQuery',
        title: '账单查询',
        name: 'billQuery'
      },
      {
        path: '/module2/progressQuery',
        title: '申请进度查询',
        name: 'progressQuery'
      },
      {
        path: '/module2/serviceHistory',
        title: '服务历史',
        name: 'serviceHistory'
      }
    ]
  },
  {
    icon: 'analysis',
    index: '/charts',
    title: '图表统计',
    path: '/charts'
  }
];
