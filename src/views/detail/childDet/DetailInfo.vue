<template>
  <div v-if="Object.keys(detailGoods).length !== 0" class="detail-info">
    <div class="info-title">{{ detailGoods.title }}</div>
    <div class="info-price">
      <span>{{ detailGoods.price }}</span>
      <span>{{ detailGoods.oldPrice }}</span>
      <span
        v-show="detailGoods.discountDesc"
        :style="{ backgroundColor: detailGoods.discountBgColor }"
        class="discount"
      >
        {{ detailGoods.discountDesc }}
      </span>
    </div>
    <div class="info-columns">
      <span v-for="item in detailGoods.columns" :key="item">
        {{ item }}
      </span>
    </div>
    <div class="info-services">
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
.detail-info {
  font-size: 14px;
  border-bottom: 5px solid #eee
}
.info-title {
  color: #000;
  font-size: 20;
  padding: 15px 10px;
}
.info-price span:nth-child(1) {
  color: var(--color-high-text);
  font-size: 24px;
  margin: 0 10px;
}
.info-price span:nth-child(2) {
  font-size: 13px;
  text-decoration: line-through;
  margin-right: 5px;
}
.discount {
  color: #fff;
  border-radius: 10px;
  font-size: 12px;
  padding: 2px 5px;
  position: relative;
  top: -10px;
}
.info-columns {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.info-services img {
  width: 13px;
}
.info-services {
  display: flex;
  justify-content: space-around;
  padding: 10px 0
}
</style>
