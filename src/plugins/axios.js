import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '../store'
// import router from '../router'


const API_URL = 'http://irp.pww.mybluehost.me/api/'
// const API_URL = 'http://localhost:8081/api/'

const plainAxiosInstance = axios.create({
  baseURL: API_URL
})

const securedAxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

securedAxiosInstance.interceptors.request.use(config => {
  const method = config.method.toUpperCase()
  if (method !== 'OPTIONS' && method !== 'GET') {
    config.headers = {
      ...config.headers
    }
  }
  return config
})

securedAxiosInstance.interceptors.response.use(null, error => {
  if (error.response && error.response.config && error.response.status === 401) {
    store.commit('unsetCurrentUser')
    // router.push({ name: 'signin' })
    window.location.href = '/dev.alisifirststep/login'
  } else {
    return Promise.reject(error)
  }
})

plainAxiosInstance.interceptors.response.use(null, error => {
  if (error.response && error.response.config && error.response.status === 401) {
    store.commit('unsetCurrentUser')
    // router.push({ name: 'signin' })
    window.location.href = '/dev.alisifirststep/login'
  } else {
    return Promise.reject(error)
  }
})


Vue.use(VueAxios, { plain: plainAxiosInstance, secured: securedAxiosInstance })
