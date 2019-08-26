import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.77.13:3377',
});

export default api;
