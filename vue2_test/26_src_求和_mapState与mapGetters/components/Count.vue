  <template>
  <div>
    <!-- 这里将 sum 字段放到 store.state 中存储了，取值方式也需要调整为对应的位置 -->
    <!-- 
      将 $store.state 和 $store.getter 中的数据导入到计算属性后（mapState, mapGetters），可以直接使用名称（计算属性的名称）
    -->
    <h1>当前求和为{{ sum }}</h1>
    <h2>当前在 {{ school }} 学习 {{ subject }} 课程.</h2>

    <!-- 读取 getters 中的数据 -->
    <h2>当前求和放大10被后为{{ bigSum }}</h2>
    <select v-model.number="step">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option></select
    >&nbsp; <button @click="increament">+</button>&nbsp;
    <button @click="decreament">-</button>&nbsp;
    <button @click="increamentOdd">当前求和为奇数再加</button>&nbsp;
    <button @click="increamentDelay">延迟一会再加</button>&nbsp;
  </div>
</template>

<script>
// 导入 mapState mapGatters
import { mapState, mapGetters } from "vuex";

export default {
  name: "Count",
  mounted() {
    // 这里打印 Count 的 vc 对象，里面会出现 $store
    console.log("---->Count", this);
  },
  data() {
    return {
      step: 1, // 用户选择的操作步长
    };
  },
  computed: {
    // 开发自己写计算属性
    /*
    sum() {
      return this.$store.state.sum;
    },
    school() {
      return this.$store.state.school;
    },
    subject() {
      return this.$store.state.subject;
    },
    */

    // 导入 $store.state 属性-------------------------------------------------
    // 写法1: 对象写法
    // key: 组件中使用的名称
    // value: $store.state 中属性的名称
    // ...{}: 会将 computed 和 {} 里面的数据整合
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),

    // 写法2: 数组写法
    ...mapState(["sum", "school", "subject"]),

    // 导入 $store.getters 属性-------------------------------------------------
    // 写法1: 对象写法
    // key: 组件中使用的名称
    // value: $store.getter 中属性的名称
    // ...mapGetters({ bigSum: "bigSum" }),

    // 写法2: 数组写法
    ...mapGetters(['bigSum'])
  },
  methods: {
    increament() {
      // this.sum += this.step;
      // sum 存储在 store.state，需要将 increament 事件传入 actions
      // actions中保存了一批函数，通过函数名映射执行函数
      // 通过 store.dispatch() 将事件分发给 actions
      // 参数1 为 actions 中
      this.$store.dispatch("increament", this.step);
    },
    decreament() {
      // this.sum -= this.step;
      this.$store.dispatch("decreament", this.step);
    },
    increamentOdd() {
      // 取余为0则为false
      // if (this.sum % 2) {
      //   this.sum += this.step;
      // }

      this.$store.dispatch("increamentOdd", this.step);
    },
    increamentDelay() {
      // setTimeout(() => {
      //   this.sum += this.step;
      // }, 500);

      this.$store.dispatch("increamentDelay", this.step);
    },
  },
};
</script>
