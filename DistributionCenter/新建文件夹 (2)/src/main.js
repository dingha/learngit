import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./common/js/index";
import "./common/css/index.css";
import "./api/vender/request";
import "./api/home";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
// eslint-disable-next-line no-unused-vars
console.dir(axios);
// axios.get("require('../../home')").then(res => {
//   console.log(res);
// })
// axios.get('./static/head.json')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })

// axios.get('http://localhost:8080/head.json')
// .then(function (response) {
// // handle success
// console.log(response);
// })
// axios.get("./assets/json/head.json").then(res => {
//   console.log(res);
// })require("../../../assets/png/home/全屋小商品1@3x.png")

// axios.get("require('../../home')").then(res => {
//   console.log(res);
// })
// console.log(
//   axios.get("./assets/json/head.json").then(res => {
//     console.log(res);
//   })

// );
import {
  Button,
  Tabbar,
  TabbarItem,
  Search,
  Icon,
  Col,
  Row,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Image as VanImage,
  IndexBar,
  IndexAnchor,
  Cell,
  NavBar,
  Tag,
  CellGroup,
  List,
  Loading,
  Tab,
  Tabs,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sku,
  Field,
  Divider,
  Form,
  Sidebar,
  SidebarItem,
  Collapse,
  CollapseItem,
  SubmitBar,
  Checkbox,
  CheckboxGroup,
  Card,
  Stepper,
  CountDown,
  RadioGroup,
  Radio
} from "vant";

import a from "utils";
a();
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(NavBar);
Vue.use(Tag);
Vue.use(CellGroup);
Vue.use(List, Loading);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku);
Vue.use(Field);
Vue.use(Divider);
Vue.use(Form);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Card);
Vue.use(Stepper);
Vue.use(CountDown);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");