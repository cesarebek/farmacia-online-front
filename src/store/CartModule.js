// import axios from '@/axios';

const CategoriesModule = {
  state: {
    cart: [],
  },
  mutations: {
    pushProductToCart(state, product) {
      console.log('push product to cart');
      state.cart.push(product);
    },
    incrementItemQuantity(cartItem) {
      console.log('increment item quantity');
      cartItem.quantity++;
    },
    decrementItemQuantity(cartItem) {
      console.log('decrement item quantity');
      cartItem.quantity--;
    },
  },
  actions: {
    addProductToCart({ state, commit }, product) {
      if (!product.stock > 0) {
        const cartItem = state.cart.find((item) => item.id === product.id);
        if (!cartItem) {
          commit('pushProductToCart', product);
        } else {
          commit('incrementItemQuantity', cartItem);
        }
      }
    },
  },
  getters: {
    cartProducts(state) {
      return state.cart;
    },
  },
};

export default CategoriesModule;
