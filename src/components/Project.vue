<template>
  <div class="project-container">
    <div v-if="error">
      <div class="project-title">{{error}}</div>
    </div>
    <div v-else>
      <div class="markdown-content" v-html="project.html"/>
      <div class="back-btn" @click="$router.push('/projects')">Back</div>
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

<style lang="scss" scoped>
.project-container {
  display: flex;
  justify-content: center;
  align-content: center;

  .markdown-content {
    text-align: center;
  }

  .back-btn {
    display: flex;
    color: #eee;
    border-radius: 0.25em;
    justify-content: center;
    align-items: center;
    background-color: dimgray;
    width: 3em;
    height: 2em;
  }

  .back-btn:hover {
    cursor: pointer;
  }
}
img {
  width: auto;
  height: 4em;
}
</style>