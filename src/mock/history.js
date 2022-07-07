import { getUrlParams } from './util';

export const callList = [
  {
    key: '1',
    serviceNumber: '2243878',
    serviceTime: '2021-10-11 09-06-43',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡对账单信息'
  },
  {
    key: '2',
    serviceNumber: '2243877',
    serviceTime: '2021-10-11 08-06-43',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '综合查询'
  },
  {
    key: '3',
    serviceNumber: '2243876',
    serviceTime: '2021-10-10 19-08-04',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡状态查询'
  },
  {
    key: '4',
    serviceNumber: '2243875',
    serviceTime: '2021-10-10 17-06-12',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '金融账户涉税信息'
  },
  {
    key: '5',
    serviceNumber: '2243874',
    serviceTime: '2021-10-10 15-05-27',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡对账单信息'
  },
  {
    key: '6',
    serviceNumber: '2243873',
    serviceTime: '2021-10-09 13-13-38',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '综合查询'
  },
  {
    key: '7',
    serviceNumber: '2243872',
    serviceTime: '2021-10-07 11-25-45',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡对账单信息'
  },
  {
    key: '8',
    serviceNumber: '2243871',
    serviceTime: '2021-10-04 08-12-28',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡状态查询'
  },
  {
    key: '9',
    serviceNumber: '2243870',
    serviceTime: '2021-10-03 09-06-17',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '综合查询'
  },
  {
    key: '10',
    serviceNumber: '2243869',
    serviceTime: '2021-10-03 09-06-09',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '金融账户涉税信息'
  },
  {
    key: '11',
    serviceNumber: '2243868',
    serviceTime: '2021-10-01 11-25-45',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡对账单信息'
  },
  {
    key: '12',
    serviceNumber: '2243867',
    serviceTime: '2021-09-04 08-12-28',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡状态查询'
  },
  {
    key: '13',
    serviceNumber: '2243866',
    serviceTime: '2021-09-03 09-06-17',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '综合查询'
  },
  {
    key: '14',
    serviceNumber: '2243865',
    serviceTime: '2021-09-03 09-06-09',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '金融账户涉税信息'
  },
  {
    key: '15',
    serviceNumber: '2243878',
    serviceTime: '2021-10-11 09-06-43',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡对账单信息'
  },
  {
    key: '16',
    serviceNumber: '2243877',
    serviceTime: '2021-10-11 08-06-43',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '综合查询'
  },
  {
    key: '17',
    serviceNumber: '2243876',
    serviceTime: '2021-10-10 19-08-04',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡状态查询'
  },
  {
    key: '18',
    serviceNumber: '2243875',
    serviceTime: '2021-10-10 17-06-12',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '金融账户涉税信息'
  },
  {
    key: '19',
    serviceNumber: '2243874',
    serviceTime: '2021-10-10 15-05-27',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡对账单信息'
  },
  {
    key: '20',
    serviceNumber: '2243873',
    serviceTime: '2021-10-09 13-13-38',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '综合查询'
  },
  {
    key: '21',
    serviceNumber: '2243872',
    serviceTime: '2021-10-07 11-25-45',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡对账单信息'
  },
  {
    key: '22',
    serviceNumber: '2243871',
    serviceTime: '2021-10-04 08-12-28',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡状态查询'
  },
  {
    key: '23',
    serviceNumber: '2243870',
    serviceTime: '2021-10-03 09-06-17',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '综合查询'
  },
  {
    key: '24',
    serviceNumber: '2243869',
    serviceTime: '2021-10-03 09-06-09',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '金融账户涉税信息'
  },
  {
    key: '25',
    serviceNumber: '2243868',
    serviceTime: '2021-10-01 11-25-45',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡对账单信息'
  },
  {
    key: '26',
    serviceNumber: '2243867',
    serviceTime: '2021-09-04 08-12-28',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '信用卡状态查询'
  },
  {
    key: '27',
    serviceNumber: '2243866',
    serviceTime: '2021-09-03 09-06-17',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '综合查询'
  },
  {
    key: '28',
    serviceNumber: '2243865',
    serviceTime: '2021-09-03 09-06-09',
    operator: 'Admin',
    status: '交易成功',
    channel: 'CSR',
    serviceType: '金融账户涉税信息'
  }
];

export const IVRData = [
  {
    key: '1',
    number: '12345678',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '2',
    number: '12345679',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '3',
    number: '12345680',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '4',
    number: '12345681',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '5',
    number: '12345681',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '6',
    number: '12345683',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '7',
    number: '12345684',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '8',
    number: '12345685',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '9',
    number: '12345686',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '10',
    number: '12345687',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '11',
    number: '12345688',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '12',
    number: '12345689',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '13',
    number: '12345690',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '14',
    number: '12345691',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '15',
    number: '12345692',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '16',
    number: '12345693',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '17',
    number: '12345694',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '18',
    number: '12345695',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '19',
    number: '12345696',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '20',
    number: '12345697',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '21',
    number: '12345698',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  },
  {
    key: '22',
    number: '12345699',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17'
  }
];
const branchHistory = [
  {
    serialNumber: '12345678',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '6259****80143675',
    operator: '叶一',
    Reviewer: 'Admin'
  },
  {
    serialNumber: '12345679',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '6259****80143676',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345680',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '6259****80143677',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345681',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345681',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345683',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345684',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345685',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345686',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345687',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345688',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345689',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345690',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345691',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345692',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345693',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345694',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345695',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345696',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345697',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345698',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  },
  {
    serialNumber: '12345699',
    name: 'XXXX',
    result: 'XXXXXXXXX',
    time: '2021-10-12 15:26:17',
    cardNo: '',
    operator: '',
    Reviewer: ''
  }
];
const interData = [
  {
    cardNo: '6259****80143675',
    returnTime: '2021-10-12 15:26:17',
    type: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17'
  },
  {
    cardNo: '6259****80153676',
    returnTime: '2021-10-11 15:26:17',
    type: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17'
  },
  {
    cardNo: '6259****80146531',
    returnTime: '2021-10-10 15:26:17',
    type: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17'
  },
  {
    cardNo: '6259****80145468',
    returnTime: '2021-10-12 11:26:17',
    type: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17'
  },
  {
    cardNo: '6259****80141344',
    returnTime: '2021-10-12 17:18:09',
    type: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17'
  },
  {
    cardNo: '6259****55788999',
    returnTime: '2021-10-12 09:21:36',
    type: 'XXXXXXXXX',
    initialTime: '2021-10-12 09:19:12'
  }
];
const workSheet = [
  {
    wordNo: '12345678',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: 'Admin',
    cardNo: '6259****80143675'
  },
  {
    wordNo: '12345679',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '叶一',
    cardNo: '6259****80165432'
  },
  {
    wordNo: '12345680',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345681',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345681',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345683',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345684',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345685',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345686',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345687',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345688',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345689',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345690',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345691',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  },
  {
    wordNo: '12345692',
    name: 'XXXX',
    detail: 'XXXXXXXXX',
    initialTime: '2021-10-12 15:26:17',
    initiator: '',
    cardNo: ''
  }
];
const allList = {
  ivr: IVRData,
  h400: callList,
  branch: branchHistory,
  inter: interData,
  work: workSheet
};
const FINANCIALLIST = [
  {
    UCIFSN: 'UCIFSN0',
    CARDNO: 'CARDNO0',
    TOTALAMT: 'TOTALAMT0',
    MINPAYAMT: 'MINPAYAMT0',
    OVRBAL: 'OVRBAL0',
    CRTARGAMT: 'CRTARGAMT0',
    TOTALPAY: 'TOTALPAY0',
    STRDAT: 'STRDAT0',
    CYCDAT: 'CYCDAT0',
    ENDDAT: 'ENDDAT0',
    CYCLE: 'CYCLE0',
    STRBAL: 'STRBAL0',
    PAYDAT: 'PAYDAT0',
    CRDTAMT: 'CRDTAMT0',
    PAYAMT: 'PAYAMT0',
    DBTAMT: 'DBTAMT0',
    PERIODAMT: 'PERIODAMT0',
    DISPUTEAMT: 'DISPUTEAMT0',
    DISPUTETXN: 'DISPUTETXN0',
    CURCOD: 'CURCOD0'
  }
];
const TRANLISTS = [
  {
    STLTYPE: 'STLTYPE1',
    BILADRTYP: 'BILADRTYP1',
    CURCOD: 'CURCOD1',
    UCIFSN: 'UCIFSN1',
    ACTAUTDAT: 'ACTAUTDAT1',
    ACTMAUDAT: 'ACTMAUDAT1',
    ACTAUTSTS: 'ACTAUTSTS1',
    ACTMAUSTS: 'ACTMAUSTS1',
    CYCDAT: 'CYCDAT1',
    PRDCOD: 'PRDCOD1',
    ENDDAT: 'ENDDAT1',
    FEEFLG: 'FEEFLG1',
    STRDAT: 'STRDAT1',
    ORLVENDDAT: 'ORLVENDDAT1',
    ORLVSTRDAT: 'ORLVSTRDAT1',
    ORLVFLG: 'ORLVFLG1',
    PAYTYP: 'PAYTYP1',
    ACTTYP: 'ACTTYP1',
    MAINFLG: 'MAINFLG1',
    TRSFLG: 'TRSFLG1',
    TRSSTRDAT: 'TRSSTRDAT1',
    TRSENDDAT: 'TRSENDDAT1',
    INTFLG: 'INTFLG1'
  }
];
export default {
  'get|/history/historyall/list': (data) => {
    let params = getUrlParams(data.url);
    let current = 10 * (params.currentPage - 1);
    let part = params.part;
    // let newList = callList.slice(current, params.currentPage * 10)
    let newList = allList[part].slice(current, params.currentPage * 10);
    return {
      status: 200,
      message: 'success1',
      data: {
        rows: newList,
        total: allList[part].length
      }
    };
  },
  'get|/history/financial/list': (data) => {
    let params = getUrlParams(data.url);
    let current = 10 * (params.currentPage - 1);
    // let part = params.part;
    // let newList = callList.slice(current, params.currentPage * 10)
    let newList = FINANCIALLIST.slice(current, params.currentPage * 10);
    return {
      status: 200,
      message: 'success1',
      data: {
        rows: newList,
        total: FINANCIALLIST.length
      }
    };
  },
  'get|/history/tranQuery/list': (data) => {
    let params = getUrlParams(data.url);
    let current = 10 * (params.currentPage - 1);
    // let part = params.part;
    // let newList = callList.slice(current, params.currentPage * 10)
    let newList = TRANLISTS.slice(current, params.currentPage * 10);
    return {
      status: 200,
      message: 'success1',
      data: {
        rows: newList,
        total: TRANLISTS.length
      }
    };
  }
};
