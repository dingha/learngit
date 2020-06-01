import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./common/js/index";
import "./common/css/index.css";
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { Button, Tabbar, TabbarItem, Search, Icon, Col, Row , Swipe, SwipeItem,Lazyload ,Grid, GridItem ,Image as VanImage} from "vant";

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
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
