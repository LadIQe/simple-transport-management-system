import { createRouter, createWebHistory } from 'vue-router'

export enum RouteNames {
  HOME = 'home',
  DETAIL = 'detail',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNames.HOME,
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/order/:id',
      name: RouteNames.DETAIL,
      component: () => import('../views/OrderDetailView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/',
    }
  ],
})

export default router
