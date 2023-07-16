// .vue 文件高亮需要安装插件, 例如: vetur 作者: pine wu

<!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码 (数据，方法等)

// const school = Vue.extend({
//   name: "school",
//   data() {
//     return {
//       name: "ccsu",
//       address: "hangzhou",
//     };
//   },
// });
// export default school

// 简化1

// export default Vue.extend({
//   name: "school",
//   data() {
//     return {
//       name: "ccsu",
//       address: "hangzhou",
//     };
//   },
// });

// 简化2
export default {
  name: "school",
  data() {
    return {
      name: "ccsu",
      address: "hangzhou",
    };
  },
};

// 暴露对象给外部
// 方式1: export const school = Vue.extend(options)
// 方式2: export {school}
// 方式3: export default school
</script>

<style>
/* 组件的样式 */
.class {
  background-color: blue;
}
</style>
