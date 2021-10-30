import Vue from "vue";
import axios from "axios";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/styles/style.css";
import "@/mixins/index.js";

Vue.use(ElementUI);

import App from "./App";
import router from "./router";
import store from "./store";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
import api from "./mixins/api";
Vue.config.productionTip = false;
Vue.prototype.$axios = api;
api.defaults.timeout = 10000;
/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    store,
    template: "<App/>",
}).$mount("#app");
