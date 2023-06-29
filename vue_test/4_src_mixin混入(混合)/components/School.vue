<template>
  <div class="school">
    <h2>名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
    <button @click="showInfo()">点击显示弹窗</button>
  </div>
</template>

<script>
// 局部注册混入
import { hunru } from "../hunru";

export default {
  name: "SchoolInfo",
  data() {
    return {
      name: "ccsu",
      address: "hangzhou",
    };
  },
  mixins: [hunru],
  created() {
    console.log("perfrom created(), from school.");
  },
  mounted() {
    console.log("perfrom mounted(), from school.");
  },
};
</script>

<style>
.school {
  background-color: aqua;
}
</style>