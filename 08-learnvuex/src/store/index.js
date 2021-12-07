import Vue from "vue"
import Vuex from "vuex"

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
	state: {
		counter: 100
	},
	mutations: {
		// 方法
		// state会自动传入
		increment(state) {
			state.counter++
		},
		decrement(state) {
			state.counter--
		}
	},
	actions: {},
	getters: {
		powerCounter(state) {
			return state.counter * state.counter
		},
		isBig(state, getter) {
			return num => state.counter > num
		}
	},
	modules: {}
})

// 3. 导出
export default store