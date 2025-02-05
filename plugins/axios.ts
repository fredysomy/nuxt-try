import axios from 'axios'
export default defineNuxtPlugin((nuxtApp) => {
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:3001',
      withCredentials: true
    })
  
    // Inject axios into nuxt app
    nuxtApp.provide('axios', axiosInstance)
  })