const plugins = {
    // 定义一个插件
    // 第一个参数为 Vue 原型对象
    // 第二个参数开始为插件使用者传入的参数
    install(Vue, x, y) {
        console.log("perfrom plugins install(): ", Vue, ",x=", x, "y=", y)

        // 导入全局过滤器
        Vue.filter("mySlice", function (value) {
            return value.slice(0, 4)
        })

        // 添加全局指令
        Vue.directive("fbind", {
            //指令与元素成功绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            //指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 1,
                    y: 2,
                }
            }
        })

        // 给Vue原型上添加一个方法， (vm和vc就都能用了)
        Vue.prototype.hello = () => { alert('你好啊') }
    }
}

export default plugins