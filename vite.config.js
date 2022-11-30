import { createVuePlugin } from "vite-plugin-vue2"
import Components from "unplugin-vue-components/vite"
import { VantResolver } from "unplugin-vue-components/resolvers"

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
}
