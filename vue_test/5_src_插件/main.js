
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入插件
import plugins from './plugins'

// 使用插件
Vue.use(plugins, 1, 2)

new Vue({
    el: '#app',
    render: h => h(App)
})