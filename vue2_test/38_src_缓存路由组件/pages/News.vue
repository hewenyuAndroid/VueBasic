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
};
</script>

<style>
</style>