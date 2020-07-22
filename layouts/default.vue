<template>
  <div>
    <Header />
    <div class="my_container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  components: {
    Header
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #EDF2F7;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.my_container {
  padding: 0 20rem;
}
/* SmartPhone */
@media only screen and (max-width: 500px) {
  .my_container {
    padding: 0 1rem;
  }
}
/* Tablet */
@media only screen and (min-width: 501px) and (max-width: 768px) {
  .my_container {
    padding: 0 6rem;
  }  
}
/* Normal */
@media only screen and (min-width: 769px) and (max-width: 1199px){
  .my_container {
    padding: 0 10rem;
  }  
}
</style>