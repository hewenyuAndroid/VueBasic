<template>
  <h2>当前求和为: {{ sum }}</h2>
  <br />
  <button @click="sum++">点击sum++</button>
  <pr />
  <h2>当前鼠标点击坐标为: x={{ point.x }}, y={{ point.y }}</h2>
</template>

<script>
// 导入监视属性
import { ref } from "vue";

import usePoint from "../hooks/usePoint";

export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    // 使用 point
    let point = usePoint();

    // 返回对象
    return {
      sum,
      point,
    };
  },
};
</script>

<style>
</style>
