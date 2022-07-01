export const customerInfoData = [
  {
    label: 'CIF客户号',
    value: '582995',
    isTag: false,
    type: ''
  },
  // {
  //   label: '姓名',
  //   value: '叶一',
  //   isTag: false,
  //   type: '',
  // },
  {
    label: '客户号码',
    value: '86188216708',
    isTag: false,
    type: ''
  },
  {
    label: '客户号类型',
    value: '客户号类型',
    isTag: false,
    type: ''
  },
  // {
  //   label: '性别',
  //   value: '男',
  //   isTag: false,
  //   type: '',
  // },
  {
    label: '等级',
    value: '1',
    isTag: false,
    type: ''
  },
  {
    label: '客户类型',
    value: '个人',
    isTag: false,
    type: ''
  },
  {
    label: '语言',
    value: '简体中文',
    isTag: false,
    type: ''
  },
  // {
  //   label: '证件类型',
  //   value: '身份证',
  //   isTag: false,
  //   type: '',
  // },
  // {
  //   label: '证件号码',
  //   value: '**********01017272',
  //   isTag: false,
  //   type: '',
  // },
  {
    label: '法人团体',
    value: '个人',
    isTag: false,
    type: ''
  },
  {
    label: '婚姻状况',
    value: '已婚',
    isTag: false,
    type: ''
  },
  {
    label: '工作传真号码',
    value: '工作传真号码',
    isTag: false,
    type: ''
  },
  {
    label: '学历',
    value: '本科',
    isTag: false,
    type: ''
  },
  {
    label: '职务',
    value: '其它',
    isTag: false,
    type: ''
  },
  {
    label: '国籍',
    value: '中国',
    isTag: false,
    type: ''
  },
  {
    label: '要客标识',
    value: '一级敏感要客（A）',
    isTag: true,
    type: 'red'
  },
  {
    label: 'VIP标识',
    value: '财富管理',
    isTag: true,
    type: 'lightpink'
  },
  {
    label: 'VIP有效期',
    value: '2021-03-14——2050-12-31',
    isTag: true,
    type: 'blue'
  },
  {
    label: '家庭成员数量',
    value: '3',
    isTag: false,
    type: ''
  },
  {
    label: '电子邮件地址',
    value: '***********@166.com',
    isTag: false,
    type: ''
  },
  {
    label: '安全资料识别符',
    value: 'MMNE',
    isTag: false,
    type: ''
  }
];

export const ManagerInfo = [
  {
    label: '客户经理姓名',
    value: 'XXX',
    isTag: false,
    type: ''
  },
  {
    label: '称谓',
    value: 'XXXX',
    isTag: false,
    type: ''
  },
  {
    label: '单位电话',
    value: '010***66',
    isTag: false,
    type: ''
  },
  {
    label: '移动电话',
    value: '187***32384',
    isTag: false,
    type: ''
  },
  {
    label: '客户经理员工号',
    value: '166909',
    isTag: false,
    type: ''
  },
  {
    label: '所属分行名称',
    value: 'XXXXXXX',
    isTag: false,
    type: ''
  },
  {
    label: '证件类型',
    value: '身份证',
    isTag: false,
    type: ''
  },
  {
    label: '证件号码',
    value: '**********01015656',
    isTag: false,
    type: ''
  },
  {
    label: '城市',
    value: '广州',
    isTag: false,
    type: ''
  },
  {
    label: '省份',
    value: '广东',
    isTag: false,
    type: ''
  },
  {
    label: '客户经理入行时间',
    value: '2018-09-12',
    isTag: false,
    type: ''
  },
  {
    label: '邮编',
    value: '100000',
    isTag: false,
    type: ''
  },
  {
    label: '地址1',
    value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    isTag: false,
    type: ''
  }
];
export const recepInfo = [
  {
    label: '呼入方式',
    value: '系统离线状态操作',
    isTag: false,
    type: ''
  },
  {
    label: '城市',
    value: '客服中心―综合技能组',
    isTag: false,
    type: ''
  },
  {
    label: '来电号码',
    value: '166***02908',
    isTag: false,
    type: ''
  },
  {
    label: '转入原因',
    value: '未知',
    isTag: false,
    type: ''
  }
  // {
  //   label: '来电原因',
  //   value: 'XXXXX',
  //   isTag: false,
  //   type: '',
  //   span:"2"
  // },
  // {
  //   label: '客户问题',
  //   value: 'XXXXX',
  //   isTag: false,
  //   type: '',
  //   span:"2"
  // },
];

export const options = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [
          {
            value: 'yizhi',
            label: '一致'
          },
          {
            value: 'fankui',
            label: '反馈'
          },
          {
            value: 'xiaolv',
            label: '效率'
          },
          {
            value: 'kekong',
            label: '可控'
          }
        ]
      },
      {
        value: 'daohang',
        label: '导航',
        children: [
          {
            value: 'cexiangdaohang',
            label: '侧向导航'
          },
          {
            value: 'dingbudaohang',
            label: '顶部导航'
          }
        ]
      }
    ]
  },
  {
    value: 'zujian',
    label: '组件',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout 布局'
          },
          {
            value: 'color',
            label: 'Color 色彩'
          },
          {
            value: 'typography',
            label: 'Typography 字体'
          },
          {
            value: 'icon',
            label: 'Icon 图标'
          },
          {
            value: 'button',
            label: 'Button 按钮'
          }
        ]
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio 单选框'
          },
          {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          },
          {
            value: 'input',
            label: 'Input 输入框'
          },
          {
            value: 'input-number',
            label: 'InputNumber 计数器'
          },
          {
            value: 'select',
            label: 'Select 选择器'
          },
          {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          },
          {
            value: 'switch',
            label: 'Switch 开关'
          },
          {
            value: 'slider',
            label: 'Slider 滑块'
          },
          {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          },
          {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          },
          {
            value: 'upload',
            label: 'Upload 上传'
          },
          {
            value: 'rate',
            label: 'Rate 评分'
          },
          {
            value: 'form',
            label: 'Form 表单'
          }
        ]
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table 表格'
          },
          {
            value: 'tag',
            label: 'Tag 标签'
          },
          {
            value: 'progress',
            label: 'Progress 进度条'
          },
          {
            value: 'tree',
            label: 'Tree 树形控件'
          },
          {
            value: 'pagination',
            label: 'Pagination 分页'
          },
          {
            value: 'badge',
            label: 'Badge 标记'
          }
        ]
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert 警告'
          },
          {
            value: 'loading',
            label: 'Loading 加载'
          },
          {
            value: 'message',
            label: 'Message 消息提示'
          },
          {
            value: 'message-box',
            label: 'MessageBox 弹框'
          },
          {
            value: 'notification',
            label: 'Notification 通知'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'NavMenu 导航菜单'
          },
          {
            value: 'tabs',
            label: 'Tabs 标签页'
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          },
          {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          },
          {
            value: 'steps',
            label: 'Steps 步骤条'
          }
        ]
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog 对话框'
          },
          {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          },
          {
            value: 'popover',
            label: 'Popover 弹出框'
          },
          {
            value: 'card',
            label: 'Card 卡片'
          },
          {
            value: 'carousel',
            label: 'Carousel 走马灯'
          },
          {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }
        ]
      }
    ]
  },
  {
    value: 'ziyuan',
    label: '资源',
    children: [
      {
        value: 'axure',
        label: 'Axure Components'
      },
      {
        value: 'sketch',
        label: 'Sketch Templates'
      },
      {
        value: 'jiaohu',
        label: '组件交互文档'
      }
    ]
  }
];

export const customerTags = [
  {
    label: '要客标识标识',
    value: '一级敏感要客',
    isTag: true,
    type: 'red'
  },
  {
    label: 'VIP标识',
    value: '财富管理',
    isTag: true,
    type: 'green'
  },
  {
    label: '重要行领导标识',
    value: '重要行领导标识',
    isTag: true,
    type: 'blue'
  },
  {
    label: '专家坐席电话进线标识',
    value: '转专家座席进线，请注意进行转接后评价',
    isTag: true,
    type: 'yellow'
  },
  {
    label: '投诉与建议进线标识',
    value: '投诉与建议进线标识',
    isTag: true,
    type: 'no'
  },
  {
    label: '72小时重复4次标识',
    value: '72小时重复4次标识',
    isTag: true,
    type: 'lightpink'
  },
  {
    label: '敏感职业客户标识',
    value: '敏感职业客户标识',
    isTag: true,
    type: 'purple'
  },
  {
    label: '生日提醒标识',
    value: '生日提醒标识',
    isTag: true,
    type: 'no'
  },
  {
    label: '高概率营销客户标识',
    value: '高概率营销客户标识',
    isTag: true,
    type: 'lightgreen'
  },
  {
    label: '已绑定缤纷生活标识',
    value: '已绑定缤纷生活标识',
    isTag: true,
    type: 'pink'
  },
  {
    label: '客户个性化信息标识',
    value: '客户个性化信息标识',
    isTag: true,
    type: 'no'
  },
  {
    label: '异常账户标识',
    value: '异常账户标识',
    isTag: true,
    type: 'pink'
  },
  {
    label: 'VIP标识',
    value: 'VIP标识',
    isTag: true,
    type: 'lightgreen'
  }
];

export const customerBasicInfo = [
  {
    label: '姓名',
    value: '叶一',
    isTag: false,
    type: ''
  },
  {
    label: '性别',
    value: '男',
    isTag: false,
    type: ''
  },
  {
    label: '证件类型',
    value: '身份证',
    isTag: false,
    type: ''
  },
  {
    label: '证件号',
    value: '**********01017272',
    isTag: false,
    type: ''
  },
  {
    label: '生日',
    value: '****-01-01',
    isTag: false,
    type: ''
  },
  {
    label: '手机',
    value: '182***08201',
    isTag: false,
    type: ''
  }
  // {
  //   label: '要客标识',
  //   value: '一级敏感要客',
  //   isTag: true,
  //   type: 'red',
  // },
  // {
  //   label: 'VIP标识',
  //   value: '财富管理',
  //   isTag: true,
  //   type: 'blue',
  // },
  // {
  //   label: '单位名称',
  //   value: '中国远洋',
  //   isTag: false,
  //   type: '',
  // },
  // {
  //   label: '职务',
  //   value: '其它',
  //   isTag: false,
  //   type: '',
  // },
];

export const highCardList: any = [
  {
    title: '银联钻石卡(财富管理)',
    type: 'green',
    typeDetail: '正常',
    cardType: 'main',
    account: '6259****89699550',
    startDate: '2021-03-24',
    endDate: '2025-03-23',
    kind: '迁移卡'
  },
  {
    title: '长城环球通自由行白金日本版',
    type: 'orange',
    typeDetail: '激活中',
    cardType: 'affiliate',
    account: '6253****37058041',
    startDate: '2021-05-19',
    endDate: '2031-05-18',
    kind: '迁移卡'
  },
  {
    title: '国航银联白金卡',
    type: 'yellow',
    typeDetail: '已销户',
    cardType: 'affiliate',
    account: '6259****89690987',
    startDate: '2021-05-19',
    endDate: '2031-05-18',
    kind: '迁移卡'
  },
  {
    title: '国航威士白金卡',
    type: 'orange',
    typeDetail: '激活中',
    cardType: 'main',
    account: '6253****37058765',
    startDate: '2021-03-24',
    endDate: '2025-03-23',
    kind: ''
  },
  {
    title: '长城银联白金信用卡',
    type: 'green',
    typeDetail: '正常',
    cardType: 'main',
    account: '6259****89699667',
    startDate: '2021-03-24',
    endDate: '2025-03-23',
    kind: ''
  },
  {
    title: '长城签证通白金卡',
    type: 'yellow',
    typeDetail: '已销户',
    cardType: 'main',
    account: '6253****37058056',
    startDate: '2021-03-24',
    endDate: '2025-03-23',
    kind: '迁移卡'
  },
  {
    title: '长城签证通全币种白金卡',
    type: 'orange',
    typeDetail: '激活中',
    cardType: 'main',
    account: '6259****89699589',
    startDate: '2021-03-24',
    endDate: '2025-03-23',
    kind: '迁移卡'
  },
  {
    title: '长城环球通万事达的携程白金卡',
    type: 'green',
    typeDetail: '正常',
    cardType: 'main',
    account: '6253****37058041',
    startDate: '2021-03-24',
    endDate: '2025-03-23',
    kind: ''
  }
];

export const generalCardList: any = [
  {
    title: '海航银联白金卡',
    type: 'green',
    typeDetail: '正常',
    cardType: 'main',
    account: '6259****80143675',
    startDate: '2021-05-13',
    endDate: '2025-08-26',
    identify: ''
  },
  {
    title: '长城环球通自由行白金欧美版',
    type: 'orange',
    typeDetail: '激活中',
    cardType: 'main',
    account: '6253****70651504',
    startDate: '2021-05-18',
    endDate: '2025-08-17',
    identify: '迁移卡'
  },
  {
    title: '海航银联白金卡',
    type: 'yellow',
    typeDetail: '已销户',
    cardType: 'main',
    account: '5164****19816113',
    startDate: '2021-02-15',
    endDate: '2031-05-18',
    identify: ''
  }
];
export const ppCardList: any = [
  {
    title: '海航万事达白金卡',
    type: 'green',
    typeDetail: '正常',
    cardType: 'main',
    account: '6259****80143675',
    startDate: '2021-05-13',
    endDate: '2025-08-26',
    identify: ''
  }
];

export const accountDetail = [
  {
    label: '帐号',
    value: '2885754268097571',
    isTag: false,
    type: ''
  },
  {
    label: '发卡机构',
    value: '中国银行银行卡中心',
    isTag: false,
    type: ''
  },
  {
    label: '币别',
    value: 'RMB',
    isTag: false,
    type: ''
  },
  {
    label: '协议参考号ID',
    value: '71616694783',
    isTag: false,
    type: ''
  },
  {
    label: '帐户是否在结构中',
    value: '否',
    isTag: false,
    type: ''
  },
  {
    label: '帐户状态(手动)',
    value: '',
    isTag: false,
    type: ''
  },
  {
    label: '帐户设置时间（手动）',
    value: '',
    isTag: false,
    type: ''
  },
  {
    label: '帐户状态(自动)',
    value: '',
    isTag: false,
    type: ''
  },
  {
    label: '帐户设置时间（自动）',
    value: '',
    isTag: false,
    type: ''
  },
  {
    label: '免息天数或宽限天数',
    value: '1000天',
    isTag: false,
    type: ''
  },
  {
    label: '产品类型',
    value: '海航银联白金卡',
    isTag: false,
    type: ''
  },
  {
    label: '公司标识',
    value: '准贷记卡',
    isTag: false,
    type: ''
  },
  {
    label: '帐号还款方式',
    value: '否',
    isTag: false,
    type: ''
  },
  {
    label: '还款帐号',
    value: '',
    isTag: false,
    type: ''
  },
  {
    label: '下次年费日期',
    value: '',
    isTag: false,
    type: ''
  },
  {
    label: '对帐单地址',
    value: '北京市海淀区上地科技大厦',
    isTag: false,
    type: '',
    span: 3
  },
  {
    label: '对帐单地址',
    value: '北京市海淀区上地科技大厦',
    isTag: false,
    type: '',
    span: 3
  },
  {
    label: '对帐单邮政编码',
    value: '100000',
    isTag: false,
    type: '',
    span: 3
  },
  {
    label: '帐单日长度单位(手动)',
    value: 'MNTH',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '每月帐单日(关帐日)',
    value: '10',
    isTag: false,
    type: '',
    span: 2
  },
  {
    label: '信用额度',
    value: '1000.00',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '预借现金额度',
    value: '100.00',
    isTag: false,
    type: '',
    span: 2
  }
];

export const cardDetail = [
  {
    label: '卡号',
    value: '6259****80143675',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '制卡状态',
    value: '新卡申请',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '发卡机构',
    value: '中国银行银行卡中心',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '激活方式',
    value: '持卡人手动激活',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '激活日期',
    value: '2020-01-01',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '卡状态',
    value: 'ACTIVATION PENDING',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '卡类型',
    value: '海航银联白金卡',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '开始日期',
    value: '2020-02-01',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '截至日期',
    value: '2030-02-01',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '发卡原因',
    value: '新发卡',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '主附卡',
    value: 'MAIN',
    isTag: false,
    type: '',
    span: 1
  },
  {
    label: '压花名称',
    value: 'YE YI/ ',
    isTag: false,
    type: '',
    span: 1
  }
];

export const timelineData = [
  {
    callNumber: 'CSR21101100000001',
    operator: 'Admin',
    time: '2021-10-11 09:06:43',
    color: 'green',
    icon: 'Check',
    detail:
      '我们有时候会遇到这种业务场景： 进入某个页面时，我们需要验证用户是否已经登陆，是否拥有足够权限？我们可以通过监听路由的变化来实现。'
  },
  {
    callNumber: 'CSR21101100000002',
    operator: 'Admin',
    time: '2021-10-10 12:08:23',
    color: 'green',
    icon: 'check',
    detail:
      '在项目中有一些关键信息，需要及时更新，比如商城类项目的顶部通栏中的个人账户信息，需要在任何页面下都呈现最新数据，而一般情况下顶部通栏都是公共组件，一次引入各个页面通用。'
  },
  {
    callNumber: 'CSR21101100000003',
    operator: '用户一',
    time: '2021-10-09 15:12:11',
    color: 'gray',
    icon: 'InfoFilled',
    detail:
      '对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 @babel/preset-env 来解决浏览器兼容问题。如果你在使用 umi，可以直接使用 targets 配置。'
  },
  {
    callNumber: 'CSR21101100000004',
    operator: 'Admin',
    time: '2021-10-11 09:06:43',
    color: 'red',
    icon: 'Close',
    detail:
      '我们有时候会遇到这种业务场景： 进入某个页面时，我们需要验证用户是否已经登陆，是否拥有足够权限？我们可以通过监听路由的变化来实现。'
  },
  {
    callNumber: 'CSR21101100000005',
    operator: 'Admin',
    time: '2021-10-10 12:08:23',
    color: '#e6a23c',
    icon: 'Warning',
    detail:
      '在项目中有一些关键信息，需要及时更新，比如商城类项目的顶部通栏中的个人账户信息，需要在任何页面下都呈现最新数据，而一般情况下顶部通栏都是公共组件，一次引入各个页面通用。'
  },
  {
    callNumber: 'CSR21101100000006',
    operator: '用户一',
    time: '2021-10-09 15:12:11',
    color: '#66b1ff',
    icon: 'Loading',
    detail:
      '对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 @babel/preset-env 来解决浏览器兼容问题。如果你在使用 umi，可以直接使用 targets 配置。'
  },
  {
    callNumber: 'CSR21101100000007',
    operator: 'Admin',
    time: '2021-10-11 09:06:43',
    detail:
      '我们有时候会遇到这种业务场景： 进入某个页面时，我们需要验证用户是否已经登陆，是否拥有足够权限？我们可以通过监听路由的变化来实现。'
  },
  {
    callNumber: 'CSR21101100000008',
    operator: 'Admin',
    time: '2021-10-10 12:08:23',
    detail:
      '在项目中有一些关键信息，需要及时更新，比如商城类项目的顶部通栏中的个人账户信息，需要在任何页面下都呈现最新数据，而一般情况下顶部通栏都是公共组件，一次引入各个页面通用。'
  }
  // {callNumber:'CSR21101100000009',operator:"用户一",time:'2021-10-09 15:12:11',color:"gray",detail:'对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 @babel/preset-env 来解决浏览器兼容问题。如果你在使用 umi，可以直接使用 targets 配置。'},
  // {callNumber:'CSR21101100000010',operator:"Admin", time:'2021-10-11 09:06:43',color:"red",detail:'我们有时候会遇到这种业务场景： 进入某个页面时，我们需要验证用户是否已经登陆，是否拥有足够权限？我们可以通过监听路由的变化来实现。'},
  // {callNumber:'CSR21101100000011',operator:"Admin",time:'2021-10-10 12:08:23',color:"green",detail:'在项目中有一些关键信息，需要及时更新，比如商城类项目的顶部通栏中的个人账户信息，需要在任何页面下都呈现最新数据，而一般情况下顶部通栏都是公共组件，一次引入各个页面通用。'},
  // {callNumber:'CSR21101100000012',operator:"用户一",time:'2021-10-09 15:12:11',color:"gray",detail:'对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 @babel/preset-env 来解决浏览器兼容问题。如果你在使用 umi，可以直接使用 targets 配置。'},
];

export const callDetail = [
  {
    label: '来电原因',
    value:
      '这是一段关于来电原因的描述这是一段关于来电原因的描述这是一段关于来电原因的描述这是一段关于来电原因的描述这是一段关于来电原因的描述这是一段关于来电原因的描述',
    isTag: true,
    type: 'red',
    span: 2
  },
  {
    label: '姓名',
    value: '叶一',
    isTag: false,
    type: ''
  },
  {
    label: '性别',
    value: '男',
    isTag: false,
    type: ''
  },
  {
    label: '手机号码',
    value: '182***08281',
    isTag: false,
    type: ''
  },
  {
    label: '邮箱地址',
    value: '*********@163.com',
    isTag: false,
    type: ''
  },
  {
    label: '客户号',
    value: '582995',
    isTag: false,
    type: ''
  },
  {
    label: '渠道',
    value: 'CSR',
    isTag: false,
    type: ''
  },
  {
    label: '客户问题',
    value: '这是一段问题描述',
    isTag: false,
    type: '',
    span: 2
  },
  {
    label: '处理描述',
    value: '这是一段处理问题的描述',
    isTag: false,
    type: '',
    span: 2
  }
];

export const callListDetail = [
  {
    label: '信用卡卡号',
    value: '6259****80143675',
    isTag: false
  },
  {
    label: '交易结果',
    value: '成功',
    isTag: false,
    type: ''
  }
];

export const messageList = [
  '1. 子元素根据不同的值 分别定义其在父节点里面的排版方式。',
  '2. 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔或者使用数组形式同时设置 水平间距, 垂直间距',
  '3. 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔或者使用数组形式同时设置 水平间距, 垂直间距',
  '4. 在多数业务情况下，Ant Design需要在设计区域内解决大量信息收纳的问题',
  '5. 因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24等分的原则进行划分。',
  '6. 划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。',
  '7. 『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。'
];

export const drawerData = [
  {
    username: '叶一',
    cardNo: '6259****80143675',
    phoneNo: '166***02908',
    ID: '**********01017272'
  },
  {
    username: '叶二',
    cardNo: '6259****80143675',
    phoneNo: '166***02908',
    ID: '**********01017272'
  },
  {
    username: '叶三',
    cardNo: '6259****80143675',
    phoneNo: '166***02908',
    ID: '**********01017272'
  }
];
export const billList = [
  {
    monthValue: '2021年6月',
    dateRange: '2021年5月26-2021年6月25'
  },
  {
    monthValue: '2021年7月',
    dateRange: '2021年6月26-2021年7月25'
  },
  {
    monthValue: '2021年8月',
    dateRange: '2021年7月26-2021年8月25'
  },
  {
    monthValue: '2021年9月',
    dateRange: '2021年8月26-2021年9月25'
  },
  {
    monthValue: '2021年10月',
    dateRange: '2021年9月26-2021年10月25'
  },
  {
    monthValue: '2021年11月',
    dateRange: '2021年10月26-2021年11月25'
  },
  {
    monthValue: '2021年12月',
    dateRange: '2021年11月26-2021年12月25'
  },
  {
    monthValue: '2022年1月',
    dateRange: '2021年12月26-2022年1月25'
  },
  {
    monthValue: '2022年2月',
    dateRange: '2022年1月26-2022年2月25'
  },
  {
    monthValue: '2022年3月',
    dateRange: '2022年2月26-2022年3月25'
  },
  {
    monthValue: '2022年4月',
    dateRange: '2022年3月26-2022年4月25'
  },
  {
    monthValue: '2022年5月',
    dateRange: '2022年4月26-2022年5月25'
  }
];

export const monthListDesc = [
  {
    label: '帐单日期',
    value: '2012-04-25',
    isTag: false
  },
  {
    label: '到期还款日',
    value: '2012-05-15',
    isTag: false
  },
  {
    label: '免息天数',
    value: '20',
    isTag: false
  },
  {
    label: '宽限天数',
    value: '3',
    isTag: false
  },
  {
    label: '免息期',
    value: '2012-05-15',
    isTag: false
  },
  {
    label: '宽限期',
    value: '2012-05-18',
    isTag: false
  }
];

export const fourData = [
  {
    key: '1',
    previousBill: '1',
    previousRepayment: '2',
    currentSigning: '3',
    currentAdjustment: '4',
    revolvingInterest: '5',
    currentBalance: '7',
    currency: '6',
    minimumRepayment: '9',
    remainingOutstanding: '8'
  }
];

export const ProgressDetail = [
  {
    label: '产品编码',
    value: '1CT2'
  },
  {
    label: '申请件编号',
    value: '1120090000000194'
  },
  {
    label: '申请人姓',
    value: '李'
  },
  {
    label: '申请人名',
    value: '小二'
  },
  {
    label: '进件机构ID',
    value: '4900004000'
  },
  {
    label: '申请件收到日期',
    value: '20090302'
  },
  {
    label: '目前处理机构ID',
    value: ''
  },
  {
    label: '目前处理人员ID',
    value: ''
  },
  {
    label: '拒绝原因',
    value: ''
  },
  {
    label: '已补件次数',
    value: ''
  },
  {
    label: '最后补件日期',
    value: ''
  },
  {
    label: '待补件名称',
    value: ''
  },
  {
    label: '申请状态',
    value: '你的申请正处于审核阶段，请耐心等待。(审核处理中)  ',
    isTag: true,
    type: 'red',
    span: 2
  },
  {
    label: '进件渠道',
    value: '正常申请'
  },
  {
    label: '领卡网点号',
    value: '10001010'
  },
  {
    label: '领卡网点名称',
    value: '北京分行XX分理处'
  },
  {
    label: '领卡网点联系电话',
    value: '82971100'
  },
  {
    label: '领卡网点地址',
    value: '上地西路x号'
  },
  {
    label: '申请状态',
    value: ''
  },
  {
    label: '目前处理人员ID',
    value: ''
  },
  {
    label: '申请状态',
    value: ''
  },
  {
    label: '备注',
    value: ''
  }
];

export const tradeData = [
  {
    key: '1',
    accountNumber: '123',
    tradeDate: '2021-09-12',
    mentryDate: '2021-09-13',
    amount: '108.00',
    currency: 'RMB(156)',
    loanFlag: 'DEBT',
    disputeSign: 'NORM',
    disputeDate: '-',
    releaseDate: '-',
    code: '(4017)',
    settleAmount: '108.00',
    settleAmountCurrency: 'RMB(156)',
    detail: '北京欧尚超市有限公司丰//CHN',
    cardNo: '6259071126977160',
    freeSerectSign: '否',
    authCode: '082361'
  },
  {
    key: '2',
    accountNumber: '124',
    tradeDate: '2021-09-14',
    mentryDate: '2021-09-15',
    amount: '25.00',
    currency: 'RMB(156)',
    loanFlag: 'DEBT',
    disputeSign: 'NORM',
    disputeDate: '-',
    releaseDate: '-',
    code: '(3210)',
    settleAmount: '25.00',
    settleAmountCurrency: 'RMB(156)',
    detail: '北京欧尚超市有限公司丰//CHN',
    cardNo: '6259071126977161',
    freeSerectSign: '否',
    authCode: '082361'
  },
  {
    key: '3',
    accountNumber: '125',
    tradeDate: '2021-08-21',
    mentryDate: '2021-08-22',
    amount: '598.00',
    currency: 'RMB(156)',
    loanFlag: 'DEBT',
    disputeSign: 'NORM',
    disputeDate: '-',
    releaseDate: '-',
    code: 'POS消费(2021)',
    settleAmount: '598.00',
    settleAmountCurrency: 'RMB(156)',
    detail: '北京欧尚超市有限公司丰//CHN',
    cardNo: '6259071126977162',
    freeSerectSign: '否',
    authCode: '082361'
  }
];
