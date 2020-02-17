<template>
  <div class="catecontent">
    <div v-for="(item, index) in tabContent" :key="index" class="item">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="" @load="contentimgLoad" />
        <div class="item-text">{{ item.title }}</div>
      </a>
    </div>
    <div class="cate-last">——到底啦——</div>
  </div>
</template>

<script>
export default {
  name: "CategoryContent",
  props: {
    tabContent: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    contentimgLoad() {
     this.$emit('contentimgLoad')
    }
  }
};
</script>
<style scoped>
.catecontent {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  padding: 10px;
}
.item {
  text-align: center;
  font-size: 12px;
  width: 30%;
  margin-bottom: 10px;
}
.item-img {
  width: 80%;
}
.item-text {
  margin-top: 10px;
}
.cate-last {
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0;
}
</style>
