// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
// })
const path = require('path')
module.exports = {
  pages: {
    index: {
      // 修改项目入口文件
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  // 扩展webpack配置,使webpages加入编译 对所有语法进行一个处理（高版本转低版本）
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        return options
      })
  },
}
