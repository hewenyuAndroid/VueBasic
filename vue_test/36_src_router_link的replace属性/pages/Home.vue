<template>
  <!-- <h2>我是Home的内容</h2> -->

  <div>
    <ul class="nav nav-tabs">
      <li>
        <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
        <!--
          修改为二级路由
        -->
        <router-link
          class="list-group-item"
          active-class="active"
          replace
          to="/home/news"
          >News</router-link
        >
      </li>
      <li>
        <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->

        <router-link
          class="list-group-item"
          replace
          active-class="active"
          to="/home/message"
          >Message</router-link
        >
      </li>
    </ul>

    <!-- 显示路由视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>