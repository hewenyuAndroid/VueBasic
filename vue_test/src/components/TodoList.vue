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
  props: ["todos"],
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