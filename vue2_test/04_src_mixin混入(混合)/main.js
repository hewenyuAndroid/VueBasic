
import Vue from 'vue'
import App from './App.vue'

// 导入混入
import { hunru2 } from './hunru'

Vue.config.productionTip = false

// 全局注册混入
Vue.mixin(hunru2)

new Vue({
    el: '#app',
    render: h => h(App)
})