<template>
  <div class="child">
    <h3>二级组件</h3>
    <Son />
  </div>
</template>

<script>
import Son from "./Son.vue";

export default {
  name: "Child",
  components: { Son },
};
</script>

<style>
.child {
  background-color: yellow;
  width: 100%;
  height: 160px;
  padding: 40px;
}
</style>