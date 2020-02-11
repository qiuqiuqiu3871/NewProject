import { normalRequest } from './axios-request'


export function getHomeMultidata() {
  return normalRequest({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type, page) {
  return normalRequest({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}