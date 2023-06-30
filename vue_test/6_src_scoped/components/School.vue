<template>
  <div class="demo">
    <h2>名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
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
};
</script>

<!-- 不同组件之间的class可能重名，出现冲突，可以使用 scope 标记该 style 只在当前 组件中生效 -->
<style scoped>
.demo {
  background-color: aqua;
}
</style>