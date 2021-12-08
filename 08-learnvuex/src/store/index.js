import Vue from "vue"
import Vuex from "vuex"

import {INCREMENT} from './mutation-types.js'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const moduleA = {
	state: {
		name: 'moduleAsss'
	},
	mutations: {
		updateName(state, playload) {
			state.name = playload
		}
	},
	getters: {
		fullName(state) {
			return state.name + '111'
		},
		fullName2(state, getters) {
			return getters.fullName + '222'
		},
		// 模块的getters支持传入三个参数
		// state：该模块的state
		// getters：该模块的getters
		// rootState：根模块的state
		fullName3(state, getters, rootState) {
			return getters.fullName2 + rootState.counter
		}
	},
	actions: {
		// context是一个对象，里面不仅包含本模块的state等信息，还包含rootState等信息
		// aUpdateName(context) {
		// 	console.log(context)
		// 	setTimeout(() => context.commit('updateName', 'wangwu'), 1000)
		// }
		aUpdateName({commit}) {
			// console.log(context)
			setTimeout(() => commit('updateName', 'wangwu'), 1000)
		}
	}
}

const store = new Vuex.Store({
	state: {
		counter: 100,
		info: {
			name: 'pzyo',
			age: 24,
			height: 170
		}
	},
	mutations: {
		// 方法
		// state会自动传入
		[INCREMENT](state) {
			state.counter++
		},
		decrement(state) {
			state.counter--
		},
		incrementNum(state, playload) {
			state.counter += playload.num
		},
		updateInfo(state) {
			// 非响应式
			// state.info['addr'] = 'China'
			// delete state.info.age
			
			// 响应式
			// Vue.set(state.info, 'addr', 'China')  // 新增
			// Vue.delete(state.info, 'age')  // 删除
			
			// 错误：不能使用异步操作
			// setTimeout(() => {
			// 	state.info.name = 'tomas'
			// }, 1000)
			state.info.name = 'tomas'
		}
	},
	actions: {
		// context：上下文
		aupdateInfo(context, playload) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					context.commit('updateInfo')
					resolve(playload)
				}, 1000)
			})
		}
	},
	getters: {
		powerCounter(state) {
			return state.counter * state.counter
		},
		isBig(state, getter) {
			return num => state.counter > num
		}
	},
	modules: {
		moduleA
	}
})

// 3. 导出
export default store
