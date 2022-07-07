import ajax from '@/utils/ajax';

// const serverPre = ajax.serverUrlMock;
const serverPre = ajax.serverUrl;
const serverName = '/history';
// 页面模板列表查询
export async function getHistoryListAPI(params: any) {
  return ajax.get(serverPre(`${serverName}/historyall/list`), params);
}
export async function getFinancialListAPI(params: any) {
  return ajax.get(serverPre(`${serverName}/financial/list`), params);
}
export async function getTranListAPI(params: any) {
  return ajax.get(serverPre(`${serverName}/tranQuery/list`), params);
}
