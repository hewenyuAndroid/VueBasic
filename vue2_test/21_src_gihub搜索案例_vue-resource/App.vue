<template>
  <div class="container">
    <search />
    <List />
  </div>
</template>

<script>
import List from "./components/List.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: { List, Search },
};
</script>

<style >

</style>