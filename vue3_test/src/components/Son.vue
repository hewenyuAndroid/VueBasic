<template>
  <div class="son">
    <h3>三级组件</h3>
    <button @click="isShow = true">点击显示弹窗</button>
    <!--
      使用teleport包裹的html结构，可以放到指定位置加载
    -->
    <!-- <teleport to="#app"> </teleport> -->

    <!-- 这里会将 teleport 中的html结构放到 body 标签下加载 -->
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Son",
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
.son {
  background-color: blanchedalmond;
  width: 100%;
  height: 120px;
}
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 300px;
  height: 300px;
  background-color: chocolate;
}
</style>