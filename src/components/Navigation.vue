<template>
  <div class="tab_navigation_wrapper">
    <ul class="tabs">
      <li :class="{ active: category === categoryEnum.POPULAR.name }">
        <a @click="updateGallery('popular')">populaire</a>
      </li>
      <!-- <li>
        <a href="/">à venir</a>
      </li> -->
      <li :class="{ active: category === categoryEnum.NEWEST.name }">
        <a @click="updateGallery('newest')">nouveautés</a>
      </li>
      <li :class="{ active: category === categoryEnum.EDITOR.name }">
        <a @click="updateGallery('editor')">editors' choice</a>
      </li>
      <!-- <li>
        <a href="/">galeries</a>
      </li> -->
    </ul>
  </div>
</template>

<script>
import categoryEnum from "../enums/categoryEnum";
export default {
  name: "Navigation",
  props: ["category"],
  data: () => ({
    categoryEnum,
  }),
  methods: {
    updateGallery(value) {
      this.$emit("updateGallery", value);
    },
  },
};
</script>

<style scoped>
/*
    Discovery Tab Style
*/
.tab_navigation_wrapper {
  position: relative;
  transform: translateZ(0);
  border-bottom: 1px solid #eeeff2;
}

.tab_navigation_wrapper .tabs {
  background-color: #fff;
  list-style-type: none;
  text-align: left;
  white-space: nowrap;
  overflow-x: auto;
  padding-left: 50px;
}

.tab_navigation_wrapper .tabs > li {
  display: inline;
  margin: 0 10px;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: bold;
  list-style: none;
}

.tab_navigation_wrapper .tabs > li > a {
  font-size: 14px;
  display: inline-block;
  padding: 15px 0;
  border-bottom: 2px solid transparent;
  color: #71767a;
  cursor: pointer;
  text-decoration: none;
  outline: none;
}

.tab_navigation_wrapper .tabs > li.active > a {
  color: #0099e5;
  border-bottom: 2px solid #0099e5;
}
</style>
