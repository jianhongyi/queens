'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = function() {
  return {
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      disableHostCheck: true,
      proxy: {
        '/api/test': {
          target: 'http://stuapi.diplotalk.unischool.cn/',
          ws: false, // 是否代理websockets
          changeOrigin: true, // 这里设置是否跨域
          pathRewrite: {
            '^/api/test': ''
          }
        }
      }
    },

    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets')
      }
    },
    module: {
      rules: [
        {
          test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
          loader: 'url-loader',
          query: {
            limit: 102400000
          }
        },
        {
          test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
          loader: 'file-loader'
        }
      ]
    }
  }
}
