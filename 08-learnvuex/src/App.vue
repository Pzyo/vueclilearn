<template>
  <div id="app">
    <h2>---App内容---</h2>
		<h2>{{$store.state.counter}}</h2>
		<button type="button" @click="addition">+</button>
		<button type="button" @click="subtraction">-</button>
		<button type="button" @click="addCounter(5)">+5</button>
		<button type="button" @click="addCounter(10)">+10</button>
		<h2>---HelloVuex内容---</h2>
		<hello-vuex/>
		
		<h2>---App内容: Getters相关信息---</h2>
		<h2>{{$store.getters.powerCounter}}</h2>
		<h2>{{$store.getters.isBig(80)}}</h2>
		
		<h2>---App内容: state中info信息的内容是否响应式---</h2>
		<h2>{{$store.state.info}}</h2>
		<button type="button" @click="updateInfo">更新信息</button>
		
		<h2>---App内容: modules中的内容---</h2>
		<h2>{{$store.state.moduleA.name}}</h2>
		<button type="button" @click="$store.commit('updateName', 'zhangsan')">修改名字</button>
		<h2>{{$store.getters.fullName}}</h2>
		<h2>{{$store.getters.fullName2}}</h2>
		<h2>{{$store.getters.fullName3}}</h2>
		<button type="button" @click="$store.dispatch('aUpdateName')">异步修改名字</button>
  </div>
</template>

<script>
	import HelloVuex from './components/HelloVuex.vue'
	import {INCREMENT} from './store/mutation-types.js'
	
	export default {
		name: 'App',
		components: {
			HelloVuex
		},
		methods: {
			addition() {
				this.$store.commit(INCREMENT)
			},
			subtraction() {
				this.$store.commit('decrement')
			},
			addCounter(num) {
				this.$store.commit({
					type: 'incrementNum',
					num
				})
			},
			updateInfo() {
				// this.$store.commit('updateInfo')
				this.$store
					.dispatch('aupdateInfo', '我是playload')
					.then(res => {
						console.log(res)
					})
			}
		}
	}
</script>

<style>
</style>
