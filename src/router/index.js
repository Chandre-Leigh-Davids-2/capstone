import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Store from '@/views/Store.vue'
import Sale from '@/views/Sale.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component : AboutView
  },
  {
    path: '/store',
    name: 'store',
    component : Store
  },
  {
    path: '/sale',
    name: 'sale',
    component : Sale
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
