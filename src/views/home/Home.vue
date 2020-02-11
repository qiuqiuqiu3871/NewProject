<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:navbar-conter>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll
      :pullUpLoad="true"
      :probeType="3"
      @pullingUp="pullingUp"
      @scroll="scroll"
      ref="scroll"
      class="content"
    >
      <home-swiper :bannerlist="bannerList" />
      <home-recommend :recommends="recommendList" />
      <week-recommend />
      <tag-card
        :titles="['流行', '新款', '精选']"
        @tagClick="tagClick"
        class="tag-card"
      />
      <goods-list :goodslist="showgoods" />
    </scroll>
    <back-top @click.native="backClick" class="back" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TagCard from "components/content/tagcard/TagCard";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backtop/BackTop";

import HomeSwiper from "./childComponents/HomeSwiper";
import HomeRecommend from "./childComponents/HomeRecommend";
import WeekRecommend from "./childComponents/WeekRec";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      bannerList: [],
      recommendList: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodsType: "pop",
      isShow: null
    };
  },
  components: {
    NavBar,
    Scroll,
    TagCard,
    GoodsList,
    BackTop,
    HomeSwiper,
    HomeRecommend,
    WeekRecommend
  },
  created() {
    //获取multidata数据
    this.getHomeMultidata();
    //获取商品data数据
    for (let i in this.goods) {
      this.getHomeGoods(i);
    }
  },
  mounted() {
    // 图片加载刷新
    const refresh = this.debounce(this.$refs.scroll.refresh)
    this.$bus.$on('itemload', () => {
      refresh()
    })
  },
  methods: {
    //防抖函数
    debounce(fnc, wait=200) {
      let timer = null
     return function(...args) {
       if(timer) clearTimeout(timer)
       timer = setTimeout(() => {
         fnc.applay(this,args)
       },wait)
     }
    },
    /**
     * 监听事件相关方法
     **/
    tagClick(index) {
      switch (index) {
        case 0:
          this.goodsType = "pop";
          break;
        case 1:
          this.goodsType = "new";
          break;
        case 2:
          this.goodsType = "sell";
          break;
        default:
          this.goodsType = "pop";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    scroll(position) {
      this.isShow = Math.abs(position.y) > 1000;
    },
    pullingUp() {
      this.getHomeGoods(this.goodsType);
      setTimeout(() => {
        
        
      }, 3000);
    },

    /**
     * 网络数据获取
     **/
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.bannerList = res.data.banner.list;
        this.recommendList = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = parseInt(this.goods[type].page + 1);
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;

        this.$refs.scroll.finishPullUp()
      });
    }
  },
  computed: {
    showgoods() {
      return this.goods[this.goodsType].list;
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: large;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tag-card {
  position: sticky;
  top: 44px;
}
.back {
  position: absolute;
  bottom: 50px;
  right: 10px;
}
</style>
