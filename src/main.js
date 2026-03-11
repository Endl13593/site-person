import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/css/style.css'

createApp(App).use(router).mount('#app')
