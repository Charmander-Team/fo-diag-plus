import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://api.diag-plus.tk/',
    timeout: 5000,
  })

export default Api