export const actions = {
  addCart(context, payload) {
    let newCart = context.state.cartlist.find(item => item.iid === payload.iid)
    if (newCart) {
      context.commit('addcounter', newCart)
    } else {
      context.commit('addCarter', payload)
    }
  },
  delCart(context, payload) {
    let index = context.state.cartlist.findIndex(item => item.iid == payload)
    context.commit('delCarter', index)
  }
}