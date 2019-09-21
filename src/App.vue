<template>
  <div id="app">
    <Brand />
    <router-view />
  </div>
</template>

<script>
import Brand from './components/Brand'

export default {
  name: 'app',
  components: {
    Brand
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
