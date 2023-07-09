// 注意：vue 脚手架中会先统计所有的 import 语句，然后按照 import 语句的先后顺序执行完 import 语句后在执行其它语句 (Vue.use() 等)
import Vue from 'vue'
import App from './App.vue'
// 1. vue-resource 安装: npm i vue-resource
// 2. 引入 vue-resource
// 3. 导入插件
// 4. 修改请求对象
import VueResource from 'vue-resource'

// import store from './store/index.js'
// 如果导入的是对应目录下的 index.js 文件可以简写如下
import store from './store'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    // 添加 store 属性
    // store:store,
    // key-value 同名时可以简写如下
    store,
    beforeCreate() {
        // 绑定全局事件总线
        Vue.prototype.$bus = this
    },
})