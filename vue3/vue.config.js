const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const Components = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  publicPath: '/child/vue3/',
  transpileDependencies: true,
  devServer: {
    port: 8003,
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    }
  },
  outputDir: path.join('../server/child/vue3'),
  configureWebpack: {
    plugins: [
      Components({
        dts: true, // 是否需要自动生成components.d.ts
        resolvers: [
          (componentName) => {
            if (componentName.startsWith("My")) {
              const tName = componentName.slice(2).toLowerCase()
              return { 
                name: componentName,
                from: `xzjviteui/vite-ui`
              };
            }
          },
        ],
      })
    ],
  }
})
