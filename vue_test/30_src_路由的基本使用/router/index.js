// 该文件专门用于创建整个应用的路由器

// 导入路由组件
import VueRouter from 'vue-router'

// 导入组件
import About from '../components/About'
import Home from '../components/Home'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
        }
    ]
})