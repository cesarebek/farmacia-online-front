import axios from '@/axios';

const OrdersModule = {
  state: {
    orders: [],
  },
  mutations: {
    setOrders(state, payload) {
      state.orders = payload.orders;
    },
  },
  actions: {
    async loadOrders({ commit }) {
      const res = await axios.get('/orders/user-orders');
      commit('setOrders', { orders: res.data.data });
      console.log(res.data.data);
    },
  },
  getters: {
    orders(state) {
      return state.orders;
    },
  },
};

export default OrdersModule;
