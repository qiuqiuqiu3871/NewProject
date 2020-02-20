<template>
  <div class="detail">
    <detail-bar @barClick="barClick" ref="bar" />
    <scroll class="countent" ref="scroll" :probeType="3" @scroll="detailScroll">
      <!-- <div>{{$store.state.cartlist}}</div> -->
      <detail-swiper :topImages="topImages" />
      <detail-goods :detailGoods="detailGoods" />
      <detail-shop :detailShop="detailShop" />
      <detail-info :detailInfo="detailInfo" @infoimgLoad="infoimgLoad" />
      <detail-params :detail-params="detailParams" ref="params" />
      <detail-rate :detail-rate="detailRate" ref="rate" />
      <detail-recommend :detail-recommend="detailRecommend" ref="recommend" />
    </scroll>
    <detail-bottom  class="detail-bottom" @addToCart='addToCart' />
    <back-top @click.native="backClick" class="back" v-show="isShow" />
  </div>
</template>

<script>
import DetailBar from "./childDet/DetailBar";
import DetailSwiper from "./childDet/DetailSwiper";
import DetailGoods from "./childDet/DetailGoods";
import DetailShop from "./childDet/DetailShop";
import DetailInfo from "./childDet/DetailInfo";
import DetailParams from "./childDet/DetailParams";
import DetailRate from "./childDet/DetailRate";
import DetailRecommend from "./childDet/DetailRecommend";
import DetailBottom from "./childDet/DetailBottom";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop, Info, getRecommend } from "network/detail";

import { debounce } from "common/utils/debounce";
import { backTopMiXin } from "common/utils/backTop";

import {mapActions} from 'vuex'

export default {
  name: "Detail",
  data() {
    return {
      iid: 0,
      topImages: [],
      detailGoods: {},
      detailShop: {},
      detailInfo: {},
      detailParams: {},
      detailRate: {},
      detailRecommend: {},
      barCoutent: [],
      getimgLoad: null,
      countIndex: 0
    };
  },
  components: {
    DetailBar,
    DetailSwiper,
    DetailGoods,
    DetailShop,
    DetailInfo,
    DetailParams,
    DetailRate,
    DetailRecommend,
    DetailBottom,
    Scroll,
  },
  mixins: [backTopMiXin],
  created() {
    this.iid = this.$route.query.iid;
    //获取detail数据
    this.getDetail(this.iid);

    // 获取Recommend数据
    this.getRecommend();

    //优化
    this.getimgLoad = debounce(() => {
      this.barCoutent = [];
      this.barCoutent.push(0);
      this.barCoutent.push(this.$refs.params.$el.offsetTop);
      this.barCoutent.push(this.$refs.rate.$el.offsetTop);
      this.barCoutent.push(this.$refs.recommend.$el.offsetTop);
      this.barCoutent.push(Number.MAX_VALUE);
    }, 1000);
  },
  methods: {
    ...mapActions(['addCart']),
    /*
    事件监听相关方法
    **/
    infoimgLoad() {
      this.$refs.scroll.refresh();
      //利用防抖函数减少图片持续加载
      this.getimgLoad();
    },
    barClick(index) {
      this.$refs.scroll.scrollTo(0, -this.barCoutent[index], 200);
    },
    detailScroll(position) {
      let positionY = Math.abs(position.y);
      for (let i = 0; i < this.barCoutent.length - 1; i++) {
        if (
          this.countIndex !== i &&
          (positionY > this.barCoutent[i] && positionY < this.barCoutent[i + 1])
        ) {
          this.$refs.bar.count = this.countIndex = i;
        }
      }
      // 显示backTop
      this.isShow = Math.abs(position.y) > 1000;
    },
    addToCart() {
      const cart = {}
      cart.image = this.topImages[0]
      cart.title = this.detailGoods.title
      cart.desc = this.detailGoods.desc
      cart.price = this.detailGoods.lowNowPrice
      cart.iid = this.iid
      this.addCart(cart).then(res => {
        this.$toast.show(res)
      })
      // console.log(cart)
    },

    /*
    网络请求
    */
    getDetail(iid) {
      getDetail(iid).then(res => {
        const data = res.result;
        // 获取所有数据进行转换
        const columns = data.columns;
        const services = data.shopInfo.services;
        columns[2] = services[services.length - 1].name;
        services.splice(services.length - 1, 1);

        // 1.商品轮播图片
        this.topImages = data.itemInfo.topImages;

        // 2. 获取商品基本信息
        this.detailGoods = new Goods(data.itemInfo, columns, services);

        // 3. 获取店铺及评价信息
        this.detailShop = new Shop(data.shopInfo);

        // 4.获取商品展示信息
        this.detailInfo = new Info(data.detailInfo);

        // 5.获取商品参数信息
        this.detailParams = data.itemParams;

        // 6.获取买家评论信息
        this.detailRate = data.rate;
      });
    },
    getRecommend() {
      getRecommend().then(res => {
        this.detailRecommend = res.data;
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
.detail-bottom {
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #fff;
  z-index: 1000;
}
.back {
  position: absolute;
  bottom: 50px;
  right: 10px;
}
</style>
