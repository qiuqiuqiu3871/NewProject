<template>
  <div class="cate-menu">
    <div
      v-for="(item, index) in tabMenu"
      :key="item.miniWallkey"
      class="menu-item"
      @click="menuitemClick(index)"
      :class="{ active: index === count }"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryLeft",
  data() {
    return {
      count: 0
    };
  },
  props: {
    tabMenu: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    menuitemClick(index) {
      this.count = index;
      this.$emit('menuitemClick',index)
    }
  }
};
</script>
<style scoped>
.cate-menu {
 padding-bottom: 5px;
}
.menu-item {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
}
.active {
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>
