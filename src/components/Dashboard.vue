<template>
  <main>
    <div class="container">
      <ProgressBar />
    </div>
    <div class="container last-container">
      <TodoList />
    </div></main
></template>

<script>
import ProgressBar from './ProgressBar'
import TodoList from './TodoList'

export default {
  components: {
    ProgressBar,
    TodoList
  }
}
</script>

<style>
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
