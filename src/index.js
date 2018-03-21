import Vue from 'vue'
import App from './app.vue'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import './assets/styles/reset.css'
import './assets/images/bar.jpg'
import './assets/images/01.png'
import './assets/images/02.png'
import './assets/images/03.png'
import './assets/images/04.png'
import './assets/styles/commen.css'

//引入路由
import router from './router.js'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})