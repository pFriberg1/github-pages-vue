<template>
  <div class="btn-container">
    <div class="nav-btn" @click="$router.push(link)">{{ name }}</div>
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
  display: flex;
  margin: 0 1.5em;
  font-size: 1.25em;
}

.nav-btn {
  width: 5em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.125em gray solid;
  border-radius: 2em;
}
.nav-btn:hover {
  cursor: pointer;
}
</style>


