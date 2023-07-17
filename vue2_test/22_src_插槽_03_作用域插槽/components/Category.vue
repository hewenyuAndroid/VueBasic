<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 
      定义一个插槽 ，==>挖个坑，等着组件的使用者填入内容
      通过插槽将子组件的数据传递给父组件 :key="value" 这里 key 的名称可以随意定义
     -->
    <slot :games="games" msg="hello" >这是插槽默认显示的内容(使用者没有填充内容时显示)...</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      // 插槽的数据定义在子组件中
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
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