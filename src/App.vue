<template>
  <div class="app">
    <Navbar/>
    <router-view/>
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>


<style lang="scss" scoped>
.app {
  max-width: 60em;
  margin: auto;
}
</style>