<template>
  <van-swipe-cell>
    <div class="cart-item">
      <check-button
        class="cart-check"
        @click.native="checkClick"
        :is-checked="cartItem.checked"
        v-model="cartItem.checked"
      />
      <div class="item-img">
        <img :src="cartItem.image" alt="" />
      </div>
      <div class="item-content">
        <div class="title">{{ cartItem.title }}</div>
        <div class="desc">{{ cartItem.desc }}</div>
        <div>
          <span class="price">¥{{ cartItem.price }}</span>
          <span class="count">
            <button :disabled="cartItem.count == 1" @click="sub">-</button>
            <span>{{ cartItem.count }}</span>
            <button @click="add">+</button>
          </span>
        </div>
      </div>
    </div>
    <van-button
      slot="right"
      square
      text="删除"
      type="danger"
      class="delete-button"
      @click="del"
    />
  </van-swipe-cell>
</template>

<script>
import { SwipeCell, Button } from "vant";

import CheckButton from "components/content/checkbutton/CheckButton";

export default {
  name: "CartListcartItem",
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    [SwipeCell.name]: SwipeCell,
    [Button.name]: Button,
    CheckButton
  },
  methods: {
    checkClick() {
      this.cartItem.checked = !this.cartItem.checked;
      localStorage.setItem(
        "cartlist",
        JSON.stringify(this.$store.state.cartlist)
      );
    },
    sub() {
      this.cartItem.count--;
    },
    add() {
      this.cartItem.count++;
    },
    del(){
      this.$store.dispatch('delCart', this.cartItem.iid)
    }
  }
};
</script>
<style scoped>
.cart-item {
  display: flex;
  padding: 10px 10px 0 0;
}
.cart-check {
  position: relative;
  transform: translateY(170%);
  margin: 0 10px;
}
.item-img {
  width: 20%;
  margin-right: 20px;
}
.item-img img {
  width: 100%;
  border-radius: 10px;
}
.item-content {
  flex: 1;
  overflow: hidden;
  position: relative;
}
.item-content .title,
.item-content .desc {
  overflow: hidden;
  margin-bottom: 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-top: 10px;
}
.item-content div:last-child {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 10px;
}
.item-content .price {
  color: var(--color-high-text);
  padding-top: 5px;
}
.count button {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.count span {
  display: inline-block;
  width: 25px;
  text-align: center;
}
.delete-button {
  margin-top: 10px;
  height: 100%;
}
</style>
