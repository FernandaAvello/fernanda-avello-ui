<template>
  <div id="app">
    <navBar />
    <router-view />
  </div>
  
</template>

<script>
import  navBar from "@/components/navbar.vue";
export default {
  components: {
    navBar,
  },
};
</script>

<style>
@import 'assets/css/main.css';

</style>
