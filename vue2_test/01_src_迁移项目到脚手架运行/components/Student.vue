<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生年龄: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      name: "zhangsan",
      age: 20,
    };
  },
};
</script>

<style>
.student {
  background-color: aqua;
}
</style>