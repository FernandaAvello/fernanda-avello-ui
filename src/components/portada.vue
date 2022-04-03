<template>
  <div id="portada-container">
    <b-container>
      <b-row>
        <b-col lg="6" md="6" sm="12">
          <div id="profile-img"></div>
        </b-col>
        <b-col id="titulo" lg="6" md="6" sm="12">
          <h1 class="tituloLato">
            ¡Hola!<span class="name tituloLato">
              <strong> Soy Fernanda.</strong></span
            >
          </h1>
          <h3 class="tituloLato">Soy una Front-End Developer</h3>
          <ul>
            <li class="htmlIcon"><font-awesome-icon icon="fa-brands fa-html5" /></li>
            <li class="cssIcon"><font-awesome-icon icon="fa-brands fa-css3-alt" /></li>
            <li class="jsIcon"><font-awesome-icon icon="fa-brands fa-js-square" /></li>
            <li class="vueIcon"><font-awesome-icon icon="fa-brands fa-vuejs" /></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "portadaComponent",
};
</script>

<style scoped>

#portada-container {
  background-color: #fff;
  height: 600px;
}
#profile-img {
  background-image: url(../assets/foto.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 2rem;
  height: 600px;
  width: 500px;
}
#titulo {
  margin-top: 12rem;
}
.name {
  color: #46244c;
  font-size: 3rem;
}
h3 {
  margin-top: 2rem;
}
ul {
  list-style-type: none;
  text-align: center;
  margin-top: 2rem;
}
ul li{
  display: inline;
  margin-right: 2rem;
  font-size: 4rem; 
}
.htmlIcon{
  color: #f2481c;
}
.cssIcon{
  color: #0071bf;
}
.jsIcon{
  color: #f7e018;
}
.vueIcon{
  color: #49b180;
}
</style>
