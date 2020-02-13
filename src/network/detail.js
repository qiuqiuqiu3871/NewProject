import { normalRequest } from './axios-request'

 export function getDetail(iid) {
   return normalRequest({
     url: '/detail',
     params: {
       iid
     }
   })
 }
 
 export class Goods {
   constructor(itemInfo, columns, services) {
     this.title = itemInfo.title,
     this.discountBgColor = itemInfo.discountBgColor,
     this.discountDesc = itemInfo.discountDesc
     this.price = itemInfo.price
     this.oldPrice = itemInfo.oldPrice
     this.columns = columns,
     this.services = services
   }
 }

 export class Shop {
   constructor(shopInfo) {
     this.logo = shopInfo.shopLogo,
     this.name = shopInfo.name,
     this.cFans = shopInfo.cFans,
     this.cGoods = shopInfo.cGoods,
     this.cSells = (shopInfo.cSells/10000).toFixed(1),
     this.score = shopInfo.score
   }
 }