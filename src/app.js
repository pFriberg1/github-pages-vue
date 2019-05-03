import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import ProjectsPage from './components/ProjectsPage.vue'
import AboutPage from './components/AboutPage.vue'
import Project from './components/Project.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsPage
    },
    {
      path: '/projects/:projectId',
      component: Project
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage
    }
  ]
});

onload = () => new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
