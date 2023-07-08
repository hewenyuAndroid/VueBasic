<template>
  <div class="container">
    <!-- 使用插槽，填充 img -->
    <category :title="美食">
      <!-- 向 name=center 的插槽填充数据 -->
      <img slot="center" src="./assets/vue_animation.png" alt="" />
      <!-- 向 name=footer 的插槽填充数据 -->
      <a slot="footer" href="https://www.baidu.com">更多分类</a>
    </category>
    <!-- 使用插槽，填充 列表 -->
    <category :title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div slot="footer">
        <!-- 子组件标签内部的代码，必须要指定插槽才会生效 -->
        <a href="https://www.baidu.com">单机游戏</a>
        <br />
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </category>
    <!-- 使用插槽，填充 电影 -->
    <category :title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      />
      <!-- 
        绑定插槽可以使用 v-slot:footer 的方式
        使用模板代码，这样解析到插槽的数据就会少一层包装
       -->
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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