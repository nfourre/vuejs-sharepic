<template>
  <div class="viewer">
    <div class="viewer_close">
      <span></span>
    </div>
    <div class="viewer_image">
      <img :src="picture.url" :alt="picture.name" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageViewer",
  props: ["picture"],
};
</script>

<style scoped>
/*
    Details page
*/
.viewer {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(34, 34, 34);
  min-height: 600px;
  height: calc(100vh - 270px);
  position: relative;
  flex: 1 1 0%;
  padding: 32px 64px;
  transition: height 0.15s linear 0s;
}

.viewer_close {
  position: absolute;
  top: 24px;
  left: 24px;
}

.viewer_close span {
  font-size: 26px;
  font-weight: normal;
  color: rgb(238, 239, 242);
  position: relative;
  display: inline-block;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  transition: background-color 0.1s ease 0s;
  border-radius: 40px;
  transition: all linear 300ms;
}

.viewer_close span:hover {
  background-color: rgba(255, 255, 255, 0.15);
  cursor: pointer;
}

.viewer_close span:after {
  content: "✕";
  font-family: "Helvetica Neue", HelveticaNeue, Helvetica, FreeSans, Arial,
    sansserif;
  cursor: pointer;
}

.viewer_image {
  height: 100%;
  max-width: calc(100vw - 250px);
}

.viewer_image img {
  height: 100%;
}
</style>
