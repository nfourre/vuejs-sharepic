<template>
  <div id="content">
    <DiscoveryHeader :category="category" />
    <Navigation :category="category" @updateGallery="onUpdateGallery($event)" />
    <PictureGallery :pictures="pictures" />
  </div>
</template>

<script>
import DiscoveryHeader from "../components/DiscoveryHeader.vue";
import Navigation from "../components/Navigation.vue";
import PictureGallery from "../components/PictureGallery.vue";

import { bus } from "../main";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  inject: ["pictureService"],
  components: {
    DiscoveryHeader,
    Navigation,
    PictureGallery,
  },
  data: () => ({
    pageTitle: "What's popular today",
    pageSubtitle: "See recently added photos with the highest Pulse.",
  }),
  computed: {
    ...mapGetters(["pictures", "category"]),
  },
  mounted() {
    // Cycle de vie du composant
    this.getPictures();
    bus.$on("goToDetails", this.onGoToDetails);

    console.log(this.$store.state);
  },
  methods: {
    ...mapActions(["getPictures", "changePictureCategory"]),
    onUpdateGallery(event) {
      this.changePictureCategory(event);
    },
    onGoToDetails(event) {
      this.$router.push({ name: "image", params: { id: event } });
    },
  },
};
</script>

<style scoped></style>
