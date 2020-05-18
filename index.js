

var navigation = Vue.component('navigation',(
    {
        name:'navigation',
        created: function(){
        },
        watch:{
        },
        data: function () {
            return {
            }
          },
          methods: {
            scroll: function(y){
              
              window.scrollBy(0, y-window.scrollY);
            }
          }
    }
));

var presentation = Vue.component('presentation',(
    {
        name:'presentation',
        created: function(){
            this.updateColor();
          },
        data: function () {
          return {
              colorClass:["","disappear"],
              colorOpt: 0
          }
        },
        methods: {
            updateColor: function(){
              var that = this
                setTimeout(function(){
              that.colorOpt= (that.colorOpt+1)%2;
              that.updateColor()
              }, 1000);
            }
        }
    }
));

var project = Vue.component('project',(
    {
        name:'project',
        props: ['properties', 'index'],
  data: function () {
    return {
        global: this.$eventHub,
        photo: "photo",
        col6: "col-6",
        direction: ["g-column1","g-column2"],
        info: "info"
    }
  },
  methods: {
      giveUrl: function(){
          return "background-image: url('"+this.properties.url+"');";
      }
  }
}
));

var footsection = Vue.component('footsection',(
    {
        name:'footsection',
        created: function(){
        },
        watch:{
        },
        data:function(){
            return {
                global: this.$eventHub
            }
        },
        methods:{
            
        }
    }
));

Vue.prototype.$eventHub = new Vue(); 

Vue.prototype.$eventHub.redirect = function(url) {
  window.open(url, '_blank');
}

var app = new Vue({
    el: '#app',
    created: function(){
     console.log("hello world");
    },
    data:{
        projects: [{name: 'Bogotá Houses', description: 'Directory of real states in Bogotá for selling and renting. Pure HTML and CSS project.', github:'https://github.com/andresporras3423/bogota-houses', live:'http://andresporres.000webhostapp.com/bogota-houses/main.html', url:'./src/assets/bogota-houses.png', tools: ['HTML', 'CSS', 'Bootstrap']},
      {name: 'Weather Bot', description: 'This telegram bot give you updates of temperature of any city or country in the world.', github:'https://github.com/andresporras3423/weather-bot-ruby', live:'https://web.telegram.org/#/im?p=@weather3423_bot', url:'./src/assets/weather-bot.png', tools: ['Ruby', 'Telegram API']},
      {name: 'The Cool Writer', description: 'A blog with articles about lot of different random topics. Any user can sign up and add articles', github:'https://github.com/andresporras3423/articles-project', live:'https://blueberry-custard-86240.herokuapp.com/', url:'./src/assets/articles.png', tools:['Ruby', 'Ruby On Rails', 'SQL', 'HTML', 'CSS', 'Bootstrap']},
      {name: 'English Project', description: 'A website with diferente resources and features to improve your english', github:'https://github.com/andresporras3423/english-project', live:'https://englishproject000.000webhostapp.com/ep/index.html', url:'./src/assets/english-project.png', tools:['Vue.js', 'JavaScript', 'SQL', 'PHP', 'HTML', 'CSS', 'Bootstrap']}]
    }
  });