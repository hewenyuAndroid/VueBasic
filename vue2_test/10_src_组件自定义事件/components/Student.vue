<template>
  <div class="student">
    <h2>姓名:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <h2>count:{{ count }}</h2>
    <button @click="addCount">点击count++</button>
    <br />
    <button @click="death">点击销毁组件对象vc</button>
    <br />
    <button @click="sendName()">点击向父容器传递name</button>
    <br />
    <button @click="unbind()">点击解绑自定义事件</button>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      name: "zhangsan",
      age: 20,
      count: 0,
    };
  },
  methods: {
    sendName() {
      console.log("perfrom student sendName.");
      // 触发 Student 组件身上的 atguigu 事件
      this.$emit("atguigu", this.name);
      this.$emit("testEvent");
    },
    unbind() {
      console.log("perfrom unbind");
      // 解绑一个自定义事件 atguigu
      // this.$off("atguigu");
      // 解绑多个事件
      this.$off(["atguigu", "testEvent"]);
      // 解绑所有事件
      // this.$off()
    },
    addCount() {
      console.log("perform addCount, count=", this.count);
      this.count++;
    },
    death(){
      console.log('perform student death.')
      // 销毁了当前 Student 组件的实例，销毁后，所有 Student 组件的事件都不生效了
      // vm 对象销毁后，其下面的组件的自定义事件也不生效了
      this.$destroy()
    }
  },
};
</script>

<!-- 不同组件之间的class可能重名，出现冲突，可以使用 scope 标记该 style 只在当前 组件中生效 -->
<style scoped>
.student {
  background-color: yellow;
}
</style>