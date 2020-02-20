<template>
  <div class="cart-bottom">
    <div class="check">
      <check-button :is-checked="allChecked" @click.native="allCheck" />
      <span>全选</span>
    </div>
    <div class="bill">
      <div class="total">
        合计:<span>{{ totalPrice }}</span>
      </div>
      <div class="settle">
        结算<span v-show="totalQuantity">({{ totalQuantity }})</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";

import { mapGetters } from "vuex";

export default {
  name: "CartBottom",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList", "totalPrice", "totalQuantity", "allChecked"])
  },
  methods: {
    allCheck() {
      if (this.allChecked) {
        this.cartList.forEach(item => {
          item.checked = false;
        });
      } else {
        this.cartList.forEach(item => {
          item.checked = true;
        });
      }
    }
  }
};
</script>
<style scoped>
.cart-bottom {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-size: 14px;
}
.check {
  display: flex;
}
.check span {
  padding-top: 3px;
  margin-left: 5px;
}
.bill {
  display: flex;
}
.total {
  width: 60%;
  line-height: 30px;
}
.total span {
  font-size: 12px;
  color: #eb7729;
}
.settle {
  width: 80px;
  height: 30px;
  background-color: #eb7729;
  border-radius: 20px;
  text-align: center;
  line-height: 30px;
  margin-right: 10px;
  color: #fff
}
</style>
