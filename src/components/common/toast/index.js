import Toast from './Toast'

const toastObj = {}
toastObj.install = function(Vue) {
  // 1. 创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2. new的方式,根据组件构造器,创建组件对象
  const toast = new toastContrustor()

  // 3. 将组件对象,手动挂载到某一元素上
  toast.$mount(document.createElement('div'))

  // 4. toast,$el就是对应的div
  document.body.appendChild(toast.$el)

  // 5.vue原型上绑定
  Vue.prototype.$toast = toast
}

export default toastObj