<template>
  <div>
    <button>系统默认的button</button><input style="text" />
    <br />
    <br />

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <br />
    <br />

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <br />
    <br />
    <el-date-picker v-model="selectDate" type="date" placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectDate: "",
    };
  },
};
</script>
