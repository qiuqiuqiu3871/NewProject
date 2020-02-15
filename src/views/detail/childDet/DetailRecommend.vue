<template>
  <div class="detailrecommend">
    <h3>热门推荐</h3>
    <div class="recommend-item">
      <div
        v-for="item in detailRecommend.list"
        :key="item.tradeItemId"
        class="recommend-list-item"
      >
        <img v-lazy="item.image" alt="" />
        <div class="recommend-info">
          <p>{{ item.title }}</p>
          <span class="recommend-price"> ¥{{ item.price }} </span>
          <span class="recommend-collect"> {{ item.cfav }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRecommend",
  props: {
    detailRecommend: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.detailrecommend h3{
  padding: 20px 10px;
  text-align: center;
}
.recommend-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px;
}
.recommend-list-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.recommend-list-item img {
  width: 100%;
  border-radius: 5px;
}
.recommend-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  font-size: 14px;
  overflow: hidden;
  text-align: center;
}
.recommend-info p {
  overflow: hidden;
  margin-bottom: 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.recommend-price {
  color: #ff5777;
  margin-right: 30px;
}
.recommend-collect {
  position: relative;
}
.recommend-collect::before {
  position: absolute;
  top: 0;
  left: -15px;
  width: 14px;
  height: 14px;
  content: "";
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
