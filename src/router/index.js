import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Store from '@/views/Store.vue'
import Contact from '@/views/Contact.vue'
import ProductDetail from '@/views/SingleProduct.vue'

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
    path: '/contact',
    name: 'contact',
    component : Contact
  },
  {
    path: '/product/:id',
    name: 'product',
    component :ProductDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
