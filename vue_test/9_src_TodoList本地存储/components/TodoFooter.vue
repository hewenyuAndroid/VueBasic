<template>
  <div class="todo-footer" v-show="totalCount">
    <label>
      <!-- 
        方案1
        checked 监听 isAll 数据来控制是否选中
        click 控制点击事件来变更数据
       -->
      <!-- <input type="checkbox" :checked="isAll" @click="clearAllTodo" /> -->

      <!-- 
        方案2
        使用 v-model
      -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ checkedCount }}</span> / 全部{{ totalCount }}
    </span>
    <button class="btn btn-danger" @click="clearCheckedTodo">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos", "clearAll", "clearCheckedTodo"],
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
    // 返回所有todo的数量
    totalCount() {
      return this.todos.length;
    },
    // isAll() {
    //   return this.checkedCount === this.totalCount;
    // },
    isAll: {
      // 使用 方案2需要监听 isAll 的set函数
      get() {
        return this.checkedCount === this.totalCount;
      },
      set(value) {
        console.log("isAll value=", value);
        this.clearAll(value);
      },
    },
  },
  methods: {
    // clearAllTodo(e) {
    //   const checked = e.target.checked;
    //   this.$props.clearAll(checked);
    // },
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