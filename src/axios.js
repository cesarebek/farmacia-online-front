import axios from 'axios';

const API_URL = process.env.VUE_APP_API_BaseURL;

export default axios.create({
  baseURL: API_URL,
});
// 'Content-Type': 'multipart/form-data',
