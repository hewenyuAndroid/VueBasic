<template>
  <div>
    <transition name="hello" appear="true">
      <h2 v-show="isShow">你好啊Test3</h2>
    </transition>

    <br />
    <br />

    <!-- 
      多个标签需要使用动画时，
      1. 需要用 transition-group 包裹 
      2. 每个标签都要设置 key
    -->
    <transition-group name="hello" appear>
      <h2 v-show="!isShow" key="1">你好啊Test3</h2>
      <h2 v-show="isShow" key="2">hello啊Test3</h2>
    </transition-group>
    <br />
    <button @click="isShow = !isShow">点击显示/隐藏文本</button>
  </div>
</template>

<script>
export default {
  name: "anim-test-3",
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

/* 进入的起点，离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

/* 进入的终点，离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0px);
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
</style>