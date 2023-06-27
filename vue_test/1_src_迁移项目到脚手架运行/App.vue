<template>
  <div>
    <h2>测试脚手架代码</h2>
    <School />
    <Student />
    <School />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>