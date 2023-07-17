<template>
  <ul>
    <li>news001<input style="text"/></li>
    <li>news002<input style="text"/></li>
    <li>news003<input style="text"/></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  beforeDestroy() {
    console.log('perfrom News beforeDestroy.')
  },
  activated() {
    console.log("News 组件被激活了--------")
  },
  deactivated() {
    console.log("News 组件失活了-------------")
  },
};
</script>

<style>
</style>