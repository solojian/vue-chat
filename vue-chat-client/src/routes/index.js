import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
    },{
        path: '/chat',
        component: () => import('../pages/chat.vue')
    },{
        path: '/chatlist',
        component: () => import('../pages/chatlist.vue')
    },{
        path: '/login',
        component: () => import('../pages/login.vue')
    },{
        path: '/register',
        component: () => import('../pages/Register.vue')
    }
]
export default new Router({
    routes
})