import axios from '@/axios';

const MessagesModule = {
  state: {
    allMessages: [],
    contactMessage: null,
  },
  mutations: {
    setAllMessages(state, messages) {
      state.allMessages = messages;
    },
    setContactMessage(state, message) {
      state.contactMessage = message;
    },
    resetContactMessage(state) {
      state.contactMessage = null;
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
    resetContactMessage({ commit }) {
      commit('resetContactMessage');
    },
  },
  getters: {
    allMessages(state) {
      return state.allMessages;
    },
    contactMessage(state) {
      return state.contactMessage;
    },
    getMessageById: (state) => (id) => {
      return state.allMessages.find((message) => message.id == id);
    },
  },
};

export default MessagesModule;
