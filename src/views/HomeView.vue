<template>
  <div class="home">
    <portada />
    <section class="triangle2"></section>
    <aboutMe />
    <section class="triangle"></section>
    <education />
    <section class="triangle2"></section>

    
  </div>
  
</template>

<script>
import portada from "@/components/portada.vue";
import aboutMe from "@/components/aboutMe.vue";
import education from "@/components/education.vue";

export default {
  name: "Home-view",
  components: {
    portada,
    aboutMe,
    education,
  },
};
</script>
