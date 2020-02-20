<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <template v-slot:navbar-conter>
        <div>购物车({{ cartList.length }})</div>
      </template>
    </nav-bar>
    <cart-list />
    <cart-bottom />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./childCart/CartList";
import CartBottom from "./childCart/CartBottom";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottom
  },
  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>

<style scoped>
#cart {
  height: 100vh;
  position: relative;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: large;
  z-index: 100;
}
</style>
