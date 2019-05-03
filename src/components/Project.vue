<template>
  <div class="project-container">
    <div v-if="error">
      <div class="project-title">{{error}}</div>
    </div>
    <div v-else>
      <div class="markdown-content" v-html="project.html"/>
    </div>
  </div>
</template>

<script>
import data from '../data.js';

export default {
  methods: {},
  data: function() {
    let project = data.projects[this.$route.params.projectId];

    if (!project) return { error: 'No such project' };

    return {
      error: null,
      project: project
    };
  }
};
</script>

<style scoped>
.project-container {
  display: flex;
  justify-content: center;
  align-content: center;
}

.markdown-content {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>