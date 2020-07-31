const NODE_ENV = process.env.NODE_ENV;
module.exports = {
    devTest: { //部署到测试服务器上
        remotePath: '/usr/zbapps/pm2/express-pm2-mysql-CRUD/app/', //部署到服务器的路径
        host: 'http://122.51.31.223', //ip地址
        user: 'root', //帐号
        pass: 'qwer123hB', //密码
        port: 22 //端口
    },
    devDist: { //部署正式服务器上
        remotePath: '/usr/zbapps/pm2/express-pm2-mysql-CRUD/app/', //部署到服务器的路径
        host: 'http://122.51.31.223', //ip地址
        user: 'root', //帐号
        pass: 'qwer123hB', //密码
        port: 22 //端口
    },
    publicPath: '/dist', //程序在网站根路径地址
    target: NODE_ENV //连接的服务器地址
}