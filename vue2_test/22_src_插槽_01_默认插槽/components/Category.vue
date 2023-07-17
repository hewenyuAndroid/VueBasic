<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽 （默认插槽），==>挖个坑，等着组件的使用者填入内容 -->
    <slot>这是插槽默认显示的内容...</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {},
  props: ["title"],
};
</script>

<style scoped>
.category {
  background-color: aqua;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
/**
插槽的样式也可以定义在组件中
*/
video {
  width: 100%;
}
</style>