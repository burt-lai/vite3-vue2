<template>
  <div>
    <div>Home Abc</div>
    <div class="box">box</div>
    <div class="flex">
      <div class="item">item</div>
      <div class="item">item</div>
      <div class="item">item</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAbc"
}
</script>

<style lang="scss">
.box {
  height: 200px;
  width: 375px;
  background-color: aqua;
}
.flex {
  display: flex;
}
</style>