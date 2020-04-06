import Vue from 'vue'
import App from './App.vue'
import Navigation from './navigation.vue'

Vue.component('navigation', Navigation);

new Vue({
  el: '#app',
  render: h => h(App)
})
