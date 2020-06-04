import Vue from "vue";
import VueRouter from "vue-router";

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
      import(/* webpackChunkName: "my" */ "../views/home/header/positioning.vue")
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
    component:() =>
      import(
        /* webpackChunkName: "positioning" */ "../views/home/header/positioning.vue"
      )
  },
  {
    name: "/home/parameter",
    path: "/home/parameter",
    component:() =>
      import(
        /* webpackChunkName: "parameter" */ "../views/home/goods/parameter.vue"
      )
  },
  {
    name: "/home/searchgoods",
    path: "/home/searchgoods",
    component:() =>
      import(
        /* webpackChunkName: "searchgoods" */ "../views/home/header/searchgoods.vue"
      )
  },
  {
    name: "/home/evaluation",
    path: "/home/evaluation",
    component:() =>
      import(
        /* webpackChunkName: "evaluation" */ "../views/home/goods/evaluation.vue"
      )
  },
  {
    name: "/home/login",
    path: "/home/login",
    component:() =>
      import(
        /* webpackChunkName: "evaluation" */ "../views/login/index.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
