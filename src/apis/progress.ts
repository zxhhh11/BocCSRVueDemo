import ajax from '@/utils/ajax';

// const serverPre = ajax.serverUrlMock;
const serverPre = ajax.serverUrl;
const serverName = '/progress';
// 页面模板列表查询
export async function getProgressListAPI(params: any) {
  return ajax.get(serverPre(`${serverName}/progressall/list`), params);
}
