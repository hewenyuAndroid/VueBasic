<template>
  <div>
    <transition name="hello" appear="true">
      <h2 v-show="isShow">你好啊Test2</h2>
    </transition>
    <br />
    <button @click="isShow = !isShow">点击显示/隐藏文本</button>
  </div>
</template>

<script>
export default {
  name: "anim-test",
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

/*
组件进入过程动画
*/
.hello-enter-active {
  animation: in-out-anim 0.5s linear;
}

/*
组件离开过程动画
*/
.hello-leave-active {
  animation: in-out-anim 0.5s linear reverse;
}

/* 
定义一个动画，名字为 in-out-anim
*/
@keyframes in-out-anim {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>