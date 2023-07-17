<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeRouteEnter(to, from, next) {
    console.log(
      "---->perform beforeRouteEnter: from=",
      from,
      ", to=",
      to,
      ", next=",
      next
    );
    if (to.meta.isAuth) {
      // 如果目标路由配置了 需要认证
      console.log("auth path = ", to.fullPath);
      if (localStorage.getItem("account") === "admin") {
        // 如果当前缓存的account 是 admin 则跳转
        next();
      } else {
        alert("当前缓存的不是admin账号,暂无权限.");
      }
    } else {
      // 没有配置的直接跳转
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log(
      "---->perform beforeRouteLeave: from=",
      from,
      ", to=",
      to,
      ", next=",
      next
    );
    next();
  },
};
</script>

<style>
</style>