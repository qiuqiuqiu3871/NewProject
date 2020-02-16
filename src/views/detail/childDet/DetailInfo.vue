<template>
  <div v-if="Object.keys(detailInfo)" class="detailinfo">
    <div class="info-desc">
      {{ detailInfo.desc }}
    </div>
    <div class="info-image" v-for="item in detailInfo.imagesList" :key="item" >
      <img :src="item" alt="" @load="infoimgLoad"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    infoimgLoad() {
      this.$emit('infoimgLoad')
    }
  },
};
</script>
<style scoped>
.detailinfo {
  padding: 10px 0;
}
.info-desc {
  font-size: 14px;
  padding: 20px 10px;
  position: relative;
}
.info-desc ::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.info-image img {
  width: 100%;
}
</style>
