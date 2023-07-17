
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        // 在 vm 对象创建的最开始，将 vm 对象绑定到 Vue 原型对象中，此时模板还未开始解析
        Vue.prototype.$bus = this
    },
})