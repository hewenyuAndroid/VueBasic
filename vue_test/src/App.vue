<template>
  <div class="app">
    <h2>接收到数据: {{ msg }}</h2>
    <br />
    <!-- 通过父组件给子组件传递函数类型的 props 属性实现： 子组件给父组件传递数据 -->
    <School :sendNameToApp="sendNameToApp" />
    <br />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子组件给父组件传递数据 -->
    <!--
      第一种写法，使用 v-on 或 @ 在子组件标签上添加自定义事件，事件触发时，执行标签对应的表达式
      当子组件 触发 atguigu 自定义事件时，触发父组件中的 getStudentName 函数
    -->
    <!-- <Student v-on:atguigu="getStudentName" /> -->

    <!-- 
      第二种写法，使用 ref 引用拿到组件标签，在 mounted 回调函数中绑定事件
     -->
    <Student ref="student" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School, Student },
  mounted() {
    // 在组件被挂载时，绑定事件，事件只回调一次
    // this.$refs.student.$once("atguigu", this.getStudentName);
    // 在组件被挂载时，绑定事件，事件可以一直回调
    this.$refs.student.$on("atguigu", this.getStudentName);
    // 给 student 组件绑定多个事件
    this.$refs.student.$on("testEvent", this.test);
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    sendNameToApp(name) {
      console.log("perfrom App sendNameToApp, name=", name);
      this.msg = name;
    },
    // App 组件给 Student 组件绑定的 atguigu 事件回调函数
    // 如果有多个参数，直接在参数后面添加数据即可 (name, age, sex) 或者 (name, ...params) 方式，接收name参数，后面的参数使用 params 数组接收
    getStudentName(name) {
      console.log("perfrom app getStudentName, name=", name);
      this.msg = name;
    },
    test() {
      console.log("perform app test()");
    },
  },
};
</script>

<style>
.app {
  background-color: aquamarine;
}
</style>