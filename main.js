import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
 Vue.prototype.$api = "http://gao2.demenk.com/youlanphp/web/index.php?store_id=1&r=api/"
 // Vue.prototype.$api = "http://www.youlan.com/web/index.php?store_id=1&r=api/"
 // Vue.prototype.$access_token = 'o5MQp8m-FyUnmfNGeRNCoaPXPETnTp1i'
 // Vue.prototype.$level = "4"

Vue.prototype.$access_token = uni.getStorageSync('access_token');
Vue.prototype.$level = uni.getStorageSync('level');
 
const app = new Vue({
    ...App
})
app.$mount()
