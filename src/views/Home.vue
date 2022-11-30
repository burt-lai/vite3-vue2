<template>
  <div class="center">
    <h1 class="title">vite+vue2</h1>
    <p>{{ count }}</p>
    <p>
      <van-button type="default" @click="add()">Add One</van-button>
    </p>
    <p>
      <van-button type="primary" @click="request()">测试接口</van-button>
    </p>
    <van-button type="primary" @click="toast()">Show Dialog</van-button>
  </div>
</template>

<script>
import { Dialog } from "vant"
import { getUserName } from '@/api/user'

export default {
  name: "Home",
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    add() {
      this.count++
    },
    async request() {
      const res = await getUserName({ name: 'zhangsan' })
      console.log(res)
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
