import axios from 'axios'

const request = axios.create({
    baseURL: '/api/',
    // timeout: 5000
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    config.headers['ngrok-skip-browser-warning'] = true;

    // config.headers['token'] = user.token;  // 在发送请求之前设置请求头
    return config
}, error => {
    return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果（对后台请求回来的数据做统一处理）
request.interceptors.response.use(
    response => {
        let res = response.data;//首先获取到response中的data
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 如果是兼容服务端返回的字符串数据，则返回parse
        // if (typeof res === 'string') {
        //     res = res ? JSON.parse(res) : res
        // }
        return res;
    },
    //如果是error,则打印日志出来
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

//最后export出来
export default request