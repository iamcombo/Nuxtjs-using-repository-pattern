<template>
  <nav class="nav">
    <div class="contain">
      <div class="grid grid-cols-7 text-white gap-2">
        <div>News</div>
        <div>Newest</div>
        <div>Ask</div>
        <div>Show</div>
        <div>Job</div>
        <div class="col-span-2 lg:col-end-10">Built with Nuxt.js</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'News', link: '' },
        { name: 'Newest', link: '' },
        { name: 'Ask', link: '' },
        { name: 'Show', link: '' },
      ]
    }
  }
}
</script>

<style scoped>
.nav {
  height: 50px;
  width: 100vw;
  background: #2e495e;
}
.contain {
  padding: 12px 20rem;
}
/* SmartPhone */
@media only screen and (max-width: 500px) {
  .contain {
    padding: 12px 1rem;
  }
}
/* Tablet */
@media only screen and (min-width: 501px) and (max-width: 768px) {
  .contain {
    padding: 12px 2rem;
  }  
}
/* Normal */
@media only screen and (min-width: 769px) and (max-width: 1199px){
  .contain {
    padding: 12px 10rem;
  }  
}
</style>