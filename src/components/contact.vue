<template>
  <div id="section-contact">
    <b-container
      ><h2 class="tituloSacramento">Contacto y Redes Sociales</h2>
      <b-row>
        <b-col lg="6">
          <div class="email-form">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Tu email</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Escribe tu Mensaje</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </b-col>
        <b-col lg="6">
          <a href="https://www.instagram.com/fer_avello/" target="_blank"
            ><span class="social-networks pl-4"
              ><font-awesome-icon icon="fa-brands fa-instagram" /></span
          ></a>
          <a href="https://twitter.com/Feer_Avello" target="_blank"
            ><span class="social-networks"
              ><font-awesome-icon icon="fa-brands fa-twitter" /></span
          ></a>
          <a
            href="https://www.linkedin.com/in/fernanda-avello-rocha-a35754124/"
            target="_blank"
            ><span class="social-networks"
              ><font-awesome-icon icon="fa-brands fa-linkedin" /></span
          ></a>
          <a href="" target="_blank"
            ><span class="social-networks"
              ><font-awesome-icon icon="fa-brands fa-github" /></span
          ></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "contactComponent",
};
</script>

<style>
#section-contact {
  padding-top: 9rem;
  height: 700px;
}
.social-networks {
    font-size: 4rem;
    color: #BE5861;
    margin: 0 2rem;
    
}
</style>