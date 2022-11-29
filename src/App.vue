<template>
  <div>
    <h1>vite+vue2</h1>
    <p>{{ count }}</p>
    <button @click="add()">Add</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style></style>
