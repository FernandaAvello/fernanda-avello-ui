<template>
  <div>
    <b-navbar toggleable="lg" type="dark" id="navbar-color">
      <b-navbar-brand href="#" id="brand-tag">Fernanda Avello</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="px-5 item-navbar">About Me</b-nav-item>
          <b-nav-item href="#" class="px-5 item-navbar">Education & Skills</b-nav-item>
          <b-nav-item href="#" class="px-5 item-navbar">Portfolio</b-nav-item>
          <b-nav-item href="#" class="px-5 item-navbar">Contact</b-nav-item>
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

<style>

#navbar-color{
    background-color: #a267ac;
}
#brand-tag{
    font-size: 2rem;
}
.item-navbar {
    font-size: 1.5rem;
}
</style>