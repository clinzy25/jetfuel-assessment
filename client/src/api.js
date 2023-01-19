import axios from 'axios'

const env = process.env.NODE_ENV

const api = axios.create({
  baseURL: env === 'production' ? '' : 'http://localhost:3001',
  withCredentials: true,
})

export default api
9