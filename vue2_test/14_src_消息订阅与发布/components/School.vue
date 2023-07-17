<template>
  <div class="school">
    <h2>名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
    <h2>接收到StudentName: {{ studentName }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
  name: "SchoolInfo",
  props: ["sendNameToApp"],
  mounted() {
    // 绑定全局事件
    // this.$bus.$on("getStudentName", this.getStudentName);

    // 使用 pubsub 订阅消息
    this.pubId = pubsub.subscribe("getStudentName", this.getStudentName);
    console.log("School pubsub id = ", this.pubId);
  },
  beforeDestroy() {
    // 组件被销毁时，解绑全局事件
    // this.$bus.$off("getStudentName");

    // 组件被销毁时，解绑订阅的消息
    pubsub.unsubscribe("getStudentName", this.pubId);
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