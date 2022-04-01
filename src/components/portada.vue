<template>
  <b-container style="height: 500px;">
    <b-row>
      <b-col lg="6" md="6" sm="12">
        <div id="profile-img"></div>
      </b-col>
      <b-col id="titulo" lg="6" md="6" sm="12">
        <h1 class="tituloLato">¡Hola!<span class="name tituloLato"> <strong> Soy Fernanda.</strong></span></h1>
        <h3 class="tituloLato">Soy una Front-End Developer</h3>
      </b-col>
    </b-row>
  </b-container>
  
</template>

<script>
export default {
  name: "portadaComponent"
}
</script>

<style scoped>
#profile-img{
  background-image: url(../assets/bla.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  height: 500px;
  margin: auto;
  margin-top: 4rem;
  width: 500px;
}
#titulo{
  margin-top: 12rem;
}
.name{
  color: #46244C;
  font-size: 2rem; 
}
h3{
  margin-top: 2rem;
}
</style>
