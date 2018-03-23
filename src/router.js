import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import home from './pages/home.vue'
import about from './pages/about.vue'
import contact from './pages/contact.vue'
import productList from './pages/productList.vue'
import productDetail from './pages/productDetail.vue'
import tdpreview from './pages/tdpreview.vue'

//告诉 Vue 使用 VueRouter
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/contact',
            component: contact
        },
        {
            path: '/productList',
            component: productList
        },
        {
            path: '/productDetail/:index',
            component: productDetail
        },
        {
            path: '/tdpreview/',
            component: tdpreview
        },
        {
            path: '/',
            component: home
        }
    ]
})