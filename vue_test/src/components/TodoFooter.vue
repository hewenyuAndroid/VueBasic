<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span>
      <span>已完成{{ checkedCount }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos"],
  computed: {
    checkedCount() {
      // // reduce 函数
      // // pre: 上一次遍历的返回值
      // // todo: 当前遍历的对象
      // // 0: 从0开始计数
      // return this.todos.reduce((pre, todo) => {
      //   // 首次 pre=0
      //   // 后续 done == true 时返回 pre+1 否则返回pre
      //   return pre + (todo.done ? 1 : 0);
      // }, 0);
      
      // 上述方式简写
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>