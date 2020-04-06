<template>
  <div id="app">
    <p>{{msg}}</p>
    <p>{{greeting()}}</p>
    <navigation></navigation>
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
