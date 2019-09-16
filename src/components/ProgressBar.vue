<template>
  <div class="progress-bar">
    <progress-bar type="circle" ref="circle" :options="options"></progress-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        trailColor: '#aaa',
        strokeWidth: 1,
        trailWidth: 2,
        duration: 20000,
        text: {
          autoStyleContainer: true
        },
        from: { color: '#00ff00' },
        to: { color: '#ff0000' },
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color)
          circle.path.setAttribute('stroke-width', state.width)
          var value = 100 - Math.round(circle.value() * 100)
          if (value === 0) {
            circle.setText("Time's Up")
          } else {
            circle.setText(value + '%')
          }
        }
      }
    }
  },
  mounted() {
    this.$refs.circle.animate(1.0)
  }
}
</script>

<style scoped>
.progress-bar {
  text-align: center;
  font-size: 5vw;
}
</style>
