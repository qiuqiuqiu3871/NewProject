<template>
  <div v-if="Object.keys(detailGoods).length !== 0" class="detaigoods">
    <div class="goods-title">{{ detailGoods.title }}</div>
    <div class="goods-price">
      <span>{{ detailGoods.price }}</span>
      <span>{{ detailGoods.oldPrice }}</span>
      <span
        v-show="detailGoods.discountDesc"
        :style="{ backgroundColor: detailGoods.discountBgColor }"
        class="goods-discount"
      >
        {{ detailGoods.discountDesc }}
      </span>
    </div>
    <div class="goods-columns">
      <span v-for="item in detailGoods.columns" :key="item">
        {{ item }}
      </span>
    </div>
    <div class="goods-services">
      <span v-for="item in detailGoods.services" :key="item.name">
        <img :src="item.icon" alt="" />
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailGoods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.detaigoods {
  font-size: 14px;
  border-bottom: 5px solid #eee
}
.goods-title {
  color: #000;
  font-size: 20;
  padding: 15px 10px;
}
.goods-price span:nth-child(1) {
  color: var(--color-high-text);
  font-size: 24px;
  margin: 0 10px;
}
.goods-price span:nth-child(2) {
  font-size: 13px;
  text-decoration: line-through;
  margin-right: 5px;
}
.goods-discount {
  color: #fff;
  border-radius: 10px;
  font-size: 12px;
  padding: 2px 5px;
  position: relative;
  top: -10px;
}
.goods-columns {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.goods-services img {
  width: 13px;
}
.goods-services {
  display: flex;
  justify-content: space-around;
  padding: 10px 0
}
</style>
