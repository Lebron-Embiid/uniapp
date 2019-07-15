import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
 Vue.prototype.$api = "http://yl.demenk.com/web/index.php?store_id=1&r=api/"

Vue.prototype.$user_name = uni.getStorageSync('user_name');
Vue.prototype.$access_token = uni.getStorageSync('access_token');
Vue.prototype.$level = uni.getStorageSync('level');

const app = new Vue({
    ...App
})
app.$mount()
