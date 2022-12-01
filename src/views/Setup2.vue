<template>
  <div>
    <h3>不支持 script setup，报错！</h3>
    <div>anther Count:{{count}}</div>
    <van-button type="primary" @click="addOne()">Add One</van-button>
  </div>

</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const addOne = () => count.value++
</script>

<style>
</style>