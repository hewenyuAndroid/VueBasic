<template>
  <h2>当前求和为: {{ sum }}</h2>
  <br />
  <button @click="sum++">点击sum++</button>
  <br />
  <h2>msg: {{ msg }}</h2>
  <button @click="msg += '^'">点击msg+ ^</button>
  <br />
  <h2>
    工作类型为: {{ job.type }}<br />
    薪资为: {{ job.salary }}K<br />
    成员数量: {{ job.members.count }}<br />
    成员信息: {{ job.members.info.age }}<br />
  </h2>
  <br />
  <button @click="job.type += '^'">点击job.type+^</button>
  <button @click="job.salary++">点击job.salary+1</button>
  <button @click="job.members.count++">点击job.members.count+1</button>
  <button @click="job.members.info.age++">点击job.members.info.age+1</button>
</template>

<script>
// 导入监视属性
import { reactive, ref, watch } from "vue";

export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0);
    let msg = ref("hello");

    // 情况1: 监视 ref 所定义的的 一个 响应式数据
    /*
    watch(
      sum,
      (newValue, oldValue) => {
        console.log(
          `响应式数据 sum 变更了, oldValue=${oldValue}, newValue=${newValue}.`
        );
      },
      { immediate: true } // 支持传入第三个参数，配置监视属性: immediate:true 表示一加载就执行
    );
    */

    // 情况2: ref 所定义的 多个 响应式数据
    // 1. 监视对象使用数组传入
    // 2. 函数的参数 newValue, oldValue 也为为数组，每个index对应的属性与传入的顺序一致
    // 这里的多个是指一个 watch 监视多个，当然也可以使用 多个watch，每个watch监视一个属性
    watch(
      [sum, msg],
      (newValue, oldValue) => {
        // oldValue=[0, 'hello']
        // newValue=[1, 'hello']
        console.log(
          "响应式数据 sum 或 msg 变更了, oldValue=",
          oldValue,
          ", newValue=",
          newValue
        );
      },
      { immediate: true }
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

    // 情况3: 监视 reactive 所定义的一个响应式数据的 全部属性
    // 注意:
    // 1. 此处无法正确的获取 oldValue
    // 2. 强制开启了深度监视 (deep配置无效了)，即: job.members.count 发生变化也能被监视到
    /* 
    watch(
      job,
      (newValue, oldValue) => {
        // 这里不能正确的获取到 oldValue
        // newValue=oldValue=Proxy(Object) {"type":"开发","salary":30,"members":{"count":6,"info":{"age":2}}}
        console.log(
          "reactive job 数据发生了变更, oldValue=",
          JSON.stringify(oldValue),
          ",  newValue=",
          JSON.stringify(newValue)
        );
      },
      // 此处的 deep:false 配置无效
      { immediate: true, deep: false }
    );
    */

    // 情况4: 监视 reactive 所定义的一个响应式数据中的某个属性
    // 这里的 oldValue 能够正常返回
    /*
    watch(
      () => job.type,
      (newValue, oldValue) => {
        // reactvie job.type 数据发生了变更, oldValue=开发^, newValue=开发^^.
        console.log(
          `reactvie job.type 数据发生了变更, oldValue=${oldValue}, newValue=${newValue}.`
        );
      }
    );
    */

    // 情况5: 监视 reactive 所定义的一个响应式数据的某些属性
    watch([() => job.type, () => job.members.count], (newValue, oldValue) => {
      // 同样，这里的 oldValue 也能成功的获取到
      // oldValue=['开发^', 5]
      // newValue=['开发^', 6]
      console.log(
        `reactvie job.type 或 job.members.count 数据发生了变更, oldValue=${oldValue}, newValue=${newValue}.`
      );
    });

    // 特殊情况
    watch(
      () => job.members,
      (newValue, oldValue) => {
        console.log("reactive job.members 发生了变更", oldValue, newValue);
      },
      // 由于此处监视的是 reactive 所定义的某个属性，所以 deep 配置有效
      { deep: false }
    );

    // 返回对象
    return {
      sum,
      msg,
      job,
    };
  },
};
</script>

<style>
</style>
