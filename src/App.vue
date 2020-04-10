<template>
  <div class="app">
    <div>
      <navigation></navigation>
    <main>
      <presentation></presentation>
      <div class="title-section">
        <span>My Projects</span>
      </div>
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
      projects: [{name: 'Bogotá Houses', description: 'Directory of real states in Bogotá for selling and renting. Pure HTML and CSS project.', github:'https://github.com/andresporras3423/bogota-houses', live:'http://andresporres.000webhostapp.com/bogota-houses/main.html', url:'./src/assets/bogota-houses.png', tools: ['HTML', 'CSS', 'Bootstrap']},
      {name: 'Weather Bot', description: 'This telegram bot give you updates of temperature of any city or country in the world.', github:'https://github.com/andresporras3423/weather-bot-ruby', live:'https://web.telegram.org/#/im?p=@weather3423_bot', url:'./src/assets/weather-bot.png', tools: ['Ruby', 'Telegram API']},
      {name: 'The Cool Writer', description: 'A blog with articles about lot of different random topics. Any user can sign up and add articles', github:'https://github.com/andresporras3423/articles-project', live:'https://blueberry-custard-86240.herokuapp.com/', url:'./src/assets/articles.png', tools:['Ruby', 'Ruby On Rails', 'SQL', 'HTML', 'CSS', 'Bootstrap']}]
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

  .title-section {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
  }

  .title-section > span {
    font-size: 30px;
  }
</style>
