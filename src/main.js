import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from '@/axios';
import './assets/styles/tailwind.css';
import Footer from '@/components/Footer';
import BaseToast from '@/components/UI/BaseToast';

const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$axios = axios;
app.component('base-toast', BaseToast);

app.component('Footer', Footer);
app.mount('#app');
