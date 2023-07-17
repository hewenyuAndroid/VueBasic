<template>
  <div>
    <!-- 配置项默认为 String 类型，如果有其他类型，需要使用 v-bind (:) 将内容标记为 表达式 -->
    <School name="ccsu" address="hangzhou" v-bind:count="10 + 1"></School>
    <br />
    <School name="ccsu2" address="changsha" :count="30 + 1" />
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School },
};
</script>