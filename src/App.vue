<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Comfortaa', cursive;
  font-size: 1.125rem;
  font-weight: 300;
  background-image: url('./assets/email.png');
  background-repeat: repeat;
  background-position: center;
}

h1,
h2,
p {
  margin-top: 0;
}
</style>
