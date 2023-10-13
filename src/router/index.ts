import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/randomizer',
      name: 'randomizer (visible)',
      component: () => import('@/views/RandomizerView.vue')
    },
    {
      path: '/randomizer-hidden',
      name: 'randomizer (hidden)',
      component: () => import('@/views/HiddenRandomizerView.vue')
    },
    {
      path: '/draft-solo',
      name: 'draft (solo)',
      component: () => import('@/views/SoloDraftView.vue')
    },
    {
      path: '/draft-double',
      name: 'draft (double)',
      component: () => import('@/views/DoubleDraftView.vue')
    }
  ]
});

export default router;
