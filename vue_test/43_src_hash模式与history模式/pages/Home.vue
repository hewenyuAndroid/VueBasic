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
          to="/home/news"
          >News</router-link
        >
      </li>
      <li>
        <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->

        <router-link
          class="list-group-item"
          active-class="active"
          to="/home/message"
          >Message</router-link
        >
      </li>
    </ul>

    <!-- 显示路由视图 -->
    <!-- 缓存 <router-view> 上显示的所有组件 -->
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->

    <!-- 只缓存 router-view 上的 News 组件，News 为组件的名称 -->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>