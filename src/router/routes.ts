import Home from '../views/Home.vue'
import About from '../views/About.vue'
import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/base-64', component: () => import('../views/Base64.vue') },
]