<template>
  <div>
    <ul>
      <li>消息Id:{{ this.$route.query.id }}</li>
      <li>消息Title:{{ this.$route.query.title }}</li>
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