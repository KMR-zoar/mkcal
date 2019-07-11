<template>
  <div id="app">
    <h1>Calendar format creator</h1>
    <formatter/>
  </div>
</template>

<script>
import formatter from './components/formatter'

export default {
  name: 'App',
  components: {
    formatter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
