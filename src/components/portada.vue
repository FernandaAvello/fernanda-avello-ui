<template>
  <b-container>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 about">
        <b-img id="profile-img" src="@/assets/logo.png" rounded="circle" fluid alt="profile"></b-img>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 presentation">
        <h1>¡Hola! <span class="name"> Soy Fernanda.</span></h1>
        <h3>Soy una Front-End Developer</h3>
      </div>
    </div>
  </b-container>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
