import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import HostServicesView from '@/views/HostServicesView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LoginView
    },

    {
      path: '/planos',
      name: 'planos',
      component: HostServicesView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: RegisterView
    },

    {
      path: '/:catchAll(.*)',
      component: PageNotFoundView
    }
  ]
})

export default router
