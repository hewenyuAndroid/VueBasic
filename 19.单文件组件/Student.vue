// .vue 文件高亮需要安装插件, 例如: vetur 作者: pine wu

<template>
  <div>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生年龄: {{ age }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码 (数据，方法等)
export default {
  name: "Student",
  data() {
    return {
      name: "zhangsan",
      age: 20,
    };
  },
};
</script>

