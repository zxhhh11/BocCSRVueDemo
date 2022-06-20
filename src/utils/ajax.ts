import axios, { AxiosRequestConfig } from 'axios';

// import { getSessionStorage } from './storage';

// axios.defaults.headers = {
//   'X-Requested-With': 'XMLHttpRequest'
// };
axios.defaults.timeout = 1000 * 60 * 10;

function requestHandle(params: AxiosRequestConfig<any>) {
  return new Promise((resolve, reject) => {
    axios(params)
      .then((res) => {
        if (res.data) {
          if (res.status === 200) {
            resolve({
              data: res.data ? res.data : null
            });
          } else if (res.status === 20122) {
            window.alert('无操作权限');
          } else {
            if (res.status === 20121) {
              try {
                document.location.replace('/login');
              } catch (err) {
                console.log(err);
              }
            } else {
              resolve({
                error: {
                  code: res.data.status,
                  message: res.data.message
                }
              });
            }
          }
        } else {
          reject(new Error('没有返回数据'));
        }
      })
      .catch((err) => {
        resolve({
          error: {
            code: 500,
            message: `${params.url}: ${err.message}`
          }
        });
      });
  });
}

function queryString(url: string | string[], query?: { [x: string]: string }) {
  const str = [];
  for (const key in query) {
    if (query[key]) {
      str.push(key + '=' + query[key]);
    }
  }
  const paramStr = str.join('&');
  return paramStr
    ? `${url}${url.indexOf('?') > -1 ? '&' : '?'}${paramStr}`
    : url;
}

function getHeaders(options: any) {
  const headers = Object.assign(
    {
      'Content-Type': 'application/json'
    },
    options
  );

  // const token = getSessionStorage('auth_token');
  // if (token) {
  //   headers.Authorization = token;
  // }
  return headers;
}

export default {
  post: function (url: any, params?: any, op?: any) {
    console.log(url, params);
    return requestHandle({
      method: 'post',
      url: url,
      data: params,
      headers: getHeaders(op)
    });
  },
  get: function (
    url: string | string[],
    params?: { [x: string]: string } | {},
    op?: any
  ) {
    return requestHandle({
      method: 'get',
      url: queryString(url, params) as string,
      headers: getHeaders(op)
    });
  },
  serverUrl(apiName: any) {
    return `/api${apiName}`;
  },
  serverUrlMock(apiName: any) {
    return apiName;
  },
  queryString
};
