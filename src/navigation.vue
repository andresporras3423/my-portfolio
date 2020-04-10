<template>
  <header class="header-styles">
    <a v-on:click="scroll(575)">Projects</a>
    <a v-on:click="scroll(1000)">Contact</a>
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    scroll: function(y){
      debugger;
      window.scrollBy(window.scrollX, window.scrollY + y);
    }
  }
}
</script>

<style>
  .header-styles{
    display: flex;
    height: 100px;
    flex-direction: row-reverse;
    align-items: center;
  }

  .header-styles > a {
    flex-basis:10%;
    cursor: pointer;
  }
</style>
