import BackTop from 'components/content/backtop/BackTop'

export const backTopMiXin = {
  data() {
    return {
      isShow: null
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    }
  },
}