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
  <!-- 使用返回的属性修改 -->
  <h2>toRef(type, 'type')={{ type }}</h2>
  <br />
  <h2>toRef(job, 'salary')={{ salary }}K</h2>
  <br />
  <h2>toRef(job.members, 'count')={{ count }}</h2>
  <br />
  <button @click="type += '^'">点击 type+^</button>
  <button @click="salary++">点击 salary+^</button>
  <button @click="count++">点击 count+1</button>
</template>

<script>
// 导入监视属性
import { reactive, toRef, toRefs } from "vue";

export default {
  name: "Demo",
  setup() {
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

    // 使用 toRef 将 job 对象中的 type 属性转换为与job对象相关联的响应式数据
    const a = toRef(job, "type");
    console.log("job toRef type, value=", a);
    // 使用 toRefs 会将 job 中的所有直接属性转换为与job对象相关联的响应式数据
    const x = toRefs(job);
    console.log("job toRefs, value=", x);

    // 返回对象
    return {
      job,
      // 使用 toRef 将 job 对象中的某个属性包装成响应式数据，然后与 job 对象相关联
      // type: toRef(job.type)  这个方式是错误的
      type: toRef(job, "type"),
      salary: toRef(job, "salary"),
      count: toRef(job.members, "count"),
    };
  },
};
</script>

<style>
</style>
