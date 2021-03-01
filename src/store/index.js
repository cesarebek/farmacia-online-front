import { createStore } from 'vuex';
import AuthModule from './AuthModule';
import ProductsModule from './ProductsModule';
import CategoriesModule from './CategoriesModule';
import CartModule from './CartModule';
import OrdersModule from './OrdersModule';
import MessagesModule from './MessagesModule';

const store = createStore({
  modules: {
    AuthModule,
    CategoriesModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    MessagesModule,
  },
});

export default store;
