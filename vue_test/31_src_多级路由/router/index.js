// 该文件专门用于创建整个应用的路由器

// 导入路由组件
import VueRouter from 'vue-router'

// 导入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'

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
            children: [
                {
                    path: 'news',   // 二级路由不要写 /news
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                }
            ]
        }
    ]
})