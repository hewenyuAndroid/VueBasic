<template>
  <div class="container">
    <category :title="游戏">
      <!--
        作用域插槽
        使用 scope="data" 接收子组件插槽传递过来的数据
        这里 data 的名称可以随便定义
        data对应的值为: data:{"games":{...}}
      -->
      <template scope="data">
        <ul>
          <li v-for="(game, index) in data.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </category>

    <category :title="游戏">
      <!--
        使用 slot-scope="{games}" 接收子组件插槽传递过来的数据
        这里直接使用对象接收，对象数据可以直接使用
      -->
      <template slot-scope="{games}">
        <ol>
          <li style="color: blue" v-for="(game, index) in games" :key="index">
            {{ game }}
          </li>
        </ol>
      </template>
    </category>

    <category :title="游戏">
      <!--
        使用 scope="data" 接收子组件插槽传递过来的数据
        这里直接使用对象接收
      -->
      <template scope="{games}">
        <ol>
          <li style="color: red" v-for="(game, index) in games" :key="index">
            {{ game }}
          </li>
        </ol>
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