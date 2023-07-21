<template>
  <h2>ref x={{ x }}</h2>
  <button @click="x++">点击x++</button>

  <h2>readonly ref y={{ y }}</h2>
  <button @click="y++">点击y++ (readonly后，数据y无法被修改)</button>

  <h2>shallowReadonly ref z={{ z }}</h2>
  <button @click="z++">点击z++ (shallowReadonly后，数据z无法被修改)</button>

  <pr />

  <h2>readonlyJob={{ readonlyJob }}</h2>
  <br />
  <h2>readonlyJob.type={{ readonlyJob.type }}</h2>
  <br />
  <h2>readonlyJob.salary={{ readonlyJob.salary }}K</h2>
  <br />
  <h2>readonlyJob.members.count={{ readonlyJob.members.count }}</h2>
  <br />
  <button @click="readonlyJob.type += '^'">点击readonlyJob.type+^</button>
  <button @click="readonlyJob.salary++">点击readonlyJob.salary+^</button>
  <button @click="readonlyJob.members.count++">
    点击readonlyJob.members.count+1
  </button>

  <pr />

  <h2>shallowReadonlyJob={{ shallowReadonlyJob }}</h2>
  <br />
  <h2>shallowReadonlyJob.type={{ shallowReadonlyJob.type }}</h2>
  <br />
  <h2>shallowReadonlyJob.salary={{ shallowReadonlyJob.salary }}K</h2>
  <br />
  <h2>shallowReadonlyJob.members.count={{ shallowReadonlyJob.members.count }}</h2>
  <br />
  <button @click="shallowReadonlyJob.type += '^'">点击shallowReadonlyJob.type+^</button>
  <button @click="shallowReadonlyJob.salary++">点击shallowReadonlyJob.salary+^</button>
  <button @click="shallowReadonlyJob.members.count++">
    点击shallowReadonlyJob.members.count+1
  </button>
</template>

<script>
// 导入监视属性
import { reactive, ref, readonly, shallowReadonly } from "vue";

export default {
  name: "Demo",
  setup() {
    const x = ref(0);
    let y = ref(0);
    // 使用 readonly 包装 y 之后，覆盖 y 对象
    y = readonly(y);
    // 使用 shallowReadonly 包装 z 之后，覆盖 z 对象
    let z = ref(0);
    z = shallowReadonly(z);

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

    // 使用 readonly 返回的 深只读对象
    // 此时: job 的直接属性，属性对象的属性都是只读的
    let readonlyJob = readonly(job);

    // 使用 shallowReadonly 返回的 浅只读对象
    // 此时: job 的直接属性是只读的，属性对象的属性依然是可读可写的
    let shallowReadonlyJob = shallowReadonly(job);

    // 返回对象
    return {
      job,
      x,
      y,
      z,
      readonlyJob,
      shallowReadonlyJob,
    };
  },
};
</script>

<style>
</style>
