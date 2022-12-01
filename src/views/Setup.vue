<template>
  <div>
    <div>anther Count:{{count}}</div>
    <van-button type="primary" @click="addOne()">Add One</van-button>
    <p>可以支持类型！</p>
    <div>anther Count:{{count2}}</div>
    <van-button type="primary" @click="addOne2()">Add One</van-button>
    <p>interface</p>
    <p>User Name:{{user.name}}</p>
    <p>User Age:{{user.age}}</p>
    <Child />
    <p>{{str}}</p>
  </div>

</template>

<script lang="ts" name="SetupPage">
import { ref, Ref, reactive } from 'vue'
import { titleStr } from '@/utils/index'
import Child from './Child.vue'
interface User {
  name: string
  age: number
}
export default {
  components: { Child },
  setup() {
    const count = ref(0)
    const count2: Ref<number> = ref(100)
    const addOne = () => count.value++
    const addOne2 = () => count2.value++
    const user: User = reactive({ name: '张三', age: 10 })
    const str = titleStr('abc')
    return {
      count, count2, addOne, addOne2, user, Child, str
    }
  }
}

</script>

<style>
</style>