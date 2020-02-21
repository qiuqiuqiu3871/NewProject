module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      propList: ['*'],
      unitPrecision: 5,
      selectorBlackList: [/tab-bar/, 'navbar', 'van', ],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
