import Vue from 'vue'
import App from './app.vue'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import './assets/styles/reset.css'
import './assets/styles/commen.css'

//引入路由
import router from './router.js'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})