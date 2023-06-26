<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="show()">点击显示提示</button>
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
  background-color: aquamarine;
}
</style>