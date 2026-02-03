import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to) => {
  const authUser = useAuthUser()
  await authUser.getSession()
  const isAuthPage = ["/login", "/register"].includes(to.path)
  if (!authUser.user && !isAuthPage) {
    return {
      path: '/login',
    }
  }

  if(authUser.user && isAuthPage){
    return {
      path: '/'
    }
  }
  return true
})

export default router
