<template>
  <div>
    <nav class="nav-container">
      <nav-button
        :name="navData.name"
        :link="navData.uri"
        :key="navData.uri"
        v-for="navData in navbar"
      />
    </nav>
  </div>
</template>

<script>
import NavButton from "./NavButton.vue";
import data from "../data.js";

export default {
  components: {
    NavButton
  },
  data: () => data
};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: center;
}
</style>



