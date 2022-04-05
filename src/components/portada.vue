<template>
  <div id="section-portada">
    <b-container>
      <b-row> 
        <b-col id="hide-sm" cols-lg="6" cols-md="6">
          <div id="profile-img"></div>
        </b-col>
        <b-col id="titulo" cols-lg="6" cols-md="6" cols-sm="12">
          <div id="contenido-portada">
          <div id="profile-img-sm"></div>
          <div>
            <h1 class="tituloLato">
              ¡Hola!<span class="name tituloLato">
                <strong> Soy Fernanda.</strong></span
              >
            </h1>
            <h3 class="tituloLato">Front-End Developer</h3>
            </div>
          </div>
          <ul>
            <li class="htmlIcon">
              <font-awesome-icon icon="fa-brands fa-html5" />
            </li>
            <li class="cssIcon">
              <font-awesome-icon icon="fa-brands fa-css3-alt" />
            </li>
            <li class="bootstrapIcon">
              <font-awesome-icon icon="fa-brands fa-bootstrap" />
            </li>
            <li class="jsIcon">
              <font-awesome-icon icon="fa-brands fa-js-square" />
            </li>
            <li class="vueIcon">
              <font-awesome-icon icon="fa-brands fa-vuejs" />
            </li>
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
#section-portada {
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
#profile-img-sm {
  display: none;
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
ul li {
  display: inline;
  margin-right: 2rem;
  font-size: 4rem;
}
.htmlIcon {
  color: #f2481c;
}
.cssIcon {
  color: #0071bf;
}
.bootstrapIcon {
  color: #7952b3;
}
.jsIcon {
  color: #f7e018;
}
.vueIcon {
  color: #49b180;
}

@media (max-width: 426px) {
  #section-portada{
    height: 350px;
  }
  #hide-sm {
    display: none;
  }

  #profile-img-sm {
    background-image: url(../assets/foto.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 200px;
    width: 150px;
    display: block;
  }
  #titulo {
    margin-top: 4rem;
    font-size: 40px;
    
  }
  #contenido-portada{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1, h3{
    font-size: 1.5rem;
  }
  .name{
    font-size: 2rem;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  ul li{
    font-size: 3.5rem;
    margin-right: 1.5rem;
  }
  .vueIcon{
    margin-right: 0;
  }
  
}
@media (max-width: 321px){
  #section-portada {
    height: 340px;
    padding-top: 1rem;
  }

  h1, h3{
    font-size: 1.2rem;
  }
  .name{
    font-size: 1.8rem;
  }

  ul{
    margin: 0;
    padding: 0;
  }
  ul li{
    font-size: 3rem;
    margin-right: 1rem;
}
}
</style>


