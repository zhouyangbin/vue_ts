// 1、引入自定义的axios
import request from '../request';

// 2、封装接口

/**
 * 封装 数据列表的接口
 * pageCode 页面
 * limitNum 每页显示个数
 */
export const login = (data) => {
    // 使用promise解决异步问题
    return new Promise((resolve) => {
        // 因为自定义的axios包含baseUrl,此处只需要写后面的接口即可
        request.get('/login', {
            params: {
                name: data.name,
                password: data.password
            }
        }).then(res => {
            resolve(res.data)
        })
    })
}
export const regist = (data) => {
    // 使用promise解决异步问题
    return new Promise((resolve) => {
        // 因为自定义的axios包含baseUrl,此处只需要写后面的接口即可
        request.post('/regist',
            data).then(res => {
            resolve(res.data)
        })
    })
}

// 3、暴露接口