export default [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "homme" */ "@/views/common/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/common/About.vue")
  }
];
