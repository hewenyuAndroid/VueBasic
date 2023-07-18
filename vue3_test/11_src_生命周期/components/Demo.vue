<template>
  <h2>当前求和为: {{ sum }}</h2>
  <br />
  <button @click="sum++">点击sum++</button>
</template>

<script>
// 导入监视属性
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  onUpdated,
} from "vue";

export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0);

    console.log('perfrom setup()')

    // setup 里面的组合api回调函数会优于 外面的生命周期回调函数执行

    onBeforeMount(() => {
      console.log('perfrom api onBeforeMount')
    });

    onMounted(() => {
      console.log('perfrom api onMounted')
    });

    onBeforeUpdate(() => {
      console.log('perfrom api onBeforeUpdate')
    });

    onUpdated(() => {
      console.log('perfrom api onUpdated')
    });

    onBeforeUnmount(() => {
      console.log('perfrom api onBeforeUnmount')
    });

    onUnmounted(() => {
      console.log('perfrom api onUnmounted')
    });

    // 返回对象
    return {
      sum,
    };
  },
  beforeCreate() {
    console.log("perfrom vue2 beforeCreate.");
  },
  created() {
    console.log("perfrom vue2 created.");
  },
  beforeMount() {
    console.log("perfrom vue2 beforeMount.");
  },
  mounted() {
    console.log("perfrom vue2 mounted.");
  },
  beforeUpdate() {
    console.log("perform vue2 beforeUdpate");
  },
  updated() {
    console.log("perform vue2 updated");
  },
  beforeUnmount() {
    console.log("perform vue2 beforeUnmount");
  },
  unmounted() {
    console.log("perform vue2 unmounted");
  },
  beforeDestroy() {
    // 不执行了
    console.log("perform vue2 beforeDestroy");
  },
  destroyed() {
    // 不执行了
    console.log("perform vue2 destroyed");
  },
};
</script>

<style>
</style>
