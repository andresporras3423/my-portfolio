<template>
  <header class="header-styles">
    <a v-on:click="scroll(650)">Projects</a>
    <a v-on:click="scroll(1000)">Contact</a>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  methods: {
    scroll: function(y){
      debugger;
      window.scrollBy(0, y-window.scrollY);
      //window.scrollBy(window.scrollX, window.scrollY + y);
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
