<template>
  <input type="text" v-model="keywords" />
  <h2>{{ keywords }}</h2>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 使用 vue 提供的默认响应式数据
    // let keywords = ref("hello");

    // 自定义ref
    function myRef(value) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`perform myRef get, value=${value}`);
            // get() 函数中必须调用 trace() 来表明需要捕获 value 数据的变更，此时才会在数据变更时，通知模板解析
            track();
            return value; // 返回value
          },
          set(newValue) {
            console.log(`perform myRef set, newValue=${newValue}`);
            // // 接收数据
            // value = newValue;
            // // 通知vue重新解析模板
            // trigger();

            // 延迟并防抖更新页面
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger();
            }, 1000);
          },
        };
      });
    }
    // 使用自定义的 myRef 创建响应式数据
    let keywords = myRef("hello");
    return { keywords };
  },
};
</script>
