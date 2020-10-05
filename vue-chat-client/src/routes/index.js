import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
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
 const router = new Router({
    routes
})
// router.beforeEach((to,from,next) => {
//     if(to.path == '/login' || to.path == '/register') {
//         if(!document.cookie.userid) {
//             next()
//         } else {
//             next('/chatlist')
//         }
//     }
// })
export default router