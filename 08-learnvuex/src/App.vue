<template>
  <div id="app">
    <h2>---App内容---</h2>
		<h2>{{$store.state.counter}}</h2>
		<button type="button" @click="addition">+</button>
		<button type="button" @click="subtraction">-</button>
		<h2>---HelloVuex内容---</h2>
		<hello-vuex/>
		
		<h2>---App内容: Getters相关信息---</h2>
		<h2>{{$store.getters.powerCounter}}</h2>
		<h2>{{$store.getters.isBig(80)}}</h2>
  </div>
</template>

<script>
	import HelloVuex from './components/HelloVuex.vue'
	
	export default {
		name: 'App',
		components: {
			HelloVuex
		},
		methods: {
			addition() {
				this.$store.commit('increment')
			},
			subtraction() {
				this.$store.commit('decrement')
			}
		}
	}
</script>

<style>
</style>
