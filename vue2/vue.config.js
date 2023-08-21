const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  publicPath: '/child/vue2/',
  transpileDependencies: true,
  devServer: {
    port: 8002,
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    }
  },
  outputDir: path.join('../server/child/vue2'),
})
