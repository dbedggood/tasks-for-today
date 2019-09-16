<template>
  <div id="app">
    <Header />
    <main>
      <div class="container">
        <ProgressBar />
      </div>
      <div class="container"></div>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'

export default {
  name: 'app',
  components: {
    Header,
    ProgressBar
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

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  padding: 3em;
  width: 90%;
}

@media (min-width: 700px) {
  main {
    flex-direction: row;
  }
}
</style>
