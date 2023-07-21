<template>
  <div class="app">
    <h3>一级组件: person={{ person }}</h3>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  readonly,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";

export default {
  name: "App",
  setup() {
    let sum = ref(0);
    // true
    console.log(`sum isRef=${isRef(sum)}`);

    let person = reactive({
      name: "张三",
      age: 20,
    });
    // true
    console.log(`person isReactive=${isReactive(person)}`);

    let p2 = readonly(person);
    // true
    console.log(`p2 is readonly=${isReadonly(p2)}`);

    // true
    console.log(`person isProxy=${isProxy(person)}`);
    // true
    console.log(`p2 isProxy=${isProxy(p2)}`);

    return { person };
  },
};
</script>

<style scoped>
.app {
  background-color: aqua;
  width: 300px;
  height: 300px;
  padding: 40px;
}
</style>
