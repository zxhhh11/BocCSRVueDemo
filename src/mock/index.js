const Mock = require('mockjs');
Mock.setup({
  timeout: '200-600'
});
// Mock.XHR.prototype.proxySend = Mock.XHR.prototype.send;
// Mock.XHR.prototype.send = function (...args) {
//   if (this.custom.xhr) {
//     this.custom.xhr.withCredentials = this.withCredentials || false;
//     if (this.responseType) {
//       this.custom.xhr['responseType'] = this['responseType'];
//     }
//   }
//   this.proxySend(...args);
// };

let configArray = [];

// 遍历所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
  if (key === './index.js' || key === './util.js') return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
  for (const [path, target] of Object.entries(item)) {
    const protocol = path.split('|');
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
  }
});
