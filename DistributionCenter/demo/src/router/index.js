import Vue from "vue";
import VueRouter from "vue-router";
// import home from "../views/Home/home.vue";

Vue.use(VueRouter);
// 这里写底部切换的不同视口路径
const HomeChildren =[
  {
    path: "/home/about",
    name: "/home/about",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/home",
    name: "/home/about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../layout/layout.vue"),
    children: HomeChildren
  }
];

const router = new VueRouter({
  routes
});

export default router;
