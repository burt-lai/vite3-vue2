# 项目模板简介

`vite3` + `vue2` + `vant2` + `scss` + `vue-router3` + `axios`

- 不用 `vue3` 是因为 `mpaas` 只支持 `vue2`。`vue2`对`ts`不友好，所以还是用 js 吧。
- 支持`vue2`的`vant`库版本为`vant2`，其他更高版本都是支持`vue3`的，所以我们使用`vant2`。
- 已经配置了自动格式化，`vue`文件使用`vetur`，其他文件默认使用`prettier`。(必须在`vs code`打开才生效，且项目文件夹为工作目录！)
- 为啥不用`yarn` or `pnpm`，主要是耀哥、源哥等几个大佬对前端不是很熟，就用`npm`就好，否则我会优先推荐使用`pnpm`。

## 功能

- [x] vite3 构建工具
- [x] vue2 前端框架
- [x] vant2 移动端 UI 库
- [x] vue-router@3 路由管理
- [x] vuex3 状态管理库
- [x] axios 请求库
- [x] scss css 预处理库
- [x] postcss 自动添加浏览器厂商前缀
- [x] 移动端适配 自动转换 px 为 vw
- [x] UI 自动分包导入
- [x] 多环境
- [x] 配置 alias
- [x] 配置 proxy

## 运行

- 安装依赖 `npm i`
- 运行 `npm run dev`
- 打包 `npm run build`

## 参考链接

[vue2 官方文档](https://v2.cn.vuejs.org/v2/guide/)
[vant2 风格指南](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/style-guide)