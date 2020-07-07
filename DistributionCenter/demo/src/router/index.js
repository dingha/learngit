import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 这里写class页面切换的不同视口路径
const classChildren = [{
    path: "/class/category",
    name: "class/category",
    component: () =>
      import( /* webpackChunkName: "class" */ "../views/class/category.vue")
  },
  {
    path: "/class/space",
    name: "class/space",
    component: () =>
      import( /* webpackChunkName: "class" */ "../views/class/space.vue")
  },
  {
    path: "/class/style",
    name: "class/style",
    component: () =>
      import( /* webpackChunkName: "class" */ "../views/class/style.vue")
  }
]

// 这里写car页面切换的不同视口路径
const carChildren = [{
    path: "/car/Thereare",
    name: "car/Thereare",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/car/Thereare.vue")
  },
  {
    path: "/car/editor",
    name: "car/editor",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/car/editor.vue")
  }
]


// 这里写底部切换的不同视口路径
const bottomChildren = [{
    path: "/home",
    name: "home",
    component: () =>
      import( /* webpackChunkName: "home" */ "../views/home/index.vue"),
  },
  {
    path: "/class",
    name: "class",
    redirect: "/class/category",
    component: () =>
      import( /* webpackChunkName: "class" */ "../views/class/index.vue"),
    children: classChildren
  },
  {
    path: "/car",
    name: "car",
    redirect: e => {
      const {
        query
      } = e;
      switch (query.name) {
        case "/car/Thereare":
          return "/car/Thereare";
        case "/car/confirm":
          return "/car/confirm";
        case "/car/editor":
          return "/car/editor";
        case "/car/messageboard":
          return "/car/messageboard";
        case "/car/payment":
          return "/car/payment";
        default:
          return "/car/Thereare";
      }
    },
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/car/index.vue"),
    children: carChildren
  },
  {
    path: "/car/messageboard",
    name: "car/messageboard",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/car/messageboard.vue")
  },
  {
    path: "/my",
    name: "my",
    component: () =>
      import( /* webpackChunkName: "my" */ "../views/my/index.vue")
  }
];



//这里写login页面切换的不同视口路径
const loginChildren = [{
    name: "/login/login",
    path: "/login/login",
    component: () =>
      import( /* webpackChunkName: "login" */ "../views/login/login.vue")
  },
  {
    name: "/login/welcome",
    path: "/login/welcome",
    component: () =>
      import( /* webpackChunkName: "login" */ "../views/login/welcome.vue")
  },
  {
    name: "/login/Setforgotten",
    path: "/login/Setforgotten",
    component: () =>
      import( /* webpackChunkName: "login" */ "../views/login/Setforgotten.vue")
  }
];

const routes = [{
    path: "/",
    name: "/",
    redirect: "/home",
    component: () =>
      import( /* webpackChunkName: "home" */ "../layout/layout.vue"),
    children: bottomChildren
  },
  {
    name: "/home/positioning",
    path: "/home/positioning",
    component: () =>
      import(
        /* webpackChunkName: "home" */
        "../views/home/header/positioning.vue"
      )
  },
  {
    name: "/home/parameter",
    path: "/home/parameter",
    component: () =>
      import( /* webpackChunkName: "home" */ "../views/home/goods/parameter.vue")
  },
  {
    name: "/home/searchgoods",
    path: "/home/searchgoods",
    component: () =>
      import(
        /* webpackChunkName: "home" */
        "../views/home/header/searchgoods.vue"
      )
  },
  {
    name: "/home/evaluation",
    path: "/home/evaluation",
    component: () =>
      import(
        /* webpackChunkName: "home" */
        "../views/home/goods/evaluation.vue"
      )
  },
  {
    name: "/login",
    path: "/login",
    redirect: "/login/login",
    component: () =>
      import( /* webpackChunkName: "login" */ "../views/login/index.vue"),
    children: loginChildren
  },
  {
    path: "/car/payment",
    name: "car/payment",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/car/payment.vue")
  },
  {
    path: "/car/confirm",
    name: "car/confirm",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/car/confirm.vue")
  },
  {
    path: "/my/setup",
    name: "my/setup",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/my/Setup/setup.vue")
  },
  {
    path: "/my/feedback",
    name: "my/feedback",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/my/Setup/feedback.vue")
  },
  {
    path: "/my/information",
    name: "my/information",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/my/Personal/information.vue")
  },
  {
    path: "/my/address",
    name: "my/address",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/my/Personal/address.vue")
  },
  {
    path: "/my/newaddress",
    name: "my/newaddress",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/my/Personal/newaddress.vue")
  },
  {
    path: "/my/realname",
    name: "my/realname",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/my/Personal/realname.vue")
  },
  {
    path: "/my/order",
    name: "my/order",
    component: () =>
      import( /* webpackChunkName: "car" */ "../views/my/order/index.vue")
  },
  {
    name: "*",
    path: "*",
    redirect: "/login",
    component: () =>
      import( /* webpackChunkName: "evaluation" */ "../views/login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;