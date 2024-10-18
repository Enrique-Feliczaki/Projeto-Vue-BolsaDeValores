import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Acoes from '@/views/Acoes.vue';
import Cripto from '@/views/Cripto.vue';
import Fis from '@/views/Fis.vue';
import Indices from '@/views/Indices.vue';
import Carteira from '@/views/Carteira.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    
    
    {
      path: '/acoes',
      name: 'acoes',
      component: Acoes,
    },
    {
      path: '/cripto',
      name: 'cripto',
      component: Cripto,
    },
    {
      path: '/fis',
      name: 'fis',
      component: Fis,
    },
    {
      path: '/indices',
      name: 'indices',
      component: Indices,
    },
    {
      path: '/carteira',
      name: 'carteira',
      component: Carteira,
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
