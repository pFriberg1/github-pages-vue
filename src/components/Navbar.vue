<template>
  <div class="header-container">
    <img class="project-logo" src="/src/assets/img/GitHub-Mark-120px-plus.png">
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
import NavButton from './NavButton.vue';
import data from '../data.js';

export default {
  components: {
    NavButton
  },
  data: () => data
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .project-logo {
    width: 5em;
    height: 5em;
  }
  .nav-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>



