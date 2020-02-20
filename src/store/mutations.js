export const mutations = {
  addcounter(state, newCart) {
    newCart.count++
    localStorage.setItem('cartlist', JSON.stringify(state.cartlist))
  },
  addCarter(state, payload) {
    payload.count = 1
    payload.checked = false
    state.cartlist.push(payload)
    localStorage.setItem('cartlist', JSON.stringify(state.cartlist))
  },
  delCarter(state, index) {
    state.cartlist.splice(index, 1)
    localStorage.setItem('cartlist', JSON.stringify(state.cartlist))
  }
}