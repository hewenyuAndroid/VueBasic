<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="show()">点我显示弹窗</button>
  </div>
</template>

<script>
export default {
  name: "SchoolInfo",
  data() {
    return {
      name: "ccsu",
      address: "hangzhou",
    };
  },
  methods: {
    show() {
      alert(this.name);
    },
  },
};
</script>

<style>
.school {
  background-color: aqua;
}
</style>