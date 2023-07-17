// 该文件用于创建 Vuex 中最为核心的 store

// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 使用 Vuex 插件，插件的使用必须要在 store 对象创建之前
Vue.use(Vuex)

// 准备 actions -- 用于响应组件中的动作
const actions = {
    // 参数1: vuex 上下文
    // 参数2: 组件传递过来的参数
    // increament: function (context, value) {
    //     console.log("perform vuex actions, increament")
    // },
    // 加法操作，简写方式
    increament(context, value) {
        console.log('perfrom vuex actions increament, context=', context, ', value=', value);
        // 这里的 this 是 Store，代理了 state 对象，可以直接取 state 中的数据
        console.log('perfrom vuex actions increament, this=', this);
        // 将动作传递个 mutations 执行数据操作
        context.commit('INCREAMENT', value);
    },

    // 减法操作
    decreament(context, value) {
        console.log('perfrom vuex actions decreament, context=', context, ', value=', value);
        context.commit("DECREAMENT", value);
    },

    // sum 为奇数再执行加法
    increamentOdd(context, value) {
        console.log('perfrom vuex actions increamentOdd, context=', context, ', value=', value);
        if (state.sum % 2) {
            // 奇数进来，加法操作分发给之前写好的 actions
            // this.dispatch("increament", value);
            context.dispatch("increament", value);
        }
    },

    // 延迟一会再加
    increamentDelay(context, value) {
        console.log('perfrom vuex actions increamentOdd, context=', context, ', value=', value);
        setTimeout(() => {
            this.dispatch("increament", value);
        }, 500);
    },
}

// 准备 mutations -- 用于操作数据 (state)
const mutations = {
    // 参数参考 actions
    // mutations 中的函数名称通常为 actions 中的大写
    INCREAMENT(context, value) {
        console.log("perfrom vuex mutations INCREAMENT, context=", context, ",value=", value);
        // 这里的 this 是 Store，代理了 state 对象，可以直接取 state 中的数据
        console.log("perfrom vuex mutations INCREAMENT, this=", this);
        // 操作数据，数据变更后 vue 会重新解析模板(刷新页面)
        state.sum += value;
    },

    DECREAMENT(context, value) {
        console.log("perfrom vuex mutations DECREAMENT, context=", context, ",value=", value);
        state.sum -= value;
    }
}

// 准备 state -- 用于存储数据
const state = {
    // 将 求和操作的数据值放到 store.state 中保存
    sum: 0,
}

// 准备 getters -- 用于加工 state 中的数据
const getters = {
    // 入参为 state 对象
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露 store
export default new Vuex.Store({
    // actions:actions,
    // mutations:mutations,
    // state:state
    // key-value同名时可以简写
    actions,
    mutations,
    state,
    // 配置 getters 对象
    getters,
})