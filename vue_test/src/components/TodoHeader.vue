<template>
  <div class="todo-header">
    <!-- 给输入框添加 回车键 的up事件监听 -->
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
// 导入 nanoid 库
import { nanoid } from "nanoid";

export default {
  name: "TodoHeader",
  // props 接收 App 层传递过来的 onReceiveTodo 函数
  props: ["onReceiveTodo"],
  methods: {
    // 键盘事件回调函数
    addTodo(event) {
      const content = event.target.value;
      // 过滤空字符串并提示
      if (!content.trim()) return alert("请输入内容");
      console.log("perform addTodo, value=", content);

      // 使用如下命令安装 nanoid: npm i nanoid

      // 封装对象, 使用 nanoid() 创建一个随机字符串作为id
      const todo = { id: nanoid(), title: content, done: false };
      console.log("perfrom addTodo todo=", todo);

      // 回调 todo 对象给 App
      this.onReceiveTodo(todo);

      // 清空控制台
      event.target.value = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>