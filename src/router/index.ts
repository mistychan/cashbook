import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { public: true }
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/home/index.vue'),
    children: [
      {path:'/index/',name:'homePage',component: () => import('@/views/home/homePage.vue')},
      { path: '/index/bill', name: 'BillList', component: () => import('@/views/billList/index.vue') }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
