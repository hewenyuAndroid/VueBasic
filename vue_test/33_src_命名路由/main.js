// 注意：vue 脚手架中会先统计所有的 import 语句，然后按照 import 语句的先后顺序执行完 import 语句后在执行其它语句 (Vue.use() 等)
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
// 导入路由器
import router from './router'

// 应用路由插件
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    // 配置路由属性
    router: router,
})