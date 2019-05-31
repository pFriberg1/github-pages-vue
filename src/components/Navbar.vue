<template>
  <div class="header-container">
    <nav class="nav-container">
      <nav-button
        :name="navData.name"
        :link="navData.uri"
        :key="navData.uri"
        v-for="navData in navbar"
      />
    </nav>
    <a href="https://www.github.com/pFriberg1">github profile</a>
  </div>
</template>

<script>
import NavButton from './NavButton.vue';
import data from '../data.js';

export default {
  components: {
    NavButton
  },
  data: function() {
    return data;
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin: 1em 0;
    color: skyblue;
    text-decoration: inherit;
  }

  .nav-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>



