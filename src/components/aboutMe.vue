<template>
  <div id="section-aboutme">
    <b-container>
      <h2 class="tituloSacramento">About Me</h2>
      <div class="aboutme">
        <p class="writeLato">
          Mi nombre es Fernanda, una joven chilena que tiene algo que contar...
          Egresé de Enfermera el año 2014, y desde ese momento me dediqué a trabajar en el cuidado de los demás. 
          Durantes estos años, aprendí el valor del trabajo en equipo, responsabilidad, honestidad y perserverancia. 
          Hoy en día me enfrento a un tremendo desafío. Y es que el año 2022 trajo consigo muchos cambios, sin duda aprender a programar 
          fue el más importante de ellos, y ¡me ha encantado!. No diré que todo ha sido color de rosa jajaja... pero aquí me ves, superando con mucho esfuerzo mis límites de aprendizaje día a día.
          Me gusta disfrutar de mi tiempo en familia, dentro de mis hobbies me gusta mucho nadar (o intentarlo jajaja), jugar videojuegos y el maquillaje.
          Sin duda tengo la convicción que lograré mis metas propuestas, y si estás aquí quiero invitarte a ser un espectador del fruto de mi trabajo como <em>FrontEnd Developer.</em> 
        </p>
      </div>

      <b-row>
        <b-col lg="12" class="foto-section" id="doodle">
          <img id="first-image" :src="require('../assets/image1.png')" class="img-thumbnail" alt="1">
          <img id="second-image" :src="require('../assets/image2.jpg')" class="img-thumbnail" alt="2">
          <img id="third-image" :src="require('../assets/image3.png')" class="img-thumbnail" alt="3">
          <img id="forth-image" :src="require('../assets/image4.jpg')" class="img-thumbnail" alt="4">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "aboutMe",
};
</script>

<style scoped>
#section-aboutme {
  background-color: #46244C;
  padding-top: 9rem;
  text-align: center;
  color: #fff;
  height: 850px;
}
.aboutme {
  text-align: justify;
}
h2 {
  padding-bottom: 2rem;
}
p {
  font-size: 20px;
}
.foto-section{
  padding-top: 2.5rem;
}
#doodle {
  background-image: url(../assets/doodle.png);
  background-size: contain;
}

#first-image{
  transform:rotate(-10deg);
  max-height: 250px;
}
#second-image{
  transform: rotate(10deg);
  max-height: 250px;
}
#third-image{
  transform:rotate(-10deg);
  max-height: 250px;
}
#forth-image{
  transform: rotate(10deg);
  max-height: 250px;
}

@media (max-width: 426px){
  #section-aboutme {
    padding-top: 5rem;
    height: 800px;
  }
  p {
    font-size: 18px;
  }
  .foto-section{
    display: none;
  }
  h2 {
    padding-bottom: 1rem;
  }
}
@media (max-width: 321px){
  #section-aboutme {
    height: 900px;
  }
}
</style>