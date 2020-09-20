import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import ElementUI from 'element-ui'
import http from './utils/axios/axios.js'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'

// eslint-disable-next-line
/* eslint-disable */

Vue.prototype.$bus = new Vue()

Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
