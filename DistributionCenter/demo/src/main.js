import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { Button, Tabbar, TabbarItem } from "vant";

import a from "utils";
a();

Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
