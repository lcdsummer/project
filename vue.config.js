// const { defineConfig } = require('@vue/cli-service')
// 打包
// const path = require('path')
// 打包--end
module.exports = {

    // Paths
    // assetsRoot: path.resolve(__dirname, './dist'),
    // assetsSubDirectory: 'static',
    // assetsPublicPath: './',
    // 打包
    // publicPath: './',
    // 打包--end
    devServer: {

        // assetsDir: 'static',
        // parallel: false,

        /* 自动打开浏览器 */
        // open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 8060,
        disableHostCheck: true,
        /* 使用代理 */
        proxy: { // string | Object
            '/api': {
                /* 目标代理服务器地址 */
                target: 'http://bd13-120-235-166-48.ngrok.io',
                /* 允许跨域 */
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' //规定请求地址以什么作为开头
                }
            },
        },
    }
}