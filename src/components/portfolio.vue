<template>
  <div id="section-portfolio">
    <b-container>
      <h2 class="tituloSacramento">Portfolio</h2>
      <div>
        <b-row class="card-carousel" style="color: black">
          <b-col cols="12">
            <carousel :perPageCustom="[[320,1],[375,1],[425, 1], [768, 2],[1024, 2]]">
              <slide class="p-3">
                <b-card
                  title="Proyecto 1"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                >
                  <b-card-text>
                    Aqui estará escrito una pequeña descripción del proyecto.
                  </b-card-text>
                  <b-button href="#" class="cardButton">Visitar Proyecto</b-button>
                </b-card>
              </slide>
              <slide class="p-3">
                <b-card
                  title="Proyecto 2"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                >
                  <b-card-text>
                    Aqui estará escrito una pequeña descripción del proyecto.
                  </b-card-text>
                  <b-button href="#" class="cardButton">Visitar Proyecto</b-button>
                </b-card>
              </slide>
              <slide class="p-3">
                <b-card
                  title="Proyecto 3"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                >
                  <b-card-text>
                    Aqui estará escrito una pequeña descripción del proyecto.
                  </b-card-text>

                  <b-button href="#" class="cardButton">Visitar Proyecto</b-button>
                </b-card>
              </slide>
              <slide class="p-3">
                <b-card
                  title="Proyecto 4"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                >
                  <b-card-text>
                    Aqui estará escrito una pequeña descripción del proyecto.
                  </b-card-text>
                  <b-button href="#" class="cardButton">Visitar Proyecto</b-button>
                </b-card>
              </slide>
            </carousel>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "portfolioComponent",
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
#section-portfolio {
  background-color: #46244c;
  padding-top: 9rem;
  text-align: center;
  color: #fff;
  height: 850px;
}
h2 {
  padding-top: 2rem;
}
.card-carousel {
  padding-top: 3rem;
}

.cardButton {
  background-color: #b4f06e !important;
  color: black !important;
  border-color: #b4f06e !important;
}

.cardButton:hover {
  background-color: #6ca32a !important;
  border-color: #6ca32a !important;
}
@media (max-width: 426px){
  #section-portfolio {
    height: 720px;
    padding-top: 5rem;
  }
  h2 {
    padding-bottom: 1rem;
  }
  .card-carousel {
    padding-top: 1rem;
  }
}
</style>