<template>
  <div v-if="Object.keys(detailRate)" class="detailrate">
    <div class="rate-comment">
      <span>买家评论</span>
      <span>更多···</span>
    </div>
    <ul>
      <li v-for="item in detailRate.list" :key="item.rateId">
        <div class="item-user">
          <img v-lazy="item.user.avatar" alt="" />
          <span>{{ item.user.uname }}</span>
        </div>
        <div class="item-content">
          <span>{{ item.content }}</span>
          <span v-if="item.explain">{{ item.explain }}</span>
        </div>
        <div class="item-creat">
          <span>{{ item.created | setFormatDte }}</span>
          <span>{{ item.style }}</span>
        </div>
        <div class="item-img" v-if="item.images">
          <div v-for="v in item.images" :key="v">
            <img v-lazy="v" alt="" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatDate } from "common/utils/formatDate";

export default {
  name: "DetailRate",
  props: {
    detailRate: {
      type: Object,
      default() {
        return {
          rateTime: null
        };
      }
    }
  },
  filters: {
    setFormatDte(value) {
      return formatDate(value);
    }
  }
};
</script>
<style scoped>
.detailrate {
  border-top: 5px solid #f2f5f8;
  border-bottom: 5px solid #f2f5f8;
}
.rate-comment {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 1px solid #f2f5f8;
}
.item-user img {
  width: 30%;
  vertical-align: middle;
  border-radius: 50%;
  padding: 10px 20px;
}
.item-content {
  font-size: 14px;
  padding: 10px 20px;
}
.item-content span:nth-child(2) {
  color: var(--color-high-text);
  border-top: 2px solid #f2f5f8;
}
.item-creat span {
  font-size: 14px;
  padding-left: 20px;
  color: #c6c8ca;
}
.item-img {
  display: flex;
  padding: 20px;
}
.item-img img {
  width: 80px;
  height: 80px;
  margin-right: 5px;
}
</style>
