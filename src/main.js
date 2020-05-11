import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
