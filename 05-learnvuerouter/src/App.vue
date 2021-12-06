<template>
  <div id="app">
		<!-- <router-link to="/home" tag="button" replace active-class="active">Home</router-link> |
		<router-link to="/about" tag="button" replace active-class="active">About</router-link> -->
		<button type="button" @click="homeClick">首页</button>
		<button type="button" @click="aboutClick">关于</button> 
		<router-link :to="'/user/'+userId">用户</router-link>
		<!-- <router-link to="/profile">档案</router-link> -->
		<!-- <router-link :to="{
			path: '/profile',
			query: {name: 'pzyo', age: 23, height: 170}
		}">档案</router-link> -->
		
		<!-- <button type="button" @click="userClick">用户</button> -->
		<button type="button" @click="profileClick">档案</button>
		
		<keep-alive exclude="Profile">
			<router-view/>
		</keep-alive>
		
  </div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			userId: 'zhangsan'
		}
	},
	methods: {
		// 通过代码的方式修改路由 vue-router
		homeClick() {
			// $router属性是vue-router实例自动传入的
			// this.$router.push('/home')
			this.$router.replace('/home').catch(err => Error)
		},
		aboutClick() {
			this.$router.push('/about')
		},
		// userClick() {
		// 	this.$router.push('/user/' + this.userId)
		// },
		profileClick() {
			this.$router.push({
				path: '/profile',
				query: {
					name: 'pzyo',
					age: 23,
					height: 170
				}
			})
		}
	}
}
</script>

<style>
</style>
