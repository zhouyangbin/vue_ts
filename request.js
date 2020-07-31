// 1、引入axios模块
import axios from 'axios';

const isPro = process.env.NODE_ENV === 'production'
    // console.log(process.env.NODE_ENV)
    // 3、自定义axios
let request = axios.create({
        // 基础的请求地址
        baseURL: isPro ? 'http://localhost:8085' : 'http://localhost:8085' // 后面的时线上的地址，可以改为自己的线上接口地址
    })
    // 4、使用axios的拦截器  ----  请求的拦截器  +  响应的拦截器

// 添加请求拦截器
request.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    // 所有的请求都需要的字段，所有的请求添加loading效果
    // token
    // config.headers['token'] = localStorage.getItem('token')
    return config;
});

// 添加响应拦截器
request.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        return Promise.reject(error.response.data);
    },
);

// 5、暴露axios模块
export default request;