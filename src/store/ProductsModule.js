import axios from '@/axios';

const ProductsModule = {
  state: {
    products: [],
    prodcutMessage: null,
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload.products;
    },
    setProductMessage(state, message) {
      state.productMessage = message;
    },
    resetProductMessage(state) {
      state.productMessage = null;
    },
  },
  actions: {
    async loadProducts({ commit }) {
      const res = await axios.get('/products');
      commit('setProducts', { products: res.data.data });
    },
    async updateProduct({ dispatch, commit }, payload) {
      const res = await axios.put(`/products/${payload.id}`, {
        title: payload.title,
        description: payload.description,
        price: payload.price,
        stock: payload.stock,
      });
      console.log(res.data);
      commit('setProductMessage', res.data.message);
      dispatch('loadProducts');
    },
    async newProduct({ dispatch, commit }, product) {
      const res = await axios.post(`/products/create`, product);
      commit('setProductMessage', res.data.message);
      dispatch('loadProducts');
    },
    async deleteProduct({ dispatch, commit }, id) {
      const res = await axios.delete(`/products/${id}`);
      commit('setProductMessage', res.data.message);
      dispatch('loadProducts');
    },
    resetProductMessage({ commit }) {
      commit('resetProductMessage');
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    productMessage(state) {
      return state.productMessage;
    },
    //Specific product
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id == id);
    },
    getProductsByCategory: (state) => (id) => {
      return state.products.filter((product) => product.category_id == id);
    },
    parafarmacia(state) {
      return state.products.filter((product) => {
        return product.category_id === 1;
      });
    },
  },
};

export default ProductsModule;
