import { RouteRecordRaw } from 'vue-router';
import HomeLayout from 'src/layouts/HeaderBottomNavLayout.vue';
import PostViewMoreLayout from 'src/layouts/HeaderLayout.vue';
import PostViewMoreComponent from 'src/components/PostViewMoreComponent.vue';

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: PostViewMoreLayout,
  //   children: [{ path: '', component: () => PostViewMoreComponent }],
  // },

  {
    path: '/',
    component: () => HomeLayout,
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      {
        path: 'achievement',
        component: () => import('src/layouts/AchievementLayout.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/NoLoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
