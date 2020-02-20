export const actions = {
  addCart(context, payload) {
    return new Promise((resolve, reject )=> {
			let newCart = context.state.cartlist.find(item => item.iid === payload.iid)
			if (newCart) {
			  context.commit('addcounter', newCart)
				resolve('商品数量+1')
			} else {
			  context.commit('addCarter', payload)
				resolve('商品已加入购物车')
			}
		})
  },
  delCart(context, payload) {
    let index = context.state.cartlist.findIndex(item => item.iid == payload)
    context.commit('delCarter', index)
  }
}
