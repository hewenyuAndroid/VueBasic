<template>
  <div>
    <ul>
      <!-- 使用params 传递的参数，需要使用 $route.params 对象接收 -->
      <li>消息Id:{{ this.$route.params.id }}</li>
      <li>消息Title:{{ this.$route.params.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log("perfrom detail mounted, ", this.$route);
  },
};
</script>

<style>
</style>