import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const catchAllRoute = {
  path: '/:catchAll(.*)',
  component: () => import('@/pages/tasks/[...catchAll].vue'),
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, catchAllRoute],
})

export default router
