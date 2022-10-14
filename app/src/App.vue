<template>
<nav-bar/>
<my-header/>
  <div style="background-color-white;height:2000px"></div>

</template>

<script>
import MyHeader from './components/MyHeader.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar, MyHeader},
  name: "App",
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
