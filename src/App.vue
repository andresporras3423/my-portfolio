<template>
  <div class="app">
    <div>
      <navigation></navigation>
    <main>
      <presentation></presentation>
    <project v-for="(p, index) in projects" 
    :key="index" 
    v-bind:properties="p" 
    v-bind:index="index"></project>
    </main>
    <footsection></footsection>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects: [{name: 'hihi', description: 'this is an example', github:'', live:'', url:'./src/assets/bogota-houses.png'},
      {name: 'hihi2', description: 'this is an example2', github:'', live:'', url:'./src/assets/weather-bot.png'},
      {name: 'hihi3', description: 'this is an example3', github:'', live:'', url:'./src/assets/articles.png'}]
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
  .app{
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    grid-template-rows: 1fr;
  }

  .app > div {
    grid-column: 2;
    grid-row: 1;
  }
</style>
