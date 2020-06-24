<template>
  <div id="app">
    <Header v-on:showUpload="handleUploadModal" />
    <router-view />
    <UploadModal v-on:hideModal="handleHideModal" v-if="showUploadModal" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import UploadModal from "./components/UploadModal.vue";

import { mapGetters } from "vuex";

import "./assets/styles/global.css";

export default {
  name: "App",
  components: {
    Header,
    UploadModal,
  },
  computed: {
    ...mapGetters(["uploading"]),
  },
  data: () => ({
    showUploadModal: false,
  }),
  watch: {
    uploading(newValue) {
      if (newValue === false) {
        this.handleHideModal();
      }
    },
  },
  methods: {
    handleUploadModal() {
      this.showUploadModal = true;
    },
    handleHideModal() {
      this.showUploadModal = false;
    },
  },
};
</script>

<style></style>
