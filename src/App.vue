<template>
  <div>
    <p>用户名：{{userName}}</p>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters(['userName'])
  },
  created() {
    this.setUserName('三一重工')
  },
  methods: {
    ...mapActions(['setUserName'])
  }
}
</script>
