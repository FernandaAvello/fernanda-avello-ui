<template>  
<b-container id="section-education">
      <h2 class="tituloSacramento">Education & Skills</h2>
      <b-row>
        <b-col lg="6">
          <p id="education-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. </p>
        </b-col>


        <b-col lg="6">
          <p class="skill-languages"><strong>HTML5</strong></p>
          <div class="progress" style="height: 25px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
              style="width: 90%; background-color: #FFFA4D;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
          <br>
          <p class="skill-languages"><strong>CSS3</strong></p>
          <div class="progress" style="height: 25px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
              style="width: 90%; background-color: #FF79CD;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
          <br>
          <p class="skill-languages"><strong>JAVASCRIPT</strong></p>
          <div class="progress" style="height: 25px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
              style="width: 60%; background-color: #C400FF;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
          <br>
          <p class="skill-languages"><strong>VUEJS</strong></p>
          <div class="progress" style="height: 25px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
              style="width: 40%; background-color: #581B98;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
          <br>
          <p class="skill-languages"><strong>GIT</strong></p>
          <div class="progress" style="height: 25px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
              style="width: 80%; background-color: #120078;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
</template>
<script>
export default {
    name: "educationComponent"
    
}
</script>
<style scoped>
#section-education{
    padding-top: 10rem;
}
</style>