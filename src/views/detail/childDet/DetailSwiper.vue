<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in topImages" :key="item" class="swiper-item">
      <img :src="item" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from "vant";

export default {
  name: "DetailSwiper",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.my-swipe {
  height: 300px;
  overflow: hidden;
}
.swiper-item img {
  width: 100%;
}
</style>
