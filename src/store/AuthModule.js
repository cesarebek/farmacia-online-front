import axios from '@/axios';

const AuthModule = {
  state: {
    user: null,
    token: null,
    allUsers: [],
    userMessage: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
      state.userMessage = payload.message;
    },
    setAllUsers(state, users) {
      state.allUsers = users;
    },
    resetUserMessage(state) {
      state.userMessage = null;
    },
  },
  actions: {
    //Sign in
    async login({ commit, getters }, payload) {
      const res = await axios.post('/login', {
        email: payload.email,
        password: payload.password,
      });
      console.log(res);
      commit('setUser', {
        user: res.data.data,
        token: res.data.token,
        message: res.data.message,
      });
      localStorage.setItem('access_token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.data));
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + getters.token;
    },
    //Sign up
    async register({ commit, getters }, payload) {
      const res = await axios.post('/register', {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });
      console.log(res);
      commit('setUser', {
        user: res.data.data,
        token: res.data.token,
        message: res.data.message,
      });
      localStorage.setItem('access_token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.data));
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + getters.token;
    },
    //Auto login
    tryLogin({ commit, getters }) {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = localStorage.getItem('access_token');
      commit('setUser', {
        user: user,
        token: token,
      });
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + getters.token;
    },
    //Logout
    logout({ commit }) {
      commit('setUser', {
        user: null,
        token: null,
      });
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
      console.log('User logged-out!');
    },
    async loadAllUsers({ commit, getters }) {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + getters.token;
      const res = await axios.get('users');
      commit('setAllUsers', res.data.data);
    },
    resetUserMessage({ commit }) {
      commit('resetUserMessage');
    },
  },
  getters: {
    isLogged(state) {
      return !!state.token;
    },
    user(state) {
      return state.user;
    },
    allUsers(state) {
      return state.allUsers;
    },
    token(state) {
      return state.token;
    },
    userMessage(state) {
      return state.userMessage;
    },
    getUserById: (state) => (id) => {
      return state.allUsers.find((user) => user.id == id);
    },
  },
};

export default AuthModule;
