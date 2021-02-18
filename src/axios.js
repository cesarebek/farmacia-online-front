import axios from 'axios';

const API_URL = process.env.VUE_APP_API_BaseURL;
const token = localStorage.getItem('access_token');

export default axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
