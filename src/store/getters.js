export const getters = {
  cartList(state) {
    return state.cartlist
  },
  totalPrice(state) {
    return '¥' + state.cartlist.filter(item => {
      return item.checked == true
    }).reduce((oldprice, item) => {
      return oldprice + item.price * item.count
    }, 0).toFixed(2)
  },
  totalQuantity(state) {
    return state.cartlist.filter(item => {
      return item.checked == true
    }).reduce((oldq, item) => {
      return oldq + item.count
    }, 0)
  },
  allChecked(state) {
    if (state.cartlist.length == 0) return false
    return !(state.cartlist.filter(item => {
      return item.checked == false
    }).length)
  }
}