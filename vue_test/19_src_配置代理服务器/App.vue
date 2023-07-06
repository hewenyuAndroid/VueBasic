<template>
  <div id="root">
    <button @click="requestStudent()">请求学生信息(方案1)</button>
    <button @click="requestStudent2()">请求学生信息(方案2)</button>
    <br />
    <span>{{ students }}</span>
    <br />
    <button @click="requestCars()">请求汽车信息</button>
    <br />
    <span>{{ cars }}</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      students: "",
      cars: "",
    };
  },
  methods: {
    // 代理方案1
    requestStudent() {
      axios.get("http://localhost:8080/students").then(
        (response) => {
          // 请求成功的回调
          console.log(`query students success, ${response.data}`);
          this.students = response.data;
        },
        (error) => {
          // 请求失败的回调
          console.log(`query students failure, ${error.message}`);
        }
      );
    },
    // 代理方案2
    requestStudent2() {
      axios.get("http://localhost:8080/api1/students").then(
        (response) => {
          // 请求成功的回调
          console.log(`query students success, ${response.data}`);
          this.students = response.data;
        },
        (error) => {
          // 请求失败的回调
          console.log(`query students failure, ${error.message}`);
        }
      );
    },

    requestCars() {
      axios.get("http://localhost:8080/test/cars").then(
        (response) => {
          // 请求成功的回调
          console.log(`query cars success, ${response.data}`);
          this.cars = response.data;
        },
        (error) => {
          // 请求失败的回调
          console.log(`query cars failure, ${error.message}`);
        }
      );
    },
  },
};
</script>
