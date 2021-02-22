import { createStore } from 'vuex';
import AuthModule from './AuthModule';
import ProductsModule from './ProductsModule';
import CategoriesModule from './CategoriesModule';
import CartModule from './CartModule';
import OrdersModule from './OrdersModule';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    AuthModule,
    CategoriesModule,
    ProductsModule,
    CartModule,
    OrdersModule,
  },
});
