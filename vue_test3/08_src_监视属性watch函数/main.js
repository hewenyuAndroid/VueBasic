// 引入的不再是 Vue 的构造函数了，引入的是一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
// 函数分解如下
// 1. 创建应用实例对象 app，（类似于之前 Vue2 中的 vm，但是此 app 比 vm 更 "轻"）
const app = createApp(App)

// 2. 挂载
app.mount('#app')
