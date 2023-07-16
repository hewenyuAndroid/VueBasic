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

