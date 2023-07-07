<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keywords"
      />&nbsp;<button @click="searchUsers()">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    searchUsers() {
      if (this.keywords.trim().length <= 0) {
        alert("请输入搜索内容");
        return;
      }
      // 请求前更新页面状态
      this.$bus.$emit("updateUserList", {
        isLoading: true,
        isFirst: false,
        userList: [],
        errorMsg: "",
      });
      const keywords = this.keywords;
      console.log(`perfrom search: keywords=${keywords}`);
      axios.get(`https://api.github.com/search/users?q=${keywords}`).then(
        (response) => {
          console.log("success, response=", response.data);
          // 完整写法
          //   this.$bus.$emit("updateUserList", {
          //     isLoading: false,
          //     isFirst: false,
          //     userList: response.data.items,
          //     errorMsg: "",
          //   });

          // 函数接收的地方使用了数据合并，可以只传关键数据
          this.$bus.$emit("updateUserList", {
            isLoading: false,
            userList: response.data.items,
            errorMsg: "",
          });
        },
        (error) => {
          console.log("failure, error=", error.message);
          this.$bus.$emit("updateUserList", {
            isLoading: false,
            isFirst: false,
            userList: [],
            errorMsg: error.message,
          });
        }
      );
    },
  },
};
</script>

<style scoped>
</style>