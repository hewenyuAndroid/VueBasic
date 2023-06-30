<template>
  <ul class="todo-main">
    <!-- 
        1. 循环遍历 todos 数组，使用 todoObj.id 作为关键字
        2. 将列表中的每个对象 todoObj 传递个每个 item，然后item通过 props 属性接收
     -->
    <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: { TodoItem },
  data() {
    return {
      todos: [
        { id: "001", title: "抽烟", done: true },
        { id: "002", title: "喝酒", done: false },
        { id: "003", title: "烫头", done: true },
      ],
    };
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>