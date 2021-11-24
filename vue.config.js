const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
    sourceMap: true
  },
  assetsDir: 'assets',
  configureWebpack: {
    module: {
      rules: [
        // 用来解决安装的elemnt-plus正处于快速迭代开发阶段所导致的问题：Can't reexport the named export 'looseEqual' from non EcmaScript module
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
      alias: {
        '/@': resolve('src'),
        '~': process.cwd(),
        public: resolve('public'),
        components: resolve('src/components'),
        util: resolve('src/utils'),
        store: resolve('src/store'),
        router: resolve('src/router')
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap((options) => {
        options.fix = true;
        return options;
      });
    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end();
  }
};
