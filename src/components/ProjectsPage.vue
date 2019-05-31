<template>
  <div class="projects-container">
    <div class="project-item" v-for="(project, id) in projects" :key="project.uri">
      <div>
        <h2 @click="$router.push('projects/' + id)">{{project.title}}</h2>
        <div>{{project.description}}</div>
      </div>
    </div>
  </div>
</template>

</<script>
import data from '../data.js'

export default {
  data: () => data
}
</script>

<style lang="scss" scoped>
.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.project-item {
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
