<template>
  <div id="app">
    <navigation></navigation>
    <presentation></presentation>
    <project v-for="(p, index) in projects" 
    :key="index" 
    v-bind:properties="p" 
    v-bind:index="index"></project>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects: [{name: 'hihi', description: 'this is an example', github:'', live:'', url:'./src/assets/bogota-houses.png'},
      {name: 'hihi2', description: 'this is an example2', github:'', live:'', url:'./src/assets/weather-bot.png'}]
    }
  },
  methods: {
    greeting: function(){
      return "hello world"
    }
  }
}
</script>

<style>

</style>
