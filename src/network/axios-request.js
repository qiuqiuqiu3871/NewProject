import axios from 'axios'


export function normalRequest(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/hy'
  })
  // 2. axios拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // return
  })
  // 2.2响应拦截
  instance.interceptors.response.use(conf => {
    if (conf.status!== 200) {
      spareRequest(config)
    } else {
      return conf.data
    }
  }, err => {
    // return
  })
  // 3. 发送真正的网络请求
  return instance(config)
}
// 备用地址
export function spareRequest(config) {
  const Instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/hy'
  })
  return Instance(config)
}
