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


