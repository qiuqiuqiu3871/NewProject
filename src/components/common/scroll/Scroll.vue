<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      iscroll: null
    };
  },
  mounted() {
    this.iscroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    });
    this.iscroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    this.iscroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 800) {
      this.iscroll && this.iscroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.iscroll.finishPullUp();
    },
    refresh() {
      this.iscroll && this.iscroll.refresh()
    }
  }
};
</script>
<style scoped></style>
