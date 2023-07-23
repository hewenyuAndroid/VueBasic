<template>
  <div class="app">
    <h3>一级组件</h3>
    <Child />
  </div>
</template>

<script>
import { reactive, provide } from "vue";

import Child from "./components/Child.vue";

export default {
  name: "App",
  components: { Child },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.app {
  background-color: aqua;
  width: 100%;
  height: 300px;
  padding: 40px;
}
</style>
