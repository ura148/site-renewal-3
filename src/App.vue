<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Noto+Sans+JP:wght@400;700&family=Noto+Serif+JP:wght@700&display=swap');

html {
  font-size:62.5%;/*16px×62.5％＝10px*/
}

#app {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  font-family: 'Libre Baskerville', serif;
}

.subtitle {
  font-family: 'Noto Serif JP', serif;
}
</style>
