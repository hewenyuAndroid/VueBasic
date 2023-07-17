<template>
  <li>
    <label>
      <!-- 
        复选框通过 done 字段判断是否默认选中
        通过监听 复选框的 change 变更来通知 App 层数据的变更,传入当前数据的id
     -->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="updateChecked(todo.id)"
      />
      <!-- 如下方式也能实现功能，但是不太推荐，有点违反原则，因为修改了 props -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <!-- 使用 props 接收到的数据显示 -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="removeTodo(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  // 接收 父组件传递过来的 数据和回调函数
  props: ["todo"],
  methods: {
    updateChecked(value) {
      console.log("perfrom updateChecked: id=", value);
      // 执行回调函数，通知父组件数据变更
      // this.onReceiveUpdateChecked(value);
      // 使用事件总线回调，通知 app 数据变更
      this.$bus.$emit("onReceiveUpdateChecked", value);
    },
    // 点击删除todo
    removeTodo(id) {
      console.log("perfrom delete todo, id=", id);
      if (confirm("是否确认删除?")) {
        // this.onReceiveRemove(id);
        this.$bus.$emit("onReceiveRemove", id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>