<template>
  <div class="goods-list-item" @click="itemClick(goodslistitem.iid)">
    <img :src="goodslistitem.show.img" alt="" @load="itemload" />
    <div class="goods-info">
      <p>{{ goodslistitem.title }}</p>
      <span class="price"> ¥{{ goodslistitem.price }} </span>
      <span class="collect"> {{ goodslistitem.cfav }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodslistitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    itemload() {
      this.$bus.$emit('itemload')
    },
    itemClick(iid) {
      this.$router.push({path: 'detail', query: {iid: iid}})
    }
  },
};
</script>
<style scoped>

.goods-list-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  font-size: 14px;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  margin-bottom: 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-info .price {
  color: #ff5777;
  margin-right: 30px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  position: absolute;
  top: 0;
  left: -15px;
  width: 14px;
  height: 14px;
  content: "";
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
