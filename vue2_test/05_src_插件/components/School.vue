<template>
  <div class="school">
    <h2>名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
    <h2>显示插件中的data属性: x={{ x }}, y={{ y }}</h2>
    <button @click="hello()">点击显示插件中定义的函数</button>
  </div>
</template>

<script>
export default {
  name: "SchoolInfo",
  data() {
    return {
      name: "ccsu",
      address: "hangzhou",
    };
  },
};
</script>

<style>
.school {
  background-color: aqua;
}
</style>