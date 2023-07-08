
import Vue from 'vue'
import App from './App.vue'
// 1. vue-resource 安装: npm i vue-resource
// 2. 引入 vue-resource
// 3. 导入插件
// 4. 修改请求对象
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        // 绑定全局事件总线
        Vue.prototype.$bus = this
    },
})