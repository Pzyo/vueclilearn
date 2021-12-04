import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import User from '../views/User.vue'

// 1. 通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 解决非router-link元素路由跳转的报错
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject)
//     return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch((err) => {
//     if (VueRouter.isNavigationFailure(err)) {
//       // resolve err
//       return err
//     }
//     // rethrow error
//     return Promise.reject(err)
//   })
// }

const routes = [
	// 路由关系
	{
		path: '/',
		// 重定向
		redirect: '/home'
	},
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
		children: [
			{
				// 不需要加/
				path: 'news',
				component: () => import('../views/HomeNews.vue')
			},
			{
				path: 'message',
				component: () => import('../views/HomeMessage.vue')
			}
		],
		meta: {
			title: '首页'
		}
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
		meta: {
			title: '关于'
		}
  },
	{
		path: '/user/:userId',
		component: () => import('../views/User.vue')
	},
	{
		path: '/profile',
		component: () => import('../views/Profile.vue')
	}
]

// 2. 创建路由对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
	// 配置路由和组件之间应用关系
  routes,
	linkActiveClass: 'active'
})

// 前置守卫（guard）
router.beforeEach((to, from, next) => {
	// 从from跳转到to
	document.title = to.matched[0].meta.title
	console.log(to)
	next()
})

// 后置钩子（hook）
router.afterEach((to, from) => {
	console.log('---')
})

export default router
