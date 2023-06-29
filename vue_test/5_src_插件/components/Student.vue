<template>
  <div class="student">
    <h2>姓名:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
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
  background-color: bisque;
}
</style>