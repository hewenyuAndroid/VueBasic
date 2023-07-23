<template>
  <div class="app">
    <h3>一级组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态加载
// import Child from "./components/Child.vue";

// 静态加载 defineAsyncComponent 函数
import { defineAsyncComponent } from "vue";

// 动态加载 Child 组件
const Child = defineAsyncComponent(() => import("./components/Child.vue"));

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
