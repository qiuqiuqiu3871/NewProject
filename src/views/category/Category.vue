<template>
  <div id="category">
    <nav-bar class="category-nav">
      <template v-slot:navbar-conter>
        <div>商品分类</div>
      </template>
    </nav-bar>
    <div class="content">
      <scroll class="catemenu">
        <category-menu :tab-menu="tabMenu" @menuitemClick="menuitemClick" />
      </scroll>
      <scroll class="content-right" ref="cateScroll">
        <category-content
          :tab-content="tabContent"
          @contentimgLoad="contentimgLoad"
        />
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CategoryMenu from "./childCate/CategoryMenu";
import CategoryContent from "./childCate/CategoryContent";

import Scroll from "components/common/scroll/Scroll";

import { debounce } from "common/utils/debounce";

import { getCategoryData, getSubcategory } from "network/category";

export default {
  name: "Category",
  data() {
    return {
      tabMenu: [],
      tabContent: []
    };
  },
  components: {
    NavBar,
    CategoryMenu,
    CategoryContent,
    Scroll
  },
  created() {
    this.getCategory();
  },
  methods: {
    /**
     * 网络请求
     */
    getCategory() {
      getCategoryData().then(res => {
        this.tabMenu = res.data.category.list;
        // console.log(this.tabMenu);
        this.getSubcategory(0);
      });
    },
    getSubcategory(index) {
      let maitKey = this.tabMenu[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.tabContent = res.data.list;
        // console.log(this.tabContent);
      });
    },

    /*
    监听事件相关方法
    */
    menuitemClick(index) {
      this.getSubcategory(index);
      this.$refs.cateScroll.scrollTo(0, 0, 100);
    },
    contentimgLoad() {
      this.$refs.cateScroll.refresh()
    }
  }
};
</script>

<style scoped>
#category {
  height: 100vh;
  position: relative;
}
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: large;
}
.content {
  display: flex;
}
.content-right {
  flex: 1;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 25%;
  overflow: hidden;
}
.catemenu {
  width: 25%;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #f2f5f8;
  overflow: hidden;
}
</style>
