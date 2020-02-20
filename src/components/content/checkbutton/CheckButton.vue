<template>
  <div class="check-button" :class="{ checkactive: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
};
</script>
<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #d3d6d8;
}
.checkactive {
  background-color: #f00;
  border: 2px solid #f00;

}
</style>
