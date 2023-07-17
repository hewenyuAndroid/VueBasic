<template>
  <div class="school">
    <h2>名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>

    <button @click="sendName()">点击将name传递给App</button>
  </div>
</template>

<script>
export default {
  name: "SchoolInfo",
  props: ["sendNameToApp"],
  data() {
    return {
      name: "ccsu",
      address: "hangzhou",
    };
  },
  methods: {
    sendName() {
      this.sendNameToApp(this.name);
    },
  },
};
</script>

<style scoped>
.school {
  background-color: aqua;
}
</style>