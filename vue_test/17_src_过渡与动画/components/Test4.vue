<template>
  <div>
    <transition
      appear="true"
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutLeft"
    >
      <h2 v-show="isShow">你好啊Test4</h2>
    </transition>
    <br />
    <button @click="isShow = !isShow">点击显示/隐藏文本</button>
  </div>
</template>

<script>
// npm install animate.css
import "animate.css";

export default {
  name: "anim-test-4",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h2 {
  background-color: aqua;
}
</style>