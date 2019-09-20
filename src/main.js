import Vue from 'vue'
import VueRouter from 'vue-router'
import VueProgress from 'vue-progress'

import App from './App.vue'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueProgress)

const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
