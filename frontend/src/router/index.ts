import { createRouter, createWebHistory } from 'vue-router'

export enum RouteNames {
  CREATE = 'create',
  LIST = 'list',
  DETAIL = 'detail',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layout/TheMainLayout.vue'),
      children: [
        {
          path: '',
          name: RouteNames.LIST,
          component: () => import('../views/ListView.vue'),
        },
        {
          path: '/create',
          name: RouteNames.CREATE,
          component: () => import('../views/CreateOrderView.vue')
        },
        {
          path: '/order/:id',
          name: RouteNames.DETAIL,
          component: () => import('../views/OrderDetailView.vue')
        },
      ]
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/',
    }
  ],
})

export default router
