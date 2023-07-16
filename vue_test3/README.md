# vue_test3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 创建 Vue3 工程

## 1. 使用 `vue-cli` 创建

官方文档: https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

```shell
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建
vue create vue_test
## 启动
cd vue_test
npm run serve
```

## 使用 vite 创建

官方文档: https://v3.cn.vuejs.org/guide/installation.html#vite

vite官网: https://vitejs.cn

- 什么是 vite: 新一代前端构建工具;
- 优势如下: 
    - 开发环境中，无需打包操作，可以快速冷启动;
    - 轻量快速的热重载(HMR);
    - 真正的按需编译，不再等待整个应用编译完成;

传统构建与 vite 构建对比图

![传统构建](./img/traditional_construction.png)

![vite构建](./img/vite_construction.png)


```shell
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```


# 常用 `Composition API`

官方文档: https://v3.cn.vuejs.org/guide/composition-api-introduction.html

## 1. `setup` 函数

1. 理解: Vue3.0 中一个新的配置项，值为一个函数;
2. `setup` 是所有 `Composition Api` (组合API) "表演的舞台";
3. 组件中所有用到的: 数据(data), 方法(methods)等，均要配置在 `setup` 中;
4. `setup` 函数的两种返回值:
    - 对象: 对象中的属性、方法，在模板中均可以直接使用;
    - 函数(渲染函数): 可以自定义渲染内容;
5. 注意点:
    - 尽量不要与 `Vue2.x` 配混用;
        - 在 `Vue2.x` 配置 (`data`, `methods`, `computed`...) 中可以访问到 `setup` 中的属性、方法; (vue2的配置可以读取到vue3的配置)
        - 在 `setup` 中，不能访问到 `Vue2.x` 配置 (`data`,`methods`,`computed`...); 
        - 如果有重名 (例如: `data` 中配置了 `name`, `setup` 中也配置了 `name`), 优先使用 `setup` 中的数据;
    - `setup` 不能是一个 `async` 函数，因为返回值不再是 return 对象，而是 `promise`, 模板看不到 `return` 对象中的属性。(后期也可以返回一个 `Promise` 实例，但需要 `Suspense` 和 异步组件的配合)
    
