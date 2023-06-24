<template>
    <div>
        <School/>
        <Student></Student>
    </div>
</template>

<script>
// 导入组件
import School from "./School.vue";
import Student from "./Student.vue";

export default {
  name: "App",
  components: {
    // 使用组件
    School,
    Student
  },
};
</script>
