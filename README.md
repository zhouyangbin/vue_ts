
github:[https://github.com/lzxb/vue2-demo](https://github.com/lzxb/vue2-demo)

```

#### gulp相关模块
```
gulp                                  // 用来构建自动化工作流
gulp-sftp                             // 将代码自动部署到服务器上
del                                   // 代码部署成功后，删除本地编译的代码
```
#### 其他模块
```
cross-env                             // 解决跨平台设置NODE_ENV的问题
```

```
vue                                   // 构建用户界面的
vue-router                            // 路由
vuex                                  // 组件状态管理
```

### 页面说明
```
/login                                // 登录，不需要登录可以访问
/signout                              // 退出登录，需要登录后才可以访问
/home                                 // 个人中心，需要登录后才可以访问
/                                     // 首页，不需要登录可以访问
*                                     // 强制跳转到登录页面
```

### 运行程序 
```
npm install
npm run dev
http://localhost:3000

账号密码随便输入