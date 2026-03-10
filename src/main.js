import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import '@/assets/css/tailwind.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/css/style.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
