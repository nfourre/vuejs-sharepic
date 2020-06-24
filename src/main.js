import Vue from "vue";
import App from "./App.vue";
import moment from "moment";

import PictureService from "./services/picture.service";

import store from "./store/store";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("dateFormat", (value) => {
  if (value) {
    return moment.unix(value).format("MM/DD/YYYY hh:mm");
  }
});

export const bus = new Vue();

const pictureService = new PictureService();

new Vue({
  provide: {
    pictureService,
  },
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
