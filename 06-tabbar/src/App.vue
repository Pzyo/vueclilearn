<template>
  <div id="app">
		<tab-bar>
			<tab-bar-item>
				<img slot="item-icon" src="./assets/img/tabbar/home.svg" >
				<img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" >
				<div slot="item-text">首页</div>
			</tab-bar-item>
			<tab-bar-item>
				<img slot="item-icon" src="./assets/img/tabbar/all.svg" >
				<img slot="item-icon-active" src="./assets/img/tabbar/all_active.svg" >
				<div slot="item-text">分类</div>
			</tab-bar-item>
			<tab-bar-item>
				<img slot="item-icon" src="./assets/img/tabbar/cart-Empty.svg" >
				<img slot="item-icon-active" src="./assets/img/tabbar/cart-Empty_active.svg" >
				<div slot="item-text">购物车</div>
			</tab-bar-item>
			<tab-bar-item>
				<img slot="item-icon" src="./assets/img/tabbar/account.svg" >
				<img slot="item-icon-active" src="./assets/img/tabbar/account_active.svg" >
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</tab-bar>
  </div>
</template>

<script>
	import TabBar from './components/tabbar/TabBar.vue'
	import TabBarItem from './components/tabbar/TabBarItem.vue'
	
	export default {
		name: 'App',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
	@import url("./assets/css/base.css");
</style>
