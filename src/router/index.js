import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import store from '@/store';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/shop',
      name: 'Shop',
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
    },
    {
      path: '/order-completed',
      name: 'OrderCompleted',
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "shop" */ '../views/OrderCompleted.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () =>
        import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
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
      path: '/cart',
      name: 'Cart',
      component: () => import(/* webpackChunkName: "cart" */ '../views/Cart'),
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
