<template>
  <div class="row">
    <!-- 用户信息item -->
    <div
      v-show="info.userList.length"
      class="card"
      v-for="user in info.userList"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 数据列表为空时显示 -->
    <h1 v-show="isShowEmpty()">搜索列表为空</h1>

    <!-- 首次加载显示 -->
    <h1 v-show="info.isFirst">欢迎使用。</h1>
    <!-- 加载中 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 加载错误 -->
    <h2>{{ info.errorMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errorMsg: "",
        userList: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("updateUserList", (dataObj) => {
      console.log("list receive data, data=", dataObj);
      // 合并 this.info 和 dataObj 中的数据
      // dataObj 中存在的使用 dataObj 中的字段
      // dataObj 中不存在的使用 this.info 中的数据
      this.info = { ...this.info, ...dataObj };
    });
  },
  methods: {
    isShowEmpty() {
      return (
        !this.info.isFirst &&
        !this.info.isLoading &&
        this.info.userList.length === 0
      );
    },
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>