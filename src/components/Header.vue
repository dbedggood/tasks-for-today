<template>
  <div class="header">
    <h1 class="brand">Tasks for Today</h1>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
.header {
  background-image: url('../assets/tweed.png');
  background-repeat: repeat;
  background-position: center;
  padding: 2em;
  box-shadow: 0 5px 10px #555;
}

.brand {
  text-align: center;
  margin-bottom: 0;
  color: aliceblue;
  font-size: 3rem;
}
</style>
