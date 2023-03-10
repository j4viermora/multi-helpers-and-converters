import Home from '../views/Home.vue'
import ListConverters from '../views/ListConverters.vue'
import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/about', component: ListConverters },
    { path: '/base-64', component: () => import('../views/Base64.vue') },
]