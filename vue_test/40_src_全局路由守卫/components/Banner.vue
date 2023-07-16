<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>

    <button @click="goBack()">后退</button>
    <button @click="goForward()">前进</button>
    <button @click="go()">向后回退两个页面</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    goBack() {
      this.$router.back();
    },
    goForward() {
      this.$router.forward();
    },
    go() {
      // 向后退两个页面
      this.$router.go(-2);
    },
  },
};
</script>

<style>
</style>