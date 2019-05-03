<template>
  <div class="btn-container">
    <div class="nav-btn" @click="$router.push(link)">{{ nanme }}</div>
    <!-- <button class="nav-btn" @click="$router.push(link)">{{ name }}</button> -->
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    name: String
  }
};
</script>

<style scoped>
.btn-container {
  margin: 2em;
  font-size: 1.25em;
}

.nav-btn {
  padding: 0.25em;
  background: salmon;
}
</style>


