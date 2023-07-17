<template>
  <div>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!-- 方案1: 跳转路由并携带 params 参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{
          msg.title
        }}</router-link
        >&nbsp;&nbsp; -->

        <!-- 方案2: 跳转路由并携带 params 参数， to 的对象写法 -->
        <router-link
          :to="{
            name: 'to_detail',  // 使用 to 的对象写法传递 params 参数时，需要使用 name 配置
            params: {
              id: msg.id,
              title: msg.title,
            },
          }"
          >{{ msg.title }}</router-link
        >
      </li>
    </ul>
    <br />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>

<style>
</style>