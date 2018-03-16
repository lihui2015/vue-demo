import Vue from 'vue'
import App from './app.vue'

import './assets/styles/test.css'
import './assets/images/bg.jpg'
import './assets/styles/test-stylus.styl'

//引入路由
import router from './router.js'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render:(h) =>h(App)
}).$mount(root)