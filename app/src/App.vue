<template>
<nav-bar/>
<my-header/>
<about />

</template>

<script>
import About from './components/About.vue';
import MyHeader from './components/MyHeader.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar, MyHeader, About},
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
