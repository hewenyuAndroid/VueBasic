<template>
  <div class="student">
    <h2>姓名:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <button @click="sendName()">点击给School组件发送name</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "StudentInfo",
  data() {
    return {
      name: "zhangsan",
      age: 20,
    };
  },
  methods: {
    sendName() {
      console.log("perfrom student sendName.");
      // this.$bus.$emit("getStudentName", this.name);

      // 使用 pubsub 发送消息
      pubsub.publish("getStudentName", this.name);
    },
  },
};
</script>

<style scoped>
.student {
  background-color: yellow;
}
</style>