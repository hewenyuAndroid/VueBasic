<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <br />
    <School />
    <br />
    <Student />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "全局事件总线",
    };
  },
};
</script>

<style>
.app {
  background-color: aquamarine;
}
</style>