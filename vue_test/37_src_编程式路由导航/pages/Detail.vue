<template>
  <div>
    <ul>
      <!-- 配置 props 之后，参数直接写key -->
      <li>消息Id:{{ id }}</li>
      <li>消息Title:{{ title }}</li>
      <li>接收第一种方式传值: a={{ a }}, b={{ b }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["a", "b", "id", "title"],
  mounted() {
    console.log("perfrom detail mounted, ", this.$route);
  },
};
</script>

<style>
</style>