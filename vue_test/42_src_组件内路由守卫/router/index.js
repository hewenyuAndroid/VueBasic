// 该文件专门用于创建整个应用的路由器

// 导入路由组件
import VueRouter from 'vue-router'

// 导入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建一个路由器
const router = new VueRouter({
	routes: [
		{
			path: '/about',
			component: About,
			meta: { isAuth: true },
		},
		{
			name: 'to_home',	// 给路由命名
			path: '/home',
			component: Home,
			children: [
				{
					path: 'news',   // 二级路由不要写 /news
					component: News,
					meta: { isAuth: true, title: '新闻' },	// 使用 meta 配置自定义数据
					beforeEnter: (to, from, next) => {
						console.log("-->perfrom news beforeEnter: from=", from, ", to=", to, ", next=", next)
						if (to.meta.isAuth) {
							// 如果目标路由配置了 需要认证
							console.log("auth path = ", to.fullPath)
							if (localStorage.getItem("account") === 'admin') {
								// 如果当前缓存的account 是 admin 则跳转
								next()
							} else {
								alert("当前缓存的不是admin账号,暂无权限.")
							}
						} else {
							// 没有配置的直接跳转
							next()
						}
					}
				},
				{
					path: 'message',
					component: Message,
					meta: { isAuth: true, title: '消息' },
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

// 配置全局前置守卫: 初始化时执行、每次路由切换前执行
/*
router.beforeEach((to, from, next) => {
	console.log("-->perfrom beforeEach: from=", from, ", to=", to, ", next=", next, ".")
	if (to.meta.isAuth) {
		// 如果目标路由配置了 需要认证
		console.log("auth path = ", to.fullPath)
		if (localStorage.getItem("account") === 'admin') {
			// 如果当前缓存的account 是 admin 则跳转
			next()
		} else {
			alert("当前缓存的不是admin账号,暂无权限.")
		}
	} else {
		// 没有配置的直接跳转
		next()
	}
})
*/

// 配置全局后置守卫: 初始化时执行、每次路由切换后执行
// 注意，需要 beforeEach.next() 执行后在执行 afterEach
router.afterEach((to, from) => {
	console.log("-->perfrom afterEach: from=", from, ", to=", to, ".")
	// 如果路由配置了title，则在跳转成功后，修改标题, 否则使用默认的
	document.title = to.meta.title || 'vue_test'
})

// 暴露路由对象
export default router