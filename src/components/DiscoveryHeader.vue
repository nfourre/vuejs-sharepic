<template>
  <div class="discovery_header_wrapper">
    <div class="discovery_header">
      <h1>
        {{ categoryEnum[category.toUpperCase()].title }}
      </h1>
      <p>{{ categoryEnum[category.toUpperCase()].subtitle }}</p>
    </div>
  </div>
</template>

<script>
import categoryEnum from "../enums/categoryEnum";

export default {
  name: "DiscoveryHeader",
  props: ["category"],
  data: () => ({
    categoryEnum,
  }),
};
</script>

<style>
/*
    Discovery Header Style
*/
.discovery_header_wrapper {
  display: flex;
  height: 115px;
  padding: 0 60px;
  background-color: #fff;
}

.discovery_header h1 {
  font-size: 36px;
  font-weight: 600;
  color: #222;
  margin: 32px 0 10px 0;
}

.discovery_header p {
  font-size: 18px;
  line-height: 1.4em;
  color: #525558;
}
</style>
