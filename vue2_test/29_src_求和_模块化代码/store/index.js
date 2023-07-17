// 该文件用于创建 Vuex 中最为核心的 store

// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'

// 引入 count 和 person
import countAbout from './count'
import personAbout from './person'

// 使用 Vuex 插件，插件的使用必须要在 store 对象创建之前
Vue.use(Vuex)

// 创建并暴露 store
export default new Vuex.Store({
    modules: {
        countAbout,
        personAbout
    }
})