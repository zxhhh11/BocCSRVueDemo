export const originalMockRouters = [
  {
    path: '/test',
    title: '系统首页',
    name: 'name',
    icon: '#icon-home1',
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
    icon: '#icon-dashboard',
    children: [
      {
        path: '/module1/subModule1',
        title: '模块一子模块',
        name: 'subModule1'
      }
    ]
  },
  {
    path: '/business',
    title: '演示模块二',
    name: 'business',
    icon: '#icon-icons_bussiness',
    children: [
      {
        path: '/business/billQuery',
        title: '账单查询',
        name: 'billQuery'
      },
      {
        path: '/business/progressQuery',
        title: '申请进度查询',
        name: 'progressQuery'
      },
      {
        path: '/business/relatedBussiness',
        title: '关联业务',
        name: 'relatedBussiness'
      },
      {
        path: '/business/serviceHistory',
        title: '服务历史',
        name: 'serviceHistory'
      }
    ]
  },
  {
    icon: '#icon-echarts_line',
    index: '/charts',
    title: '图表统计',
    path: '/charts'
  }
];
