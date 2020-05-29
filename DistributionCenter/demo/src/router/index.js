import Vue from "vue";
import VueRouter from "vue-router";
// import home from "../views/Home/home.vue";

Vue.use(VueRouter);
// 这里写底部切换的不同视口路径
const HomeChildren =[
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "../views/home/index.vue")
  },
  {
    path: "/class",
    name: "class",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/class/index.vue")
  },
  {
    path: "/kill",
    name: "kill",
    component: () => import(/* webpackChunkName: "about" */ "../views/kill/index.vue")
  },
  {
    path: "/car",
    name: "car",
    component: () => import(/* webpackChunkName: "about" */ "../views/car/index.vue")
  },
  {
    path: "/my",
    name: "my",
    component: () => import(/* webpackChunkName: "about" */ "../views/my/index.vue")
  },
];

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../layout/layout.vue"),
    children: HomeChildren
  }
];

const router = new VueRouter({
  routes
});

export default router;
