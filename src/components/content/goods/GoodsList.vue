<template>
  <div class="goodslist">
    <goods-list-item
      v-for="item in goodslist"
      :key="item.shopid"
      :goodslistitem="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goodslist: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}
</style>
