/* eslint-disable no-new */
/*eslint-disable*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
