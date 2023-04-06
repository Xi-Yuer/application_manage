import { createRouter, createWebHashHistory } from 'vue-router'
import local from '@/utils/cache/index'
import { USER_ACCOUNT } from '@/constant'
import { firstPath } from '@/utils/routes'

const Login = () => import('@/views/login/index.vue')
const Main = () => import('@/views/main/main.vue')
const NotFond = () => import('@/views/404/index.vue')

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFond
    }
  ]
})

router.beforeEach((to, from) => {
  const token = local.getCache(USER_ACCOUNT)?.token
  // 没有权限
  if (to.path != '/login') {
    if (!token) return '/login'
  }
  // 已登录不允许跳转到登录页
  if (to.path === '/login') {
    if (token) {
      return '/main'
    }
  }
  if (to.path === '/main') {
    return firstPath
  }
})

export default router
