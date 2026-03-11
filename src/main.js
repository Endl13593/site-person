import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/tailwind.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/css/style.css'

createApp(App).use(router).mount('#app')
