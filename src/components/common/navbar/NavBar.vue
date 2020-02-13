<template>
  <div class="navbar">
    <div class="navbar-left">
    	<slot name='navbar-left'></slot>
    </div>
    <div class="navbar-conter">
    	<slot name='navbar-conter'></slot>
    </div>
    <div class="navbar-right">
    	<slot name='navbar-right'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .navbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 1px 1px rgb(233, 232, 232)
  }
  .navbar-left, .navbar-right{
    width: 60px;
  }
  .navbar-conter {
    flex: 1;
    text-align: center;
  }
</style>
