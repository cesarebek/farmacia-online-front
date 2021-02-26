import axios from '@/axios.js';

const OrdersModule = {
  state: {
    orders: [],
    allOrders: [],
  },
  mutations: {
    setOrders(state, orders) {
      state.orders = orders;
    },
    setAllOrders(state, orders) {
      state.allOrders = orders;
    },
  },
  actions: {
    loadUserOrders({ commit }, orders) {
      commit('setOrders', orders);
    },
    async loadAllOrders({ commit }) {
      const res = await axios.get('/orders');
      console.log(res);
      commit('setAllOrders', res.data.data);
    },
  },
  getters: {
    orders(state) {
      return state.orders;
    },
    allOrders(state) {
      return state.allOrders;
    },
    getOrderById: (state) => (id) => {
      return state.allOrders.find((order) => order.id == id);
    },
  },
};

export default OrdersModule;
