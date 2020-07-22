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
  padding: 0 24rem;
}
</style>
