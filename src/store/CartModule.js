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
    incrementItemQuantity(state, cartItem) {
      console.log('increment item quantity');
      const item = state.cart.find((item) => item.id == cartItem.id);
      item.quantity++;
      // cartItem.quantity++;
    },
    decrementItemQuantity(state, cartItem) {
      console.log('decrement item quantity');
      const item = state.cart.find((item) => item.id === cartItem.id);
      item.quantity--;
    },
    removeItemFromCart(state, cartItem) {
      console.log('decrement item quantity');
      state.cart.splice(cartItem.index, 1);
    },
  },
  actions: {
    addProductToCart({ getters, commit }, product) {
      if (product.stock > 0) {
        const cartItem = getters.cartProducts.find(
          (item) => item.id === product.id
        );
        if (!cartItem) {
          commit('pushProductToCart', product);
        } else {
          commit('incrementItemQuantity', product);
        }
      }
    },
    removeProductFromCart({ commit }, product) {
      if (product.quantity > 1) {
        commit('decrementItemQuantity', product);
      } else {
        commit('removeItemFromCart', product);
      }
    },
    deleteProductFromCart({ commit }, product) {
      commit('removeItemFromCart', product);
    },
  },
  getters: {
    cartProducts(state) {
      return state.cart;
    },
    cartAmount(state) {
      let total = 0;
      state.cart.forEach((product) => {
        total += product.price * product.quantity;
      });
      return total;
    },
    itemsCounter(state) {
      let counter = state.cart.length;
      return counter;
    },
  },
};

export default CategoriesModule;
