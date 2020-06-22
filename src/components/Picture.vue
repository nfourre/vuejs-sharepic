<template>
  <li class="photo_thumbnail">
    <a @click="goToPictureDetails">
      <img :src="picture.url" :alt="picture.title" loading="lazy" />
    </a>
  </li>
</template>

<script>
import { bus } from "../main";

export default {
  name: "Picture",
  props: ["picture"],
  methods: {
    goToPictureDetails() {
      bus.$emit("goToDetails", this.picture.id);
    },
  },
};
</script>

<style scoped>
.photo_thumbnail img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}
</style>
