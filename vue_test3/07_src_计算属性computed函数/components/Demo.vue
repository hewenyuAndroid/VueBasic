<template>
  <h2>输入姓和名</h2>
  <h3>
    <input style="text" placeholder="请输入姓" v-model="person.firstName" />
    <br />
    <input style="text" placeholder="请输入姓" v-model="person.lastName" />
  </h3>
  <br />
  <h2>输入姓名</h2>
  <h3>
    <input style="text" placeholder="请输入姓名" v-model="person.fullName" />
  </h3>
  <br />
  <br />
  <span>姓名: {{ person.fullName }}</span>
  <br />
  <br />
</template>

<script>
// 导入计算属性
import { reactive, computed } from "vue";

export default {
  name: "Demo",
  setup(props, context) {
    let person = reactive({
      firstName: "zhang",
      lastName: "san",
    });

    // 声明一个计算属性
    // let fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    // 声明计算属性，然后直接给 person 增加一个属性 (简写方式，只有get)
    /*
    person.fullName = computed(() => {
      return person.firstName + "-" + person.lastName;
    });
    */

    // 声明计算属性，然后直接给 person 增加一个属性 (完整写法，get/set)
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const arr = value.split("-");
        person.firstName = arr[0];
        person.lastName = arr[1];
      },
    });

    // 返回对象
    return {
      person,
    };
  },
};
</script>

<style>
</style>
