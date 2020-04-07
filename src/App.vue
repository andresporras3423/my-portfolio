<template>
  <div id="app">
    <navigation></navigation>
    <presentation></presentation>
    <p>{{msg}}</p>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
