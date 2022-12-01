<template>
  <div>
    <div>anther Count:{{count}}</div>
    <van-button type="primary" @click="addOne()">Add One</van-button>
    <p>可以支持类型！</p>
    <div>anther Count:{{count2}}</div>
    <van-button type="primary" @click="addOne2()">Add One</van-button>
  </div>

</template>

<script lang="ts">
import { ref, Ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const count2: Ref<number> = ref(100)
    const addOne = () => count.value++
    const addOne2 = () => count2.value++
    return {
      count, count2, addOne, addOne2
    }
  }
}

</script>

<style>
</style>