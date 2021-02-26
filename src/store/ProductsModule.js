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
    async updateProduct({ dispatch }, payload) {
      try {
        const res = await axios.put(`/products/${payload.id}`, {
          title: payload.title,
          description: payload.description,
          price: payload.price,
          stock: payload.stock,
        });
        console.log(res.data);
        dispatch('loadProducts');
      } catch (e) {
        console.log(e);
      }
    },
    async newProduct({ dispatch }, product) {
      try {
        const res = await axios.post(`/products/create`, product);
        console.log(res.data.message);
        dispatch('loadProducts');
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    //Specific product
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id == id);
    },
    getProductsByCategory: (state) => (id) => {
      return state.products.find((product) => product.category_id == id);
    },
    parafarmacia(state) {
      return state.products.filter((product) => {
        return product.category_id === 1;
      });
    },
  },
};

export default ProductsModule;
