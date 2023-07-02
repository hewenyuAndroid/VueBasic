<template>
  <div id="root">
    <Test />
    <br />
    <Test2 />
    <br />
    <Test3 />
    <br />
    <Test4 />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";
import Test3 from "./components/Test3.vue";
import Test4 from "./components/Test4.vue";

export default {
  name: "App",
  components: { Test, Test2, Test3, Test4 },
};
</script>
