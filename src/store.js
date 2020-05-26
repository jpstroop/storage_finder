import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requiredFeatures: []
  },
  getters: {
    requiredFeatures: state => {
      return state.requiredFeatures
    }
  },
  mutations: {
    addFeature(state, payload) {
      var id = payload.featureId
      state.requiredFeatures.push(id)
    },
    removeFeature(state, payload) {
      var id = payload.featureId
      var index = state.requiredFeatures.indexOf(id)
      state.requiredFeatures.splice(index, 1) // must happen in place!
    }
  }
})
