<template>
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始的 html 中使用 a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

          <!--
            Vue中借助 router-link 标签实现路由的切换
            使用 replace 设置路由的历史记录模式
          -->
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <!-- <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          > -->
          <!-- 使用命名路由跳转 -->
          <router-link
            class="list-group-item"
            active-class="active"
            :to="{ name: 'to_home' }"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- <h2>我是About的内容</h2> -->

            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  components: { Banner },
};
</script>
