import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import router from './router/index'  // 当导入的目录时，会自动寻找目录下的index，即index可省略

Vue.config.productionTip = false

new Vue({
	// 3. 挂载路由实例
  router,
  render: h => h(App)
}).$mount('#app')
