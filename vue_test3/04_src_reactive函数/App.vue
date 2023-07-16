<template>
  <h2>用户信息如下</h2>
  <h3>姓名: {{ name }}</h3>
  <h3>年龄: {{ age }}</h3>
  <h3>job.typ: {{ job.type }}</h3>
  <h3>hobby:{{ hobby }}</h3>
  <button @click="updateInfo">点击修改信息</button>
  <br />
  <br />
  <button @click="updateJob">点击修改工作</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "App",
  setup() {
    // 定义数据
    // 使用 ref 函数定义响应式数据 (基本数据类型)，vue 才能监测到数据的变更
    let name = ref("zhangsan");
    let age = ref("20");

    // 使用 reactive 定义的对象
    // 注意: 不能使用 reactive 定义基本数据类型
    let job = reactive({ type: "开发", salary: 30000 });

    // 使用 reactive 定义一个数组
    let hobby = reactive(["抽烟", "喝酒", "烫头"]);

    // 定义函数
    function updateInfo() {
      console.log("name=", name, ", age=", age);
      name.value = "lisi";
      age.value = "30";
    }
    function updateJob() {
      console.log("job=", job);
      // reactive 定义的对象，修改内部属性后，vue 能够监测到数据变更，重新解析模板
      job.type = "测试";
      // 直接使用数组下标修改数据
      hobby[0] = "haha";
    }

    // 返回对象
    return {
      name,
      age,
      job,
      hobby,
      updateInfo,
      updateJob,
    };
  },
};
</script>

<style>
</style>
