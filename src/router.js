import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import Details from "./views/Details.vue";

Vue.use(VueRouter);

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "image", path: "/image/:id", component: Details },
];

const router = new VueRouter({ mode: "history", routes });

export default router;
