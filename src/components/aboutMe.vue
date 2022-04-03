<template>
  <div id="section-aboutme">
    <b-container>
      <h2 class="tituloSacramento">About Me</h2>
      <div class="aboutme">
        <p class="writeLato">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <b-row>
        <b-col lg="12" class="foto-section">
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

<style>
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
.foto-section{
  padding-top: 5rem;
}

#first-image{
  transform:rotate(-10deg);
}
#second-image{
  transform: rotate(10deg);
}
#third-image{
  transform:rotate(-10deg);
}
#forth-image{
  transform: rotate(10deg);
}
</style>