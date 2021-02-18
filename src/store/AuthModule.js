import axios from '@/axios';
import router from '@/router';

const AuthModule = {
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
    },
  },
  actions: {
    //Sign in
    async login({ commit }, payload) {
      const res = await axios.post('/login', {
        email: payload.email,
        password: payload.password,
      });
      console.log(res);
      commit('setUser', { user: res.data.data, token: res.data.token });
      localStorage.setItem('access_token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.data));
      router.replace('/');
    },
    //Sign up
    async register({ commit }, payload) {
      const res = await axios.post('/register', {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });
      console.log(res);
      commit('setUser', { user: res.data.data, token: res.data.token });
      localStorage.setItem('access_token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.data));
    },
    //Auto login
    tryLogin({ commit }) {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('access_token');
      commit('setUser', {
        user: user,
        token: token,
      });
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
  },
  getters: {
    isAdmin(state) {
      return state.user.roles[0].name;
    },
    isLogged(state) {
      return !!state.token;
    },
    user(state) {
      return state.user;
    },
  },
};

export default AuthModule;
