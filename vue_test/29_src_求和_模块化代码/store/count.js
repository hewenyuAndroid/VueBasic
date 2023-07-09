// 求和相关的配置
export default {
    // 开启命名空间
    namespaced: true,
    actions: {
        // 加法操作，简写方式
        increment(context, value) {
            console.log('perfrom vuex actions increment, context=', context, ', value=', value);
            // 这里的 this 是 Store，代理了 state 对象，可以直接取 state 中的数据
            console.log('perfrom vuex actions increment, this=', this);
            // 将动作传递个 mutations 执行数据操作
            context.commit('INCREMENT', value);
        },

        // 减法操作
        decrement(context, value) {
            console.log('perfrom vuex actions decrement, context=', context, ', value=', value);
            context.commit("DECREMENT", value);
        },

        // sum 为奇数再执行加法
        incrementOdd(context, value) {
            console.log('perfrom vuex actions increamentOdd, context=', context, ', value=', value);
            if (context.state.sum % 2) {
                // 奇数进来，加法操作分发给之前写好的 actions
                // this.dispatch("increment", value);
                context.dispatch("increment", value);
            }
        },

        // 延迟一会再加
        increamentDelay(context, value) {
            console.log('perfrom vuex actions increamentOdd, context=', context, ', value=', value);
            setTimeout(() => {
                this.dispatch("increament", value);
            }, 500);
        },
    },
    mutations: {
        // mutations 中的函数名称通常为 actions 中的大写
        INCREMENT(state, value) {
            console.log("perfrom vuex mutations INCREMENT, state=", state, ",value=", value);
            // 这里的 this 是 Store，代理了 state 对象，可以直接取 state 中的数据
            console.log("perfrom vuex mutations INCREMENT, this=", this);
            // 操作数据，数据变更后 vue 会重新解析模板(刷新页面)
            state.sum += value;
        },

        DECREMENT(state, value) {
            console.log("perfrom vuex mutations DECREMENT, state=", state, ",value=", value);
            state.sum -= value;
        },

        INCREAMENT_ODD(state, value) {
            console.log("perfrom vuex mutations INDREATE_ODD, state=", state, ",value=", value);
            state.sum += value;
        },
    },
    state: {
        // 将 求和操作的数据值放到 store.state 中保存
        sum: 0,
        school: 'hangzhou',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}