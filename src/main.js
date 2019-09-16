import Vue from 'vue'
import App from './App.vue'

import VueProgress from 'vue-progress'
Vue.use(VueProgress)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
