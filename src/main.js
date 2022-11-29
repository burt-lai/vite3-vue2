// main.js
import Vue from "vue"
import App from "./App.vue"

// 引入函数组件的样式（其他的已经自动导入了）
import "vant/es/toast/style"
import "vant/es/dialog/style"
import "vant/es/notify/style"
import "vant/es/image-preview/style"

console.log(import.meta.env)

new Vue({
  el: "#app",
  render: (h) => h(App),
}).$mount()
