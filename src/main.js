import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const store = new Vuex.Store({
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

new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')
