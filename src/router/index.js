import { createRouter, createWebHistory } from 'vue-router'
import PerfilView from '../views/PerfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'perfil',
      component: PerfilView
    },
    {
      path: '/vacantes',
      name: 'vacantes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VacantesView.vue')
    }
  ]
})

export default router
