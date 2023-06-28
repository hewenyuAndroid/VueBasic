<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <h2>学生人数: {{ count }}</h2>
  </div>
</template>

<script>
export default {
  name: "SchoolInfo",
  // data中的属性名称不能和 props 配置项中的名称冲突
  //   data() {
  //     return {
  //       name: "ccsu",
  //       address: "hangzhou",
  //       count: 20,
  //     };
  //   },

  data() {
    return {
      // 配置项会优先于 data 加载，因此可以在 data 中读取配置项数据
      // 由于配置项中的数据是只读的，因此如果想要在业务中使用并修改数据，可以借助使用 data 中的属性实现，方案如下
      // 1. 在data中配置一个属性读取配置项数据
      // 2. 业务中使用 data 中的属性值
      // 3. 修改data中的属性值
      showName: this.name,
    };
  },

  // 使用配置项方案1: 此时读取的所有配置项字段都是 字符串类型
  //   props: ["name", "address", "count"],

  // 使用配置项方案2: 可以指定配置项数据类型
  //   props: {
  //     name: String,
  //     address: String,
  //     count: Number,  // 此时需要在使用属性的地方使用 v-bind 将标签内容设置为表达式，否则默认为 String
  //   },

  // 使用配置项方案3: 可以指定配置项数据类型，必要性，默认值，过滤条件
  props: {
    name: {
      type: String, // 标记类型为String
      require: true, // 必要性 (是否必传)
    },
    address: {
      type: String,
      default: "ccsu", // 设置默认值
    },
    count: {
      type: Number,
      validator: function (value) {
        // 自定义验证函数
        return value > 10;
      },
    },
  },
};
</script>

<style>
.school {
  background-color: aqua;
}
</style>