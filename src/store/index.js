import Vue from 'vue'
import Vuex from 'vuex'

import { mutations } from './mutations'
import { actions } from './actions'
import {getters} from './getters'

Vue.use(Vuex)

const state = {
  cartlist: localStorage.getItem('cartlist')?JSON.parse(localStorage.getItem('cartlist')):[]
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})
