<template>
  <div class="projects-container">
    <ul class="list-container">
      <li class="list-item" v-for="(project, id) in projects" :key="project.uri">
        <div>
          <h2 @click="$router.push('projects/' + id)">{{project.title}}</h2>
          <div>{{project.description}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

</<script>
import data from '../data.js'

export default {
  data: () => data
}
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-direction: column;
}

.list-container {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.list-item {
  display: block;
  text-align: center;
}

h2 {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
