<template>
  <div class="about-container">
    <div v-html="pages.about.html"/>
  </div>
</template>

<script>
import data from '../data.js';
export default {
  data: function() {
    return data;
  }
};
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
