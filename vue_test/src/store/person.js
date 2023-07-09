// 人员管理相关的配置
export default {
    // 开启命名空间
    namespaced: true,
    actions: {
        // 添加一个用户
        addPerson(context, value) {
            console.log('perfrom vuex actions addPerson, context=', context, ', value=', value);
            context.commit("ADD_PERSON", value)
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log("perfrom vuex mutations ADD_PERSON, state=", state, ",value=", value);
            state.personList.unshift(value);
        }
    },
    state: {
        personList: [
            { id: "001", name: "张三" }
        ]
    },
    getters: {

    }
}