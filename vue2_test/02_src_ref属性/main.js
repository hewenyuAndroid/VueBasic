// 导入 Vue
import Vue from 'vue'
// 导入 App 组件
import App from './App'
// 关闭生产提示
Vue.config.productionTip = false

new Vue({
    // 关联容器
    el: '#app',
    render: h => h(App),
})
