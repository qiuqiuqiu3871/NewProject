<template>
  <scroll class="cart-list" ref="cartScroll">
    <div class="contenter">
      <cart-list-item
        v-for="item in cartList"
        :key="item.iid"
        :cart-item="item"
      />
      <div v-if="cartList.length == 0" class="empty">
        购物车竟然是空的
        <p>去逛逛</p>
      </div>
    </div>
  </scroll>
</template>

<script>
import CartListItem from "./CartListItem";

import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  name: "CartContent",
  components: {
    CartListItem,
    Scroll
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  beforeUpdate() {
    this.$refs.cartScroll.refresh();
  }
};
</script>
<style scoped>
.cart-list {
  width: 100%;
  font-size: 14px;
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.contenter {
  padding-bottom: 10px;
}
.empty {
  font-size: 18px;
  text-align: center;
  padding: 40px;
  color: var(--color-high-text);
}
.empty p {
  width: 60px;
  padding: 5px;
  margin: 10px auto;
  border-radius: 5px;
  font-size: 14px;
  background-color: #e0882f;
  color: #fff;
}
</style>
