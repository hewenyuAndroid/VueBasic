const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: false, //关闭语法检查

  // 跨域问题处理方案1
  // devServer: {
  //   proxy: "http://localhost:5000"
  // },

  // 跨域问题处理方案2

  devServer: {
    proxy: {
      '/api1': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: { '^/api1': '' }
      },
      '/test': {// 匹配所有以 '/test'开头的请求路径
        target: 'http://localhost:5001',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: { '^/test': '' }
      }
    }
  }

})
