<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item
      v-for="item in bannerlist"
      :key="item.title"
      class="swiper-item"
    >
      <a :href="item.link" >
        <img :src="item.image" alt="" @load="swiperimg" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from "vant";

export default {
  name: "HomeSwiper",
  props: {
    bannerlist: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  methods: {
    swiperimg() {
      if (!this.isLoad) {
        this.$emit("swiperimg");
        this.isLoad = true;
      }
    }
  }
};
</script>
<style scoped>
.my-swipe img {
  width: 100%;
  line-height: 200px;
}
</style>
