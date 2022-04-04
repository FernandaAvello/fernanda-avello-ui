<template>
  <div>
    <b-navbar toggleable="lg" type="dark" id="navbar-color" class="fixed-top">
      <b-navbar-brand href="#section-portada" id="brand-tag" class="tituloSacramento">Fernanda Avello</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#section-aboutme" class="px-5 item-navbar">About Me</b-nav-item>
          <b-nav-item href="#section-education" class="px-5 item-navbar">Education & Skills</b-nav-item>
          <b-nav-item href="#section-portfolio" class="px-5 item-navbar">Portfolio</b-nav-item>
          <b-nav-item href="#section-contact" class="px-5 item-navbar">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style scoped>

#navbar-color{
    background-color: #46244C;
    padding: 0 1rem;
}
#brand-tag{
    font-size: 2rem;
}
.item-navbar {
    font-size: 1rem;
    font-family: Lato;
}
.navbar-dark .navbar-nav .nav-link {
    color: #F0ECE3 !important;
}
</style>