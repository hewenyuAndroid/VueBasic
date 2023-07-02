[toc]

# 如何安装脚手架

官网文档: https://cli.vuejs.org/zh/

1. 如果是首次使用，需要安装全局 @vue/cli
    `npm install -g @vue/cli`
2. 切换到工作目录，使用如下命令创建项目
    `vue create xxx`
3. 启动项目
    `npm run serve`

注意: 如果下载缓慢可以修改下载镜像，命令如下:
    `npm config set registry https://registry.npm.taobao.org`


# 脚手架项目结构

```
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件

```

# 关于不同版本的 vue

1. vue.js 与 vue.runtime.xxx.js 的区别
    1. vue.js 是完整版的 vue， 包含: 核心功能 + 模板解析器
    2. vue.runtime.xxx.js 是运行版本的 vue，只包含 核心功能， 没有模板解析器
2. 因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 这个配置项，需要使用 render 函数接收到的 createElement 函数去指定具体内容;


# vue.config.js 配置文件

1. 使用 `vue inspect > output.js` 可以查看到 Vue 脚手架的默认配置;
2. 使用 vue.config.js 配置文件可以对脚手架进行个性化配置，详见: https://cli.vuejs.org/zh

# ref 属性

1. 被用来给 元素 或 子组件 注册引用信息 (id 的代替者);
2. 应用在 html 标签上获取的是真实 DOM 元素，应用在组件标签上，获取的是对应标签的组件对象 (vc);
3. 使用方式:
    - 添加 ref 标识 `<h2 ref="xxx">...</h2>` 或 `<School ref="xxx"></School>`
    - 获取 `this.$ref.xxx`

# props 配置项

1. 功能: 让组件接收外部传过来的数据
2. 传递数据: `<Student name="xxx" :age="20"></Student>`
3. 接收数据
    1. 第一种方式 (只接收数据): `props:["name", "age"]`
    2. 第二种方式 (限制接收的数据类型): `props: {name:String, age:Number}`
    3. 第三种方式 (限制类型，限制必要性，指定默认值)
    ```js
    data(){
        return {
            // 1. data 中定义的属性名称不能和 props 中的相同
            // 2. props 中的数据会在 data 数据之前被加载，因此可以使用 props 中的数据给 data 中的字段赋值
            // 3. props 中的数据是只读的，可以将 props 中的数据 赋值给 data，然后使用data中的数据去显示和操作
            showName:this.name
        }
    }
    props: {
        name: {
            type:String,    // 限制类型为 String
            required: true, // 必要性 （是否必传）
            default:"zhangsan"  // 默认值
        },
        age: {
            type:Number,    // 限制类型为 String
            default: 20 // 默认值
        }
    }
    ```

备注: props 是只读的， Vue 底层会监测开发者对 props 的修改，如果进行了修改，会发出警告，若业务确实需要修改数据，则可以通过 复制 props 中的内容到 data 中，然后去修改 data 中的值;


# mixin （混入/混合）

1. 功能: 可以把多个组件共用的配置提取成一个混入对象
2. 使用方式:
    1. 定义混入
    ```js
    // xxx.js
    {
        // 组件引入混合后，data 中的属性 和 methods 中的函数会取并集
        // 如果引入混入的组件中的 data 中的元素和methods中的函数有冲突，则优先使用 组件中的冲突属性/函数
        data(){
            return {
                name:"zhangsan",
                age:20,
            }
        },
        methods:{
            showName(){
                ...
            }
        },
        mounted() {
            ....
            // 如果引入混入的组件中也定义了对应的生命周期函数 mounted()
            // 则: 两 mounted() 都会执行 （混入文件中的会先执行）
        }，
        ...
    }
    ```
    2. 使用混入
        - 全局使用: `Vue.mixin(xxx)`
        - 局部使用: `mixins:["xxx"]`


# 插件

1. 功能: 用于增强Vue
2. 本质: 包含 `install()` 方法的一个对象，`install()` 方法的第一个参数是 `Vue`，第二个以后的参数是插件使用者传递的数据。
3. 定义插件:
    ```js
    对象.install = function (Vue, options) {
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
    ```
4. 使用插件: `Vue.use(plugins, options)`

# scoped样式

1. 作用: 让样式在局部生效，防止组件之间冲突
2. 写法: `<style scoped></style>`

# TodoList案例总结

## 组件化编码流程

1. 拆分静态组件: 组件要按照功能点拆分，命名不要与html元素冲突;
2. 实现动态组件: 考虑好数据存放的位置，数据是一个组件在用还是一些组件在用
    - 一个组件在用: 放在组件自身即可；
    - 一些组件在用: 放在他们共同的父组件上 (状态提升);
3. 实现交互: 从绑定事件开始;

## props 属性使用场景

1. 父组件 ==> 子组件 通信
2. 子组件 ==> 父组件 通信 （需要父组件先给一个回调函数）

## 使用 v-model 的一些注意点

v-model绑定的值**不能**是 props 传递过来的值，因为 props 是不可以修改的;

props 传递过来的是一个对象类型的值，修改对象中的属性时 Vue 不会报错，但是不推荐这样做;


# webStorage 浏览器本地存储

1. 存储的内容一般支持 5M 左右（不同浏览器可能不同）;
2. 浏览器端通过 `Window.localStorage` 或 `Window.sessionStorage` 属性来实现本地存储机制;
3. 相关API:
    - `xxxStorage.setItem('key', 'value')`: 该方法接收一个键和值作为参数，会把键值对添加到存储中，如果 `key` 已经存在，则会覆盖 `value` 值;
    - `xxxStorage.getItem('key')`: 该方法接收一个键名 (`key`) 作为参数，返回键名对应的值；
    - `xxxStorage.removeItem('key')`: 该方法接受一个键名 (`key`) 作为参数，会将该键名对应的 `key-value` 从存储中删除;
    - `xxxStorage.clear()`: 该方法会清空存储中的所有数据;
4. 备注:
    - `SessionStorage` 存储的内容会随着浏览器窗口的关闭而消失;
    - `LocalStorage` 存储的内容需要手动清除 （清空浏览器缓存 / 调用删除的API）才会消失;
    - `xxxStorage.getItem('key')` 如果存储中没有对应的 `key-value` 键值对，那么 `getItem()` 返回的是 `null`;
    - `JSON.parse(null)` 的返回值也是 `null`;
    - `xxxStorage.setItem('key', 'value')` 存储的键值对都是字符串，如果需要存储对象使用 `xxxStorage.setItem('key', JSON.stringify({...}))`;

# 组件的自定义事件

1. 一种组件间通信的方式，适用于: 子组件 ==> 父组件;
2. 使用场景: A是父组件，B是子组件，B想给A传数据，那么需要在 A 中给B绑定自定义事件 （事件的回调在 A 中）;
3. 绑定自定义事件:
    - 第一种方式: 给 `Student` 组件绑定 `testEvent` 事件，如果事件被触发，则会执行 `test()` 函数
        - 在父组件中 `<Student @testEvent="test" />` 或 `<Student v-on:testEvent="test" />` ;
        - 如果只要触发一次事件 `<Student @testEvent.once='test'/>` ;
    - 第二种方式: 在父组件的回调函数中绑定
    ```js
    // 给组件设置 ref 引用
    <Student ref="student" />

    // 在 mounted() 挂载回调函数中绑定事件, 事件能够执行多次
    this.$refs.student.$on('testEvent', this.test)

    // 在 mounted() 挂载回调函数中绑定事件，事件只会被触发一次
    this.$refs.student.$once('testEvent', this.test)
    ```
4. 触发自定义事件: `this.$emit('testEvent', 数据)`
5. 解绑自定义事件
```js
// 解绑单个事件
this.$off('testEvent')
// 解绑多个事件
this.$off(['testEvent', 'demo'])
// 解绑所有事件
this.$off()
```
6. 组件也可以绑定原生事件
```js
// 直接使用 click 会把 click 认为成是自定义事件
<Student @click="test" />

// 如果想用使用原生的 click 事件，需要使用 native 修饰符
<Student @click.native="test" />
```
7. 注意: 通过 `this.$refs.xxx.$on('testEvent', 数据)` 绑定自定义事件时，回调函数要么配置在 `methods` 中，要么使用箭头函数，否则 `this` 会指向 `vc` 子组件；


# 全局事件总线 (GlobalEventBus)

1. 一种组件间通信的方式，适用于 **任意组件间的通信**。
2. 安装全局事件总线:
    ```js
    new Vue({
        ...
        beforeCreate() {
            // 安装全局的事件总线， $bus 就是当前应用的 vm
            Vue.prototype.$bus = this
        },
        ...
    })
    ---
3. 适用事件总线:
    - 接收数据: A 组件想接收数据，则在 A组件中给 `$bus` 绑定自定义事件，事件的回调留在 A 组件自身;
    ```js
    ...
    mounted() {
        // 绑定自定义事件到全局事件总线
        // 事件名称: testEvent
        // 留在组件A的事件回调函数 test
        this.$bus.$on('testEvent', this.test)
    },
    ...
    methods: {
        // 回调函数
        test(data) {
            ...
        }，
    }
    ...
    ```
    - 提供数据的地方发送事件: `this.$bus.$on('testEvent', 数据)`;

4. 最好在 `beforeDestroy()` 钩子函数中，用 `$off('testEvent')` 解绑当前组件用到的事件;


# 消息订阅与发布 (pubsub)

1. 一种组件间通信的方式，适用于 **任意组件间通信**。
2. 使用步骤:
    1. 安装: `npm i pubsub-js`;
    2. 引入: `import pubsub from 'pubsub.js'`;
    3. 订阅数据: A 组件想接收数据，则在 A 组件中订阅消息，订阅的回调留在 A 组件自身
    ```js
    // 导入 pubsub 库
    import pubsub from 'pubsub.js'

    ... 
    mounted() {
        // 订阅 testEvent 消息，消息的回调函数为 test
        // 订阅后返回一个 id，可以保存在 this 对象(vc)中，解绑订阅时需要使用
        this.pid = pubsub.subscribe('testEvent', this.test)
    },
    beforeDestroy() {
        // 销毁之前解绑订阅
        pubsub.unsubscribe('testEvent', this.pid)
    }
    ...
    methods: {
        // 订阅消息的回调函数
        // 消息订阅 第一个参数返回的是 key 的名称，第二个参数开始才是数据
        test(msgName, value) {
            ....
        },
    }
    ...
    ```
3. 发布数据: `pubsub.publish('testEvent', 数据)`;
4. 最好在组件销毁之前 `beforeDestroy()` 回调函数中解绑订阅消息 `pubsub.unsubscribe('testEvent', this.pid)`;


# nextTick()

1. 语法: `this.$nextTick(回调函数)`
2. 作用: 在下一次DOM 更新结束后执行其指定的回调函数；
3. 什么时候用: 当改变数据后，要基于更新后的新 DOM 进行某些操作时，要在 `nextTick()` 所指定的回调函数中执行。
