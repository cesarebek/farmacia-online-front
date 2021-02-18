import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import store from '@/store';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { requiresAuth: true },
      component: Home,
    },
    {
      path: '/banco',
      name: 'Banco',
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "login" */ '../views/Banco.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      meta: { requiresUnauth: true },
      component: () =>
        import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      meta: { requiresUnauth: true },
      component: () =>
        import(/* webpackChunkName: "register" */ '../views/Register'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About'),
    },
    {
      path: '/:notFound(.*)',
      component: () => import(/* webpackChunkName: "about" */ '../views/404'),
    },
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isLogged) {
    console.log('Please, login.');
    next('/login');
  } else if (to.meta.requiresUnauth && store.getters.isLogged) {
    console.log('You are already logged in.');
    next(false);
  } else next();
});

export default router;
