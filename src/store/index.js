import { createStore } from 'vuex';
import AuthModule from './AuthModule';
import ProductsModule from './ProductsModule';
import CategoriesModule from './CategoriesModule';
import CartModule from './CartModule';
import OrdersModule from './OrdersModule';

const store = createStore({
  modules: {
    AuthModule,
    CategoriesModule,
    ProductsModule,
    CartModule,
    OrdersModule,
  },
});

export default store;
