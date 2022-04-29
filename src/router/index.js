import { createRouter, createWebHistory } from 'vue-router'
import PHome from '@/components/Page/PHome'
import PAbout from '@/components/Page/PAbout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PHome
  },
  {
    path:'/about',
    component: PAbout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
