<template>
  <h2>用户信息如下</h2>
  <h3>姓名: {{ name }}</h3>
  <h3>年龄: {{ age }}</h3>
  <!-- <h3>job.typ: {{ job.type }}</h3> -->
  <button @click="updateInfo">点击修改信息</button>
  <br />
  <br />
  <button @click="updateJob">点击修改工作</button>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    // 定义数据
    // 使用 ref 函数定义响应式数据 (基本数据类型)，vue 才能监测到数据的变更
    let name = ref("zhangsan");
    let age = ref("20");

    // 不能定义对象
    // let job = ref({ type: "开发", salary: 30000 });

    // 定义函数
    function updateInfo() {
      console.log("name=", name, ", age=", age);
      name.value = "lisi";
      age.value = "30";
    }
    function updateJob() {
      // console.log("job=", job);
      // job.type = "测试";
    }

    // 返回对象
    return {
      name,
      age,
      updateInfo,
      updateJob,
    };
  },
};
</script>

<style>
</style>
