<template>
  <div class="container">
    <Count />
    <br />
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";

export default {
  name: "App",
  components: { Count, Person },
  mounted() {
    // 这里打印 App 组件的 VC 对象，里面会出现 $store
    console.log("--->App", this);
  },
};
</script>
