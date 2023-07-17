<template>
  <h2>用户信息如下</h2>
  <h3>姓名: {{ person.name }}</h3>
  <h3>年龄: {{ person.age }}</h3>
  <br />
  <br />
  <button @click="sendCustomEvent">点击发送自定义事件</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Demo",
  // 接收父组件传递过来的 props 参数
  props: ["param1", "param2"],
  // 接收父组件传递过来的 自定义事件，这里不声明会有警告
  emits: ["hello"],
  setup(props, context) {
    // 第一个 参数 props 为一个对象, 里面的值为 当前组件 props 属性接收的值： Proxy(Object) {param1: '12', param2: '34'}
    // 如果 props: [ 'param1' ], 则，参数 props 为 Proxy(Object) {param1: '12'}
    console.log("-------->props=", props);
    console.log("-------->context=", context);
    // 如果如组件传递了 props 值，但是当前组件的 props 没有声明接收，则属性会被 attrs 接收
    // 相当于 vue2 中的 this.$attrs
    console.log("-------->attrs", context.attrs);
    // 用于触发自定义事件
    // 相当于 vue2 中的 this.$emit
    console.log("-------->attrs", context.emit);
    // 插槽
    console.log("-------->slot", context.slots);

    let person = reactive({
      name: "zhangsan",
      age: 20,
    });

    function sendCustomEvent() {
      context.emit("hello", "来自Demo组件的参数");
    }

    // 返回对象
    return {
      person,
      sendCustomEvent,
    };
  },
};
</script>

<style>
</style>
