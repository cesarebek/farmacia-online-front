// import axios from '@/axios';

const CategoriesModule = {
  state: {
    cart: [],
    cartMessage: null,
  },
  mutations: {
    pushProductToCart(state, product) {
      console.log('push product to cart');
      state.cart.push(product);
      state.cartMessage = 'Prodotto aggiunto al carrello.';
    },
    incrementItemQuantity(state, cartItem) {
      console.log('increment item quantity');
      const item = state.cart.find((item) => item.id == cartItem.id);
      item.quantity++;
      state.cartMessage = 'Prodotto aggiunto di nuovo al carrello.';
    },
    decrementItemQuantity(state, cartItem) {
      console.log('decrement item quantity');
      const item = state.cart.find((item) => item.id === cartItem.id);
      item.quantity--;
      state.cartMessage = 'Quantità del prodotto nel carrello diminuita.';
    },
    removeItemFromCart(state, cartItem) {
      console.log('decrement item quantity');
      state.cart.splice(cartItem.index, 1);
      state.cartMessage = 'Prodotto rimosso dal carrello.';
    },
    resetCart(state) {
      console.log('cart resetted');
      state.cart = [];
    },
    resetCartMessage(state) {
      state.cartMessage = null;
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
    resetCart({ commit }) {
      commit('resetCart');
    },
    resetCartMessage({ commit }) {
      commit('resetCartMessage');
    },
  },
  getters: {
    cartProducts(state) {
      return state.cart;
    },
    cartMessage(state) {
      return state.cartMessage;
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
