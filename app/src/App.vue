<template>
<nav-bar/>
<my-header/>
<about />
<experience />
<education />
<projects />
</template>

<script>
import About from './components/About.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import MyHeader from './components/MyHeader.vue';
import NavBar from './components/NavBar.vue';
import Projects from './components/Projects.vue';
export default {
  components: { NavBar, MyHeader, About, Experience, Projects, Education},
  name: "App",
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
