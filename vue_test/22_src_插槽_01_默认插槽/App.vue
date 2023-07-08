<template>
  <div class="container">
    <!-- 使用插槽，填充 img -->
    <category :title="美食">
      <img src="./assets/vue_animation.png" alt="" />
    </category>
    <!-- 使用插槽，填充 列表 -->
    <category :title="游戏">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </category>
    <!-- 使用插槽，填充 电影 -->
    <category :title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </category>

    <!-- 没有使用插槽，则显示插槽默认的数据 -->
    <category />
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
  data() {
    return {
      // 插槽的数据定义在父组件中
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>

<style >
.container {
  display: flex;
  justify-content: space-around;
}
/*
插槽的样式可以定义在使用者
*/
img {
  width: 100%;
}
</style>