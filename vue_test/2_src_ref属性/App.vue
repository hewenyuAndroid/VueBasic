<template>
  <div>
    <h2 ref="title">{{ msg }}</h2>
    <button ref="btn" @click="showDOM">点我输出DOM内容</button>
    <School ref="school" />
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "ref属性",
    };
  },
  methods: {
    showDOM() {
      // 输出真实 DOM 元素 => <h2>ref属性</h2>
      console.log(this.$refs.title);
      // 输出真实 DOM 元素 => <button>点我输出DOM内容</button>
      console.log(this.$refs.btn);
      // 输出 School 组件实例对象 vc
      console.log(this.$refs.school);
    },
  },
};
</script>