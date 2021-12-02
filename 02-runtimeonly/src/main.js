import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

console.log(App)

new Vue({
  el: '#app',
  render: h => h(App)
})
