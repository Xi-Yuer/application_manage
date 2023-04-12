import { createApp } from 'vue'

import 'normalize.css'
import 'nprogress/nprogress.css'
import '@/assets/css/index.less'

import App from './App.vue'
import router from './router'
import icon from './plugins/registerIcons'
import permission from './directive/permission'
import store from './stores'

createApp(App).use(store).use(router).use(icon).use(permission).mount('#app')
