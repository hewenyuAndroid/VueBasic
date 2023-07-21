<template>
  <div class="son">
    <h3>三级组件</h3>
    <h5>使用inject接收到数据: person={{ person }}</h5>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Son",
  setup() {
    let person = inject("person");
    return { person };
  },
};
</script>

<style>
.son {
  background-color: blanchedalmond;
  width: 120px;
  height: 120px;
}
</style>