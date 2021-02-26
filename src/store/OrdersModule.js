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
    async loadUserOrders({ commit }) {
      const res = await axios.get('/orders/user-orders');
      commit('setOrders', res.data.data);
    },
    async loadAllOrders({ commit }) {
      const res = await axios.get('/orders');
      commit('setAllOrders', res.data.data);
    },
    async deleteOrder({ dispatch }, id) {
      await axios.delete(`orders/${id}`);
      dispatch('loadAllOrders');
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
      return state.allOrders.find((order) => order.id === id);
    },
    getOrderByUserId: (state) => (id) => {
      return state.allOrders.filter((order) => {
        return order.user_id == id;
      });
    },
  },
};

export default OrdersModule;
