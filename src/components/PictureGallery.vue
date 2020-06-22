<template>
  <div class="discovery_body_wrapper">
    <div class="discovery_body">
      <div class="discovery_body_grid">
        <ul>
          <Picture
            v-for="picture in pictures"
            :key="picture.id"
            :picture="picture"
          />
          <li class="photo_thumbnail"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Picture from "./Picture.vue";

export default {
  name: "PictureGallery",
  components: {
    Picture,
  },
  props: ["pictures"],
};
</script>

<style scoped>
/*
    Discovery Body Style
*/
.discovery_body_wrapper {
  background-color: #f7f8fa;
  padding: 20px 50px;
}

.discovery_body {
  display: flex;
  flex-wrap: wrap;
}

.photo_thumbnail {
  list-style: none;
  height: 40vh;
  flex-grow: 1;
  opacity: 1;
  background-color: #eeeff2;
}

.photo_thumbnail:last-child {
  flex-grow: 10;
}

.discovery_body_grid ul {
  display: flex;
  flex-wrap: wrap;
}

.discovery_body_grid ul > li {
  margin: 5px;
  height: 40vh;
  flex-grow: 1;
}

.discovery_body_grid ul > li:last-child {
  flex-grow: 10;
}

.discovery_body_grid li > a > img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}
</style>
