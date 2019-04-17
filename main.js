import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$api = "http://gao2.demenk.com/youlanphp/web/index.php?store_id=1&r=api/"
Vue.prototype.$access_token = '8baae9367939e871a82286f778f3ad77'
// '8baae9367939e871a82286f778f3ad77'
// uni.getStorageSync('access_token')
const app = new Vue({
    ...App
})
app.$mount()
