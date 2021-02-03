import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery/dist/jquery.min')
require('bootstrap/dist/js/bootstrap.bundle')
require('@/assets/js/waypoints')
require('@/assets/js/custom')
require('@/assets/js/theme')

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/css/style.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
