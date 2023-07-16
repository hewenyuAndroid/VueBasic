<template>
  <Demo @hello="helloEvent" param1="12" param2="34">
    <template v-slot:test>
      <h2>这是一个插槽的内容</h2>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";

export default {
  name: "App",
  components: { Demo },
  setup() {
    function helloEvent(value) {
      alert(`app 组件接收到了 hello 事件，param=${value}`);
    }
    return { helloEvent };
  },
};
</script>

<style>
</style>
