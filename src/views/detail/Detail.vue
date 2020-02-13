<template>
  <div class="detail">
    <detail-bar />
    <scroll :pullUpLoad="true" :probeType="3" class="countent">
      <detail-swiper :topImages="topImages" />
      <detail-info :detailGoods="detailGoods" />
      <detail-shop :detailShop="detailShop" />
    </scroll>
  </div>
</template>

<script>
import DetailBar from "./childDet/DetailBar";
import DetailSwiper from "./childDet/DetailSwiper";
import DetailInfo from "./childDet/DetailInfo";
import DetailShop from "./childDet/DetailShop";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: 0,
      topImages: [],
      detailGoods: {},
      detailShop: {}
    };
  },
  created() {
    this.iid = this.$route.query.iid;
    //获取detail数据
    this.getDetail(this.iid);
  },
  components: {
    DetailBar,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    Scroll
  },
  methods: {
    /*
    事件监听相关方法
    **/

    /*
    网络请求
    */
    getDetail(iid) {
      getDetail(iid).then(res => {
        const data = res.result;
        console.log(data);
        const columns = data.columns;
        const services = data.shopInfo.services;
        columns[2] = services[services.length - 1].name;
        services.splice(services.length - 1, 1);
        this.topImages = data.itemInfo.topImages;
        this.detailGoods = new Goods(data.itemInfo, columns, services);
        this.detailShop = new Shop(data.shopInfo);
      });
    }
  }
};
</script>
<style scoped>
.detail {
  height: 100vh;
  position: relative;
}
.countent {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
