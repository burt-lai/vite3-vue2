import { createVuePlugin } from "vite-plugin-vue2"
import Components from "unplugin-vue-components/vite"
import { VantResolver } from "unplugin-vue-components/resolvers"
import pxtovw from "postcss-px-to-viewport"
import autoprefixer from "autoprefixer"

const init_pxtovw = pxtovw({
  // 设计稿宽度
  viewportWidth: 375,
  viewportUnit: "vw",
})

export default {
  plugins: [
    createVuePlugin(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@/": "/src/", //格式一定要写对喽不然没有代码提示或者报错
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://baidu.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        init_pxtovw,
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
            //'last 2 versions', // 所有主流浏览器最近2个版本
          ],
          grid: true,
        }),
      ],
    },
  },
}
