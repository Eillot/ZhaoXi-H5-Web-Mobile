import { createRouter, createWebHistory } from 'vue-router'

/**
 * 路由使用步骤：
 * 1. 创建路由规则
 * 2.创建路由实例
 * 3.创建接入组件
 * 4.制定路由出口
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')

    }
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
