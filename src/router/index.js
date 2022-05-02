import { createRouter, createWebHistory } from 'vue-router'
import PHome from '@/components/Page/PHome'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PHome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
