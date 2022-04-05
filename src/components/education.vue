<template>
  <div id="section-education">
    <b-container>
      <h2 class="tituloSacramento">Education & Skills</h2>
      <b-row>
        <b-col lg="6">
          <p id="education-text" class="writeLato">
            Mi educación como FrontEnd Developer es el resultado de diversos
            cursos online, investigación y autoaprendizaje. Ser autodidacta me
            ha permitido flexibilizar el ritmo de aprendizaje, priorizar aquello
            en lo que quiero dar más énfasis en mi estudio diario.
            <br />
            Por consiguiente, esto me ha permitido entender el mercado y sus
            necesidades, y adaptarme a la hora de aprender lenguajes de
            programación.
            <br />
            Al continuación puedes ver mi actual progreso, el cuál irá cambiando
            a medida que aumente mi aprendizaje.
          </p>
        </b-col>

        <b-col lg="6">
          <div class="skill-container">
            <p class="skill-languages"><strong>HTML5</strong></p>
            <div class="progress" style="height: 25px">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style="width: 90%; background-color: #6ca32a"
              ></div>
            </div>
            <br />
            <p class="skill-languages"><strong>CSS3</strong></p>
            <div class="progress" style="height: 25px">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style="width: 90%; background-color: #b4f06e"
              ></div>
            </div>
            <br />
            <p class="skill-languages">
              <strong>BOOTSTRAP/BOOTSTRAP-VUE</strong>
            </p>
            <div class="progress" style="height: 25px">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style="width: 80%; background-color: #6ca32a"
              ></div>
            </div>
            <br />
            <p class="skill-languages"><strong>JAVASCRIPT</strong></p>
            <div class="progress" style="height: 25px">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style="width: 60%; background-color: #b4f06e"
              ></div>
            </div>
            <br />
            <p class="skill-languages"><strong>VUEJS</strong></p>
            <div class="progress" style="height: 25px">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style="width: 40%; background-color: #6ca32a"
              ></div>
            </div>
            <br />
            <p class="skill-languages"><strong>GIT</strong></p>
            <div class="progress" style="height: 25px">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style="width: 80%; background-color: #b4f06e"
              ></div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "educationComponent",
};
</script>
<style scoped>
#section-education {
  padding-top: 9rem;
}
#education-text {
  font-size: 20px;
  text-align: justify;
}

@media (max-width: 426px) {
  #section-education {
    padding-top: 5rem;
  }
  #education-text {
    font-size: 18px;
    text-align: justify;
  }
  .skill-container{
    width: 80%;
    margin: 0 auto;
    padding-top: 1rem;
  }
  h2 {
    padding-bottom: 1rem;
  }
}
</style>