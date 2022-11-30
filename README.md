# 简介
vite3 + vue2 + vant2

## 功能
- [x] vite3 构建工具
- [x] vue2 前端框架
- [x] vant2 移动端UI库
- [x] vue-router@3 路由管理
- [x] vuex3 状态管理库
- [x] axios 请求库
- [x] scss css预处理库
- [x] postcss 自动添加浏览器厂商前缀
- [x] 移动端适配 自动转换px为vw
- [x] UI自动分包导入
- [x] 多环境
- [x] 配置alias
- [x] 配置proxy

## 使用vant2

注意事项：
  Vant 中有个别组件是以函数的形式提供的，包括 Toast，Dialog，Notify 和 ImagePreview 组件。在使用函数组件时，unplugin-vue-components 无法自动引入对应的样式，因此需要手动引入样式。