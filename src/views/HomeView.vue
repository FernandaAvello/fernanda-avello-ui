<template>
  <div class="home">
    <portada />
    <section class="triangle2"></section>
    <aboutMe />
    <section class="triangle"></section>
    <education />
    <section class="triangle2"></section>
    <portfolio />
    <section class="triangle"></section>
    <contact />
    <firma />
    
  </div>
  
</template>

<script>
import portada from "@/components/portada.vue";
import aboutMe from "@/components/aboutMe.vue";
import education from "@/components/education.vue";
import portfolio from "@/components/portfolio.vue";
import contact from "@/components/contact.vue";
import firma from "@/components/firma.vue";


export default {
  name: "Home-view",
  components: {
    portada,
    aboutMe,
    education,
    portfolio,
    contact,
    firma,
  },
};

</script>
