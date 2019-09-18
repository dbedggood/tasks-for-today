<template>
  <div id="app">
    <Header />
    <main>
      <div class="container">
        <ProgressBar />
      </div>
      <div class="container last-container">
        <TodoList />
      </div>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    Header,
    ProgressBar,
    TodoList
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
  padding-bottom: 0;
  width: 90%;
}

.last-container {
  padding-bottom: 4em;
}

@media (min-width: 1000px) {
  main {
    flex-direction: row;
    align-items: flex-start;
  }

  .last-container {
    padding-bottom: 0;
  }
}
</style>
