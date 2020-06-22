<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

import "./assets/styles/global.css";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style></style>
