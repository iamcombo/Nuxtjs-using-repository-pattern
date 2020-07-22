<template>
  <nav class="nav">
    <div class="contain flex align-center">
      <div class="grid grid-cols-10 text-white">
        <div>News</div>
        <div>Newest</div>
        <div>ASK</div>
        <div>Show</div>
        <div>Job</div>
        <div class="col-end-11 col-span-2">Built with Nuxt.js</div>
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
  padding: 12px 24rem;
}
</style>