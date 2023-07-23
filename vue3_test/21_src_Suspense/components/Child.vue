<template>
  <div class="child">
    <h3>二级组件</h3>
    <h3>sum:{{ sum }}</h3>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Child",
  setup() {
    let sum = ref(0);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum });
      }, 2000);
    });
  },
};
</script>

<style>
.child {
  background-color: yellow;
  width: 100%;
  height: 160px;
  padding: 40px;
}
</style>