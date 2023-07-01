<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 在 App 层将 onReceiveTodo 函数传递给 TodoHeader 组件 -->
        <TodoHeader :onReceiveTodo="onReceiveTodo" />
        <!-- 在 App 层将 todos 列表传递给 TodoList 组件 -->
        <TodoList
          :todos="todos"
          :onReceiveUpdateChecked="onReceiveUpdateChecked"
          :onReceiveRemove="onReceiveRemove"
        />
        <TodoFooter :todos="todos" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoList from "./components/TodoList.vue";
export default {
  name: "App",
  components: { TodoHeader, TodoFooter, TodoList },
  data() {
    return {
      todos: [
        { id: "001", title: "抽烟", done: true },
        { id: "002", title: "喝酒", done: false },
        { id: "003", title: "烫头", done: true },
      ],
    };
  },
  methods: {
    // 添加 todo 回调函数
    onReceiveTodo(value) {
      // 1. 接收到 todo 对象
      console.log("perfrom app addTodo method, value=", value);
      // 2. 插入数据到 todos 列表第一条
      this.todos.unshift(value);
      // 3. vue感知到数据变更后，重新解析模板，此时 todos 已经变更，所以页面会刷新
    },
    // 复选框变更回调函数
    onReceiveUpdateChecked(id) {
      console.log("perfrom app onReceiveUpdateChecked: value=", id);
      // 接收到 TodoItem 传过来的数据变更
      this.todos.forEach((todo) => {
        // 根据id找到数据，然后取反
        if (todo.id === id) todo.done = !todo.done;
      });
      // 由于 todos 数据变更，vue会重新解析模板
    },
    // 删除todo事件回调
    onReceiveRemove(id) {
      console.log("perfrom app onReceive remove, id=", id);
      // 过滤出 id 不相同的todo，然后重新给 todos 数组赋值
      // todos数据变更，vue会重新解析模板
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>