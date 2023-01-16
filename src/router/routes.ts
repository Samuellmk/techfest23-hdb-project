import { RouteRecordRaw } from 'vue-router';
import HomeLayout from 'src/layouts/HeaderBottomNavLayout.vue';
import PostViewMoreLayout from 'src/layouts/HeaderLayout.vue';
import PostViewMoreComponent from 'src/components/PostViewMoreComponent.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    meta: { requiresAuth: true },
    component: () => HomeLayout,
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      {
        path: 'achievement',
        component: () => import('src/pages/AchievementPage.vue'),
      },
      {
        path: 'redemption',
        name: 'redemption',
        component: () => import('src/pages/PointRedemptionPage.vue'),
      },
      {
        path: 'redeem',
        name: 'redeem',
        component: () => import('src/pages/RedeemPage.vue'),
      },
    ],
  },
  {
    path: '/posts',
    component: PostViewMoreLayout,
    children: [
      {
        path: '/:postId',
        name: 'posts',
        component: () => PostViewMoreComponent,
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/NoLoginLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/LoginPage.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('pages/RegisterPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
