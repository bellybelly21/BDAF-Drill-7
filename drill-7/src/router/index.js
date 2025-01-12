import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bienvenida from '../views/Bienvenida.vue'
import Administracion from '@/views/Administracion.vue';


const NOTFOUND = ()=> import('../views/NotFound.vue');
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bienvenida',
      component: Bienvenida,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/administracion',
      name: 'administracion',
      component: Administracion,
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NOTFOUND
    },
  ],
})

export default router
