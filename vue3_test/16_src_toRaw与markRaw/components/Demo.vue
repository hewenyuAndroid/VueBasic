<template>
  <h2>person={{ person }}</h2>
  <br />
  <button @click="person.name += '^'">点击person.name+^</button>
  <button @click="person.age++">点击person.age++</button>
  <br />
  <button @click="addCar">
    点击添加person.car属性对象 (默认添加的响应式数据)
  </button>
  <button v-show="person.car" @click="person.car.price++">
    点击person.car.price++ (响应式数据，可以++)
  </button>

  <br />
  <button @click="addJob">点击添加person.job属性对象 (markRaw)</button>
  <button v-show="person.job" @click="person.job.price++">
    点击person.job.price++ (非响应式数据, 不可以++)
  </button>

  <pr />
  <h2>toRawP={{ toRawP }}</h2>
  <button @click="toRawP.name += '^'">点击toRawP.name+^</button>
  <button @click="toRawP.age++">点击toRawP.age++</button>
</template>

<script>
// 导入监视属性
import { markRaw, reactive, toRaw } from "vue";

export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "zhangsan",
      age: 20,
    });

    function addCar() {
      let car = { name: "大众", price: 20 };
      // 这里添加的 car 为响应式对象
      person.car = car;
    }

    function addJob() {
      let job = { name: "搬砖", price: 30 };
      // 使用 markRaw 标记的对象为非响应式数据
      person.job = markRaw(job);
    }

    let toRawP = toRaw(person);

    // 返回对象
    return {
      person,
      addCar,
      addJob,
      toRawP,
    };
  },
};
</script>

<style>
</style>
