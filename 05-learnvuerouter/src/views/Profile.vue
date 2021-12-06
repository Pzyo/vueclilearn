<template>
	<div>
		<h2>我是Profile组件</h2>
		<!-- 取query参数 -->
		<h2>{{$route.query}}</h2>
		<h2>{{$route.query.name}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'Profile',
		created() {
			console.log('Profile created')
		},
		destroyed() {
			console.log('Profile destroyed')
		},
		activated() {
			console.log('activated')
		},
		deactivated() {
			console.log('deactivated')
		}
	}
</script>

<style>
</style>
