import Vue from 'vue'
import App from './App.vue'
import Navigation from './navigation.vue'
import Presentation from './presentation.vue'

Vue.component('navigation', Navigation);
Vue.component('presentation', Presentation);

new Vue({
  el: '#app',
  render: h => h(App)
})
