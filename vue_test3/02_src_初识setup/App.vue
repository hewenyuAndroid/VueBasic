<template>
  <h2>用户信息如下</h2>
  <h3>setup中的->姓名: {{ name }}</h3>
  <h3>data和setup重复的->年龄: {{ age }}</h3>
  <h3>data中的->sex: {{ sex }}</h3>
  <button @click="showInfo">点击显示setup中的弹窗函数</button>
  <br />
  <br />
  <button @click="showVue2Info">点击显示methods中弹窗函数</button>
</template>

<script>
export default {
  name: "App",
  // vue3 中也可以配置 vue2 的 data 和methods
  data() {
    return {
      sex: "man",
      age: 10,
    };
  },
  methods: {
    showVue2Info() {
      // 在 vue2 的配置中 (data,methods) 可以访问到 setup 中的配置 (name, age)
      // 配置冲突时，优先使用 setup 中的数据 (这里 age 冲突了，显示setup 中的 20)
      alert(
        `showVue2Info, name=${this.name}, age=${this.age}, sex=${this.sex}`
      );
    },
  },
  setup() {
    // 定义数据
    let name = "zhangsan";
    // age 属性跟 data 中的age 冲突了，优先使用 setup 中的属性
    let age = 20;
    // 定义函数
    function showInfo() {
      // setup 中不能访问到 vue2 配置信息
      // 这里 this.sex 为 undefined
      alert(`showInfo, name=${this.name}, age=${this.age}, sex=${this.sex}`);
    }

    // 返回 函数
    // return () => h(name, age);

    // 返回对象
    return {
      name,
      age,
      showInfo,
    };
  },
};
</script>

<style>
</style>
