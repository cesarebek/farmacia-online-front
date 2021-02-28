import axios from '@/axios';

const CategoriesModule = {
  state: {
    categories: [],
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload.categories;
    },
  },
  actions: {
    async loadCategories({ commit }) {
      const res = await axios.get('categories');
      commit('setCategories', { categories: res.data.data });
    },
  },
  getters: {
    categories(state) {
      return state.categories;
    },

    getNameCategoryById: (state) => (id) => {
      return state.categories.find((category) => category.id == id);
    },
  },
};

export default CategoriesModule;
