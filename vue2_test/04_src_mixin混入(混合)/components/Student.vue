<template>
  <div class="student">
    <h2>姓名:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <button @click="showInfo()">点击显示弹窗</button>
  </div>
</template>

<script>
// 局部注册混入
import { hunru } from "../hunru";

export default {
  name: "StudentInfo",
  data() {
    return {
      name: "zhangsan",
    };
  },
  mixins: [hunru],
};
</script>

<style>
.student {
  background-color: bisque;
}
</style>