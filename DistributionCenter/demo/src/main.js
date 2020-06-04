import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./common/js/index";
import "./common/css/index.css";
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
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
  List,Loading,
  Tab,
  Tabs,
  GoodsAction, GoodsActionIcon, GoodsActionButton,
  Sku,
  Field
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
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
