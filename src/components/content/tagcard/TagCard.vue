<template>
  <div class="tagcard">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tagcard-item"
      @click="itemClick(index)"
    >
      <span :class="{ active: index == count }"> {{ item }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagCard",
  data() {
    return {
      count: 0,
      titles: ['流行', '新款', '精选']
    };
  },
  methods: {
    itemClick(index) {
      this.count = index;
      this.$emit('tagClick', index)
    }
  }
};
</script>
<style scoped>
.tagcard {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  z-index: 100
}
.tagcard-item {
  flex: 1;
}
.tagcard-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>
