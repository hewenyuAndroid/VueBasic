<template>
  <h2>job={{ job }}</h2>
  <!-- 使用返回的对象方式 -->
  <br />
  <h2>job.type={{ job.type }}</h2>
  <br />
  <h2>job.salary={{ job.salary }}K</h2>
  <br />
  <h2>job.members.count={{ job.members.count }}</h2>
  <br />
  <button @click="job.type += '^'">点击job.type+^</button>
  <button @click="job.salary++">点击job.salary+^</button>
  <button @click="job.members.count++">点击job.members.count+1</button>

  <pr />
  <h2>ref x={{ x }}</h2>
  <br />
  <button @click="x++">ref包装基本数据类型 点击x++</button>

  <pr />
  <h2>shallowRef y={{ y }}</h2>
  <br />
  <button @click="y++">shallowRef包装基本数据类型 点击y++ (响应式有效)</button>

  <pr />
  <h2>shallowRef obj={{ obj.z }}</h2>
  <br />
  <button @click="obj.z++">
    shallowRef包装对象数据类型 点击obj.z++ (响应式无效)
  </button>
</template>

<script>
// 导入监视属性
import { reactive, shallowReactive, ref, shallowRef } from "vue";

export default {
  name: "Demo",
  setup() {
    // let job = reactive({
    // 这里使用 shallowReactive 函数，则：只有最外层的属性会有响应式，内部嵌套的对象不会有响应式
    let job = shallowReactive({
      type: "开发", // type 为最外层数据，此时还是会有响应式
      salary: 30,
      members: {
        count: 5, // count 数据变更，此时页面不会有变化
        info: {
          age: 2, // age 数据变更，此时页面不会有变化
        },
      },
    });

    const x = ref(0);
    // x = RefImpl
    console.log("ref 包装基本数据类型为响应式数据的类型为", x);

    const y = shallowRef(0);
    // y = RefImpl
    console.log("ref 包装基本数据类型为响应式数据的类型为", y);

    const obj = shallowRef({
      z: 0,
    });
    console.log("ref 包装对象数据类型为响应式数据的类型为", obj);

    // 返回对象
    return {
      job,
      x,
      y,
      obj,
    };
  },
};
</script>

<style>
</style>
