<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义两个插槽 （具名插槽），==>挖个坑，等着组件的使用者填入内容 -->
    <slot name="center">这是 name=center 插槽默认显示的内容(使用者没有填充内容时显示)...</slot><br />
    <slot name="footer">这是 name=footer 插槽默认显示的内容(使用者没有填充内容时显示)...</slot>
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