import { createWebHistory, createRouter } from 'vue-router';
import InertView from '../views/InertView.vue';
import ContainerView from '../views/ContainerView.vue';

const routes = [
  {
    path: '/',
    name: '@Container',
    component: ContainerView,
  },
  {
    path: '/inert',
    name: 'Inert',
    component: InertView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
