import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://api.diag-plus.tk/',
  timeout: 5000,
})

export default customAxios;
