<template>
  <div class="center">
    <h1 class="title">vite+vue2</h1>
    <p>{{ count }}</p>
    <van-button type="default" @click="add()">Add One</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <van-button type="primary" @click="toast()">Show Dialog</van-button>
  </div>
</template>

<script>
import { Dialog } from "vant"

export default {
  name: "App",
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    add() {
      this.count++
    },
    toast() {
      // Dialog({ message: "提示" })
      Dialog.alert({
        title: "标题",
        message: "弹窗内容",
      }).then(() => {
        // on close
      })
    },
  },
}
</script>

<style scoped lang="scss">
.center {
  text-align: center;
}
.title {
  color: blueviolet;
  text-align: center;
}
</style>
