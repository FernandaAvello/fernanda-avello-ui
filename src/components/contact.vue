<template>
  <div id="section-contact">
    <b-container>
      <h2 class="tituloSacramento">Contacto y Redes Sociales</h2>
      <b-row>
        <b-col lg="6">
          <div role="group" class="form-floating">
            <label for="floatingInput">Tu email:</label>
            <b-form-input
             class="form-control"
              id="input-email"
              v-model="email"
              :state="!v$.email.$error"
              placeholder="nombre@ejemplo.com"
              trim
            ></b-form-input>
            <b-form-invalid-feedback id="input-email-feedback">
              Ingresa un correo válido
            </b-form-invalid-feedback>
          </div>
          <br>
          <div>
            <b-form-textarea
              id="textarea"
              v-model="text"
              :state="text.length <= 300 && text.length >= 10"
              placeholder="Escribe algo..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
            <b-form-invalid-feedback id="textarea-feedback">
              Ingresa un mensaje entre 10 y 300 caracteres.
            </b-form-invalid-feedback>
            <br />
          </div>
            <b-row>
              <b-button class="botonEnviar" @click="enviar"> Enviar</b-button>
            </b-row>
        </b-col>

        <!-- Iconos Redes Sociales -->
        <b-col lg="6">
          <p class="writeLato">También puedes contactarme o revisar mi perfil en las siguientes plataformas:</p>
          <div class="networks-icons">
          <a href="https://twitter.com/Feer_Avello" target="_blank"
            ><span class="social-networks ml-5"
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
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { required, email, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "contactComponent",
  data() {
    return {
      email: "",
      text: "",
    };
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      email: {
        required,
        email,
      },
      text: {
        required,
        maxLength: maxLength(300), 
      }
    };
  },
  methods: {
    enviar() {
      this.v$.$touch();
    },
  },
};
</script>

<style scoped>
#section-contact {
  padding-top: 9rem;
  height: 700px;
}
.networks-icons {
  text-align: center;
  
}
.social-networks {
  font-size: 3rem;
  color: #6CA32A ;
  margin: 0 2rem;
}
.botonEnviar{
  margin-right: 1rem;
  margin-left: auto;
  background-color: #B4F06E !important;
  border-color: #B4F06E !important;
  color: black !important;
}
.botonEnviar:hover {
  background-color: #6CA32A !important;
  border-color: #6CA32A !important;
}
p {
  padding-top: 1.5rem;
  text-align: center;
  font-size: 20px;

}

@media (max-width: 426px) {
  #section-contact{
   padding-top: 5rem;
   height: 760px;
  }
  h2 {
    padding-bottom: 1rem;
  }
}
</style>