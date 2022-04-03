<template>
  <div id="section-portfolio">
    <b-container>
      <h2 class="tituloSacramento">Portfolio</h2>
      <div>
        <b-row class="pt-5">
          <b-col md="4" sm="12">
            <b-card
              title="Titulo Proyecto"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              style="max-width: 20rem; color: #000"
              class="mb-2 writeLato"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" class="cardButton writeLato"
                >Visitar proyecto</b-button
              >
            </b-card>
          </b-col>
          <b-col md="4" sm="12">
            <b-card
              title="Titulo Proyecto"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              style="max-width: 20rem; color: #000"
              class="mb-2 writeLato"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" class="cardButton writeLato"
                >Visitar proyecto</b-button
              >
            </b-card>
          </b-col>
          <b-col md="4" sm="12">
            <b-card
              title="Titulo Proyecto"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              style="max-width: 20rem; color: #000"
              class="mb-2 writeLato"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" class="cardButton writeLato"
                >Visitar proyecto</b-button
              >
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "portfolioComponent",
};
</script>

<style>
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

.cardButton {
  background-color: #f9f871 !important;
  color: black !important;
  border-color: #f9f871 !important;
}

.cardButton:hover {
  background-color: #fdbb5b !important;
  border-color: #fdbb5b !important;
}
</style>