import Vue from 'vue'
import App from './App.vue'
// import socket from './socketIO/test'
import router from './routes/index'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
