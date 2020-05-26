import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store.js'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')
