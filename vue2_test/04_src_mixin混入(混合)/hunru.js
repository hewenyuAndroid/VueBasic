export const hunru = {
    // 混入的data数据和methods函数会和组件取并集
    // 如果有冲突，优先使用组件中的 data字段和methods
    data() {
        return {
            name:'混入',
            age: 20,
        }
    },
    methods: {
        showInfo() {
            // 这里 name 属性冲突，有限使用组件的name
            const msg = "---" + this.name
            alert(msg)
        }
    },
}

export const hunru2 ={
    created() {
        // 混入的生命周期函数和组件的生命周期函数都会执行
        // 混入的生命周期函数会优先于组件中的生命周期函数执行
        console.log("perform created(), from hunru.")
    },
    mounted() {
        console.log("perform mounted(), from hunru.")
    },
}