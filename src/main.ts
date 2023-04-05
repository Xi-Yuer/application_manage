import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'normalize.css'
import 'nprogress/nprogress.css'
import '@/assets/css/index.less'

import App from './App.vue'
import router from './router'
import { registerIcons } from './plugins/registerIcons'

createApp(App).use(createPinia()).use(router).use(registerIcons).mount('#app')
