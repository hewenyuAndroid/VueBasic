<template>
  <div class="app">
    <h3>一级组件: person={{ person }}</h3>
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
    let person = reactive({
      name: "张三",
      age: 20,
    });

    // 使用 provide 传递数据
    provide("person", person);
    return { person };
  },
};
</script>

<style scoped>
.app {
  background-color: aqua;
  width: 300px;
  height: 300px;
  padding: 40px;
}
</style>
