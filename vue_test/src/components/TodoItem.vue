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
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <!-- 
        todo处于编辑状态时显示输入框， 
        输入框失去焦点时 @blur，更新数据，回调函数需要传入原始的todo对象和输入框内容(通过事件对象传递)
      -->
      <input
        v-show="todo.isEdit"
        type="text"
        @blur="handBlur(todo, $event)"
        v-bind:value="todo.title"
        ref="editInput"
      />
    </label>
    <button class="btn btn-danger" @click="removeTodo(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="editTodo(todo)">
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

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
      // this.$bus.$emit("onReceiveUpdateChecked", value);

      // 使用消息订阅发送数据
      pubsub.publish("onReceiveUpdateChecked", value);
    },
    // 点击删除todo
    removeTodo(id) {
      console.log("perfrom delete todo, id=", id);
      if (confirm("是否确认删除?")) {
        // this.onReceiveRemove(id);
        // this.$bus.$emit("onReceiveRemove", id);

        pubsub.publish("onReceiveRemove", id);
      }
    },

    // 编辑todo
    editTodo(todo) {
      console.log("perfrom todo item edit, todo=", todo);
      if (todo.hasOwnProperty("isEdit")) {
        console.log("hasOwnProperty(isEdit) 属性存在");
        // 属性存在，直接修改 isEdit
        todo.isEdit = true;
      } else {
        console.log("hasOwnProperty(isEdit) 属性不存在");
        // 属性不存在，添加属性
        this.$set(todo, "isEdit", true);
      }

      // Vue 会在 整个回调函数执行完毕后更新模板
      // 这里如果直接写获取焦点的函数，会在 vue 解析模板之前执行该行代码，此时 vue 解析完成模板后，input框获取不到焦点
      // this.$refs.editInput.focus()

      // 使用 $nextTick 包装的函数会在 vue 下次解析模板之后执行
      this.$nextTick(function () {
        this.$refs.editInput.focus();
      });
    },

    // 输入框失去焦点时执行
    handBlur(todo, event) {
      // 修改编辑状态
      todo.isEdit = false;
      // 获取到输入框内容
      const newValue = event.target.value;
      console.log("handBlur, todo=", todo, ", newValue=", newValue);
      if (newValue.trim().length === 0) {
        console.log("输入框内容为空,本次 edit 作废。");
        return;
      }

      // 使用事件总线发送消息
      this.$bus.$emit("updateTodoTitle", todo.id, newValue);
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