<template>
  <div class="header">
    <h1 class="title">Tasks for Today</h1>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  background-image: url('../assets/tweed.png');
  background-repeat: repeat;
  background-position: center;
  box-shadow: 0 5px 10px #555;
  min-height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  margin-bottom: 0;
  color: aliceblue;
  font-size: 3rem;
}
</style>
