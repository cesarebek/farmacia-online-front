import axios from '@/axios';

const MessagesModule = {
  state: {
    allMessages: [],
    message: null,
  },
  mutations: {
    setAllMessages(state, messages) {
      state.allMessages = messages;
    },
    setContactMessage(state, message) {
      state.message = message;
    },
  },
  actions: {
    async loadMessages({ commit }) {
      const res = await axios.get('/messages');
      commit('setAllMessages', res.data.data);
    },
    async newMessage({ commit }, message) {
      const res = await axios.post('/messages', message);
      commit('setContactMessage', res.data.message);
    },
    async deleteMessage({ commit, dispatch }, id) {
      const res = await axios.delete(`messages/${id}`);
      commit('setContactMessage', res.data.message);
      dispatch('loadMessages');
    },
  },
  getters: {
    allMessages(state) {
      return state.allMessages;
    },
    getMessageById: (state) => (id) => {
      return state.allMessages.find((message) => message.id == id);
    },
  },
};

export default MessagesModule;
