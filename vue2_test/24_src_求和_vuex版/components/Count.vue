<template>
  <div>
    <!-- 这里将 sum 字段放到 store.state 中存储了，取值方式也需要调整为对应的位置 -->
    <h1>当前求和为{{ $store.state.sum }}</h1>
    <select v-model.number="step">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option></select
    >&nbsp; <button @click="increament">+</button>&nbsp;
    <button @click="decreament">-</button>&nbsp;
    <button @click="increamentOdd">当前求和为奇数再加</button>&nbsp;
    <button @click="increamentDelay">延迟一会再加</button>&nbsp;
  </div>
</template>

<script>
export default {
  name: "Count",
  mounted() {
    // 这里打印 Count 的 vc 对象，里面会出现 $store
    console.log("---->Count", this);
  },
  data() {
    return {
      step: 1, // 用户选择的操作步长
    };
  },
  methods: {
    increament() {
      // this.sum += this.step;
      // sum 存储在 store.state，需要将 increament 事件传入 actions
      // actions中保存了一批函数，通过函数名映射执行函数
      // 通过 store.dispatch() 将事件分发给 actions
      // 参数1 为 actions 中
      this.$store.dispatch("increament", this.step);
    },
    decreament() {
      // this.sum -= this.step;
      this.$store.dispatch("decreament", this.step);
    },
    increamentOdd() {
      // 取余为0则为false
      // if (this.sum % 2) {
      //   this.sum += this.step;
      // }

      this.$store.dispatch("increamentOdd", this.step);
    },
    increamentDelay() {
      // setTimeout(() => {
      //   this.sum += this.step;
      // }, 500);

      this.$store.dispatch("increamentDelay", this.step);
    },
  },
};
</script>
