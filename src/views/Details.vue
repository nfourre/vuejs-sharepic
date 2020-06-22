<template>
  <div>
    <ImageViewer :picture="current" />
    <div class="content">
      <ImageInfos :picture="current" :author="author" class="infos" />
      <Comments class="comments" :authors="authors" :comments="comments" />
    </div>
  </div>
</template>

<script>
import ImageViewer from "../components/ImageViewer.vue";
import ImageInfos from "../components/ImageInfos.vue";
import Comments from "../components/Comments.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Details",
  components: {
    ImageViewer,
    ImageInfos,
    Comments,
  },
  computed: {
    ...mapGetters(["current", "author", "authors", "comments"]),
  },
  mounted() {
    this.getPictureById(this.$route.params.id);
    this.getAuthors();
    this.getPictureComments(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getPictureById", "getAuthors", "getPictureComments"]),
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  width: calc(100vw - 250px);
  margin: 0 auto;
  padding: 2rem 0 0 0;
}

.content .infos {
  width: 40%;
}

.content .comments {
  width: 55%;
}
</style>
