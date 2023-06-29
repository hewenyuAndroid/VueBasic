<template>
  <div>
    <School />
    <br />
    <Student />
  </div>
</template>

<script>
// 这里 Student 和 School 组件都声明了 class="demo" 的样式
// School 中的 demo 样式会覆盖 Student 中的样式
// 可以使用 scope 在组件的 style 中标记，防止冲突
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School, Student },
};
</script>

<style>
</style>