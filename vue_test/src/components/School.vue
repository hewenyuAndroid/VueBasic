<template>
  <div class="school">
    <h2>名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
    <h2>接收到StudentName: {{ studentName }}</h2>
  </div>
</template>

<script>
export default {
  name: "SchoolInfo",
  props: ["sendNameToApp"],
  mounted() {
    // 绑定全局事件
    this.$bus.$on("getStudentName", this.getStudentName);
  },
  beforeDestroy() {
    // 组件被销毁时，解绑全局事件
    this.$bus.$off("getStudentName");
  },
  data() {
    return {
      name: "ccsu",
      address: "hangzhou",
      studentName: "",
    };
  },
  methods: {
    getStudentName(value) {
      console.log("perfrom School getStudentName(), value=", value);
      this.studentName = value;
    },
  },
};
</script>

<style scoped>
.school {
  background-color: aqua;
}
</style>