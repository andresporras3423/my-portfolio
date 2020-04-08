import Vue from 'vue'
import App from './App.vue'
import Navigation from './navigation.vue'
import Presentation from './presentation.vue'
import Project from './project.vue'

Vue.component('navigation', Navigation);
Vue.component('presentation', Presentation);
Vue.component('project', Project);

new Vue({
  el: '#app',
  render: h => h(App)
})
