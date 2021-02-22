import axios from '@/axios';

const ProductsModule = {
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload.products;
    },
  },
  actions: {
    async loadProducts({ commit }) {
      const res = await axios.get('/products');
      console.log(res.data);
      commit('setProducts', { products: res.data.data });
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    //Specific product
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
    getProductsByCategory: (state) => (id) => {
      return state.products.filter((product) => product.category_id == id);
    },
    // Products by category
    parafarmacia(state) {
      return state.products.filter((product) => {
        return product.category_id === 1;
      });
    },
  },
};

export default ProductsModule;
