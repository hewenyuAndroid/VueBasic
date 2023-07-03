<template>
  <div>
    <h2 v-show="isShow" class="in test">你好啊</h2>
    <br />
    <button @click="isShow=!isShow">点击显示/隐藏文本</button>
  </div>
</template>

<script>
export default {
  name: "anim-test-1",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.test {
  background-color: aqua;
}

/*
使用动画进入，1s时常，线性动画
*/
.in {
  animation: in-out-anim 1s linear;
}
/*
使用动画退出，1s时常，线性动画
 */
.out {
  animation: in-out-anim 1s linear reverse;
}

/* 
定义一个动画，名字为 in-out-anim
*/
@keyframes in-out-anim {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>