<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img v-lazy="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.recommend {
  display: flex;
  justify-content:space-around;
  font-size: 14px;
  padding: 10px 0 20px
}
.recommend-item {
  text-align: center;
  width: 80%;
}
.recommend-item img {
  width: 80%;
  margin-bottom: 5px
}
</style>
