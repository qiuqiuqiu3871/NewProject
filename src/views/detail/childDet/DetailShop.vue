<template>
  <div class="detailshop">
    <div class="shop-logo">
      <img :src="detailShop.logo" alt="" />
      <span>{{ detailShop.name }}</span>
    </div>
    <div class="shop-evaluate">
      <ul class="shop-ide">
        <li>
          总销量<span>{{ detailShop.cSells }}万</span>
        </li>
        <li>
          全部宝贝<span>{{ detailShop.cGoods }}</span>
        </li>
        <li>
          总收藏量<span>{{ detailShop.cFans }}</span>
        </li>
      </ul>
      <ul>
        <li v-for="item in detailShop.score" :key="item.name" class="shop-item">
          <span>{{ item.name }}</span>
          <span :style="{ color: item.isBetter ? '#f00' : '#0f0' }">
            {{ item.score }}
          </span>
          <span
            :style="{
              color: '#fff',
              backgroundColor: item.isBetter ? '#f00' : '#0f0'
            }"
          >
            {{ item.isBetter ? "高" : "低" }}
          </span>
        </li>
      </ul>
    </div>
    <div class="shop-ingo">
      <p>进店逛逛</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  data() {
    return {
      evaluate: ""
    };
  },
  props: {
    detailShop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.detailshop {
  border-bottom: 5px solid #eee
}
.shop-logo img {
  width: 15%;
  vertical-align: middle;
  margin: 10px 15px;
}
.shop-evaluate {
  display: flex;
}
.shop-evaluate ul {
  flex: 1;
  padding-left: 20px;
  font-size: 14px;
}
.shop-ide {
  padding-right: 5px;
  border-right: 1px solid #bbb;
}
.shop-ide span {
  font-size: 20px;
  padding-left: 10px;
  color: #f00;
}
.shop-item span {
  display: inline-block;
  padding: 0 5px;
  margin: 3px 0
}
.shop-item span:nth-child(2) {
  width: 40px;
}
.shop-ingo p {
  margin: 20px auto;
  width: 120px;
  padding: 10px 10px;
  background-color: #f2f5f8;;
  text-align: center;
  border-radius: 5px;
  font-size: 14px;
}
</style>
