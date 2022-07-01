import ajax from '@/utils/ajax';

// const serverPre = ajax.serverUrlMock;
const serverPre = ajax.serverUrl;
const serverName = '/history';
// 页面模板列表查询
export async function getHistoryListAPI(params) {
  return ajax.get(serverPre(`${serverName}/historyall/list`), params);
}
