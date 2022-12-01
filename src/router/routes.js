export default [
  {
    path: "/",
    component: () => import("@/layouts/index.vue"),
    redirect: "/home",
    meta: {
      title: "首页",
      keepAlive: false,
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: { title: "首页", keepAlive: false },
      },
      {
        path: "/home-abc",
        name: "HomeAbc",
        component: () => import("@/views/HomeAbc.vue"),
        meta: { title: "abc", keepAlive: false },
      },
      {
        path: "/setup",
        name: "Setup",
        component: () => import("@/views/Setup.vue"),
        meta: { title: "abc", keepAlive: false },
      },
      {
        path: "/setup2",
        name: "Setup2",
        component: () => import("@/views/Setup2.vue"),
        meta: { title: "abc", keepAlive: false },
      },
    ],
  },
]
