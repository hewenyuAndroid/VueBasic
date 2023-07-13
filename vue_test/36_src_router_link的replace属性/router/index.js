// 该文件专门用于创建整个应用的路由器

// 导入路由组件
import VueRouter from 'vue-router'

// 导入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
	routes: [
		{
			path: '/about',
			component: About,
		},
		{
			name: 'to_home',	// 给路由命名
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
					children: [
						{
							name: 'to_detail',	// 给路由命名
							path: 'detail/:id/:title',	// 使用占位符接收params参数
							component: Detail,
							// 第一种写法，传递固定的值
							// props: { a: 666, b: '你好' },

							// 第二种写法，布尔值 传 true，会将 params 参数转为 props
							// props: true,

							// 第三种写法，函数写法
							props(route) {
								return {
									// 这里拿到 route 之后，可以写 params 和 query 参数
									id: route.params.id,
									title: route.params.title,
								}
							},
						}
					]
				}
			]
		}
	]
})