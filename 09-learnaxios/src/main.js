import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 1. axios基本使用
// axios({
// 	url: 'http://123.207.32.32:8000/home/multidata',
// 	methods: 'get'
// }).then(res => {
// 	console.log(res)
// })

// axios({
// 	// url: 'http://123.207.32.32:8000/home/data?type=pop&page=1',
// 	url: 'http://123.207.32.32:8000/home/data',
// 	// 专门针对get请求的参数拼接
// 	params: {
// 		type: 'pop',
// 		page: 1
// 	}
// }).then(res => {
// 	console.log(res)
// })

// 3. 使用全局配置进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 50  // 毫秒

// // 2. axios发送并发请求
// axios.all([
// 	axios({
// 		url: '/home/multidata'
// 	}), 
// 	axios({
// 		url: '/home/data',
// 		params: {
// 			type: 'sell',
// 			page: 2
// 		}
// 	})
// ]).then(axios.spread((res1, res2) => {
// 	console.log(res1)
// 	console.log(res2)
// }))

// 4. 创建对应axios实例
// const instance1 = axios.create({
// 	baseURL: 'http://123.207.32.32:8000',
// 	timeout: 5000
// })

// instance1({
// 	url: '/home/multidata'
// }).then(res => console.log(res))

// instance1({
// 	url: '/home/data',
// 	params: {
// 		type: 'sell',
// 		page: 2
// 	}
// }).then(res => console.log(res))

// const instance2 = axios.create({
// 	baseURL: 'http://111.222.111.222:8000',
// 	timeout: 5000
// })

import { request } from './api/request'

request({
	url: '/home/multidata',
}).then(res => console.log(res), err => console.log(err))
