import axios from 'axios'

export function request(config) {
    // 1. 创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2. axios的拦截器
    // 请求拦截
    instance.interceptors.request.use(config => {
        console.log(config)
        // 2.1 请求拦截的作用
        // a. 比如config中的一些信息不符合服务器的要求
        // b. 比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        // c. 某些网络请求，必须携带一些信息，比如token

        return config
    }, error => {
        console.log(error)
    })

    // 响应拦截
    instance.interceptors.response.use(response => {
        return response.data
    }, error => {
        console.log(error)
    })

    // 此处直接return的原因是因为axios.create方法return的就是Promise
    return instance(config)
}