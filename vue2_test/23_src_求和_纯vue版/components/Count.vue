<template>
  <div>
    <h1>当前求和为{{ sum }}</h1>
    <select v-model.number="step">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>&nbsp;
    <button @click="increament">+</button>&nbsp;
    <button @click="decreament">-</button>&nbsp;
    <button @click="increamentOdd">当前求和为奇数再加</button>&nbsp;
    <button @click="increamentDelay">延迟一会再加</button>&nbsp;
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      sum: 0, // 当前操作的结果值
      step: 1, // 用户选择的操作步长
    };
  },
  methods: {
    increament() {
      this.sum += this.step;
    },
    decreament() {
      this.sum -= this.step;
    },
    increamentOdd() {
      // 取余为0则为false
      if (this.sum % 2) {
        this.sum += this.step;
      }
    },
    increamentDelay() {
      setTimeout(() => {
        this.sum += this.step;
      }, 500);
    },
  },
};
</script>
