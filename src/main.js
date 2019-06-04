import Vue from 'vue'
import App from './App.vue'

import '@/micro/single-spa-config'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
