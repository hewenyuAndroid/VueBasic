<template>
  <Demo v-if="isShow" />
  <br />
  <br />
  <button @click="isShow = !isShow">隐藏/显示Demo组件</button>
</template>

<script>
import Demo from "./components/Demo.vue";

import { ref } from "vue";

export default {
  name: "App",
  components: { Demo },
  setup() {
    let isShow = ref(true);
    return { isShow };
  },
};
</script>

<style>
</style>
