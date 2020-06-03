import Vue from "vue";
import VueRouter from "vue-router";
import positionings from "../views/home/header/positioning.vue";

Vue.use(VueRouter);
//这里写home页面切换的不同视口路径
// 这里写底部切换的不同视口路径
const bottomChildren = [
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/index.vue")
  },
  {
    path: "/class",
    name: "class",
    component: () =>
      import(/* webpackChunkName: "class" */ "../views/class/index.vue")
  },
  {
    path: "/kill",
    name: "kill",
    component: () =>
      import(/* webpackChunkName: "kill" */ "../views/kill/index.vue")
  },
  {
    path: "/car",
    name: "car",
    component: () =>
      import(/* webpackChunkName: "car" */ "../views/car/index.vue")
  },
  {
    path: "/my",
    name: "my",
    component: () =>
      import(/* webpackChunkName: "my" */ "../views/my/index.vue")
  }
];

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../layout/layout.vue"),
    children: bottomChildren
  },
  {
    name: "/home/positioning",
    path: "/home/positioning",
    component: positionings
  }
];

const router = new VueRouter({
  routes
});

export default router;
