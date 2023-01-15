import { RouteRecordRaw } from 'vue-router';
import HomeLayout from 'src/layouts/MainLayout_Bottom.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => HomeLayout,
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
