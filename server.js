const Webpack = require("webpack")
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require("./webpack.config")
const config = require('./config/')

var compiler = Webpack(webpackConfig)
var server = new WebpackDevServer(compiler, {
    historyApiFallback: {
        index: 'dist/index.html'
    },
    // publicPath: "/js",
    stats: {
        colors: true //显示不同的颜色区分打包的文件
    },
    // proxy: { //代理服务器
    //     'api': {
    //         target: config.target,
    //         changeOrigin: true
    //     }
    // }
})
var port = 3100;
server.listen(port, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('http://localhost:' + port + config.publicPath)
})