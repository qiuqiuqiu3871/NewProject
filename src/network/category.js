import { normalRequest } from './axios-request'

export function getCategoryData() {
  return normalRequest({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return normalRequest({
    url: 'subcategory',
    params:{
      maitKey
    }
  })
}