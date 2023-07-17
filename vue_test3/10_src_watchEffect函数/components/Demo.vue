<template>
  <h2>当前求和为: {{ sum }}</h2>
  <br />
  <button @click="sum++">点击sum++</button>
  <br />
  <h2>msg: {{ msg }}</h2>
  <button @click="msg += '^'">点击msg+ ^</button>
  <br />
  <h2>
    person.name: {{ person.name }}<br />
    person.age: {{ person.age }}K<br />
  </h2>
  <br />
  <button @click="person.name += '^'">点击person.name+^</button>
  <button @click="person.age++">点击person.age+1</button>
  <br />
  <h2>
    job.members.count: {{ job.members.count }}<br />
    job.type: {{ job.type }}<br />
  </h2>
  <br />
  <button @click="job.members.count++">点击job.members.count+1</button>
  <button @click="job.type += '^'">点击job.type+^</button>
</template>

<script>
// 导入监视属性
import { reactive, ref, watch, watchEffect } from "vue";

export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0);
    let msg = ref("hello");
    // 这里使用 ref 创建的响应式数据是一个对象，refImpl 底层会通过 reactive 创建一个 proxy 对象作为 value
    // RefImpl.value = Proxy()
    let person = ref({
      name: "admin",
      age: 10,
    });

    // 对于基本类型数据 RefImpl.value = 具体值
    // 这里 相当于 监视 RemImpl 对象，其属性 value 发生变更后，可以被监视到
    watch(
      sum,
      (newValue, oldValue) => {
        console.log(
          `sum 数据发生了变更, oldValue=${oldValue}, newValue=${newValue}.`
        );
      },
      { immediate: true }
    );

    console.log("person=", person);

    // 对于对象类型数据 RefImpl.value = Proxy() 底层会调用 reactive 创建
    // 这里相当于监视 RefImpl 对象，默认情况下，只有 Proxy() 对象被替换后，才会触发监视属性
    // 可以通过如下两种方案监视 Proxy() 中属性的变更

    // 方案1: 直接监视 Proxy() 对象
    /*
    watch(person.value, (newValue, oldValue) => {
      // 同样，这里的 oldValue 也不能正确的获取到数据
      // person 对象的属性发生了变更, Proxy(Object) {name: 'admin^^', age: 10} Proxy(Object) {name: 'admin^^', age: 10}
      console.log("person 对象的属性发生了变更,", oldValue, newValue);
    });
    */

    // 方案2: 开启深度监视
    watch(
      person,
      (newValue, oldValue) => {
        // 同样，这里的 oldValue 也不能正确的获取到数据
        // person 对象的属性发生了变更, Proxy(Object) {name: 'admin^^', age: 10} Proxy(Object) {name: 'admin^^', age: 10}
        console.log("person 对象的属性发生了变更,", oldValue, newValue);
      },
      { deep: true }
    );

    let job = reactive({
      type: "开发",
      salary: 30,
      members: {
        count: 5,
        info: {
          age: 2,
        },
      },
    });

    /**
     * watchEffect内部使用到的属性会自动被监视
     */
    watchEffect(() => {
      // 使用到了sum
      const a = sum.value;
      // 这里 job 对象里面的其它字段变更，不会回调这个函数
      const b = job.members.count;
      console.log("watchEffect() 所指定的回调执行了");
    });

    // 返回对象
    return {
      sum,
      msg,
      person,
      job,
    };
  },
};
</script>

<style>
</style>
