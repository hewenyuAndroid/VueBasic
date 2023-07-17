<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为 {{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    persons() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    },
  },
  methods: {
    addPerson() {
      if (this.name.length <= 0) {
        alert("请输入名字");
        return;
      }
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("addPerson", personObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>