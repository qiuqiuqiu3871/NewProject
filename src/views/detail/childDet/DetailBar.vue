<template>
  <nav-bar>
    <template v-slot:navbar-left>
      <div class="detail-img" @click="imgClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
    </template>
    <template v-slot:navbar-conter>
      <div class="detail-nav">
        <div
          v-for="(item, index) in titles"
          :key="item"
          class="detail-item"
          :class="{ active: index == count }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      count: 0
    };
  },
  methods: {
    itemClick(index) {
      this.count = index;
    },
    imgClick() {
      this.$router.back()
    }
  }
};
</script>
<style scoped>
.detail-nav {
  display: flex;
  font-size: 14px;
  /* background-color: #fff */
}
.detail-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.detail-img {
  margin-top: 6px;
  margin-left: 15px;
}
</style>
