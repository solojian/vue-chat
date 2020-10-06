import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },{
        path: '/login',
        component: () => import('../pages/login.vue')
    },{
        path: '/register',
        component: () => import('../pages/Register.vue')
    },{
        path: '/home',
        component: () => import('../pages/Home'),
        children: [
            {
                path: '/home/chats',
                component: () => import('../pages/Home/chat.vue')
            },{
                path: '/home/chatlist',
                component: () => import('../pages/Home/chatlist.vue')
            },{
                path: '/home/userlist',
                component: () => import('../pages/Home/Userlist.vue')
            },{
                path: '',
                redirect: '/home/chatlist'
            }
        ]
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